var map;
var markers = [];
var num = 0;

$(function() {
  $("#show-about").click(function() {
    $('#about').fadeIn(500);
  });
  $("#close-about").click(function() {
    $('#about').fadeOut(500);
  });
});

$(window).load(function() {
  addSupportBrowser();
  //console.log('hello');

  map = L.mapbox.map('map', 'georepublic.ghn7n3nf').setView([36.67740687825185, 136.71395820379257], 5);

  var mapIcon = new MapIcon();
  $.getJSON('https://spreadsheets.google.com/feeds/list/0AnJGwhMm-ribdEJ6V25HRTV2azVRNkpjTTJSQ3k3Nnc/1/public/values?alt=json').done(function(json){
    //console.log('done');
    var locations = [];
    $.each(json.feed.entry, function(key, entry) {
      if (entry.gsx$tags.$t == 'launch'){
        if (entry.gsx$location.$t != ''){
          var latlon = entry.gsx$location.$t.split(',');
          var title = entry.gsx$source.$t;
          var url = entry.gsx$sourceurl.$t;
          var oid = zerofill(entry.gsx$organizationcode.$t);
          L.marker(latlon, {icon: mapIcon}).addTo(map).bindPopup('<a href="' + url + '" target="_blank">' + title + '</a>');
          num++;
          // add locations to the searchbox
        }
        // push location
        locations.push(new MyLocation(oid,url,title));
      }
    });
    // sort
    locations.sort(function(a,b){
        if (a.oid < b.oid) return -1;
        if (a.oid > b.oid) return 1;
        return 0;
    });
    // add seelct options
    $.each(locations, function(key,object) {
      $("#search").append($('<option />').html(object.title).val(object.url));
    });
    $('.js-city-num').text(num);
    //map.fitBounds(markersToBounds(markers));
    // enable searchable plugin
    $("#search").searchable({
       maxListSize: 10000,
       maxMultiMatch: 10000
    });
    $("#search").parent().css("margin","auto"); // make position center for the div created by jquery.searchable
    // open url when selected any location
    $("#search").change(function(){
        window.open($("#search option:selected").val())
      });

  }).fail(function( jqxhr, textStatus, error ){
    console.log('fail');
    console.log(textStatus);
    console.log(error);
  });
});

var MapIcon = L.Icon.extend({
    options: {
        iconUrl: '/images/map_pin.png',
        iconSize:     [24, 32],
        shadowSize:   [24, 32],
        iconAnchor:   [11, 41],
        shadowAnchor: [2, 31],
        popupAnchor:  [4, -41]
    }
});

var addSupportBrowser = function(){
  jQuery.uaMatch = function( ua ) {
  ua = ua.toLowerCase();
  var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
    /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
    /(msie) ([\w.]+)/.exec( ua ) ||
    ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
    [];
  return {
      browser: match[ 1 ] || "",
      version: match[ 2 ] || "0"
  };
  };
  if ( !jQuery.browser ) {
  matched = jQuery.uaMatch( navigator.userAgent );
  browser = {};
  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
  }
  // Chrome is Webkit, but Webkit is also Safari.
  if ( browser.chrome ) {
    browser.webkit = true;
  } else if ( browser.webkit ) {
    browser.safari = true;
  }
  jQuery.browser = browser;
  }
}
//Location class
function MyLocation(oid, url, title){
    this.oid = oid;
    this.url = url;
    this.title = title;
}
// zero-filled 6 digit code
var zerofill = function(num){
  return ('00' + num).slice(-6);
}
