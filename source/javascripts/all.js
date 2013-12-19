//= require "jquery-1.10.2.min"
//= require "lodash.compat.min"
//= require "select2"
//= require "select2_locale_ja"

var map;
var markers = [];
var site_num = 0;
var selector_options = [];
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


$(document).ready(function() {
  
  // Smooth Scrolling on page
  $('a[href^=#]').click(function(){
    var target= $(this).attr("href");
    var webkit = !document.uniqueID && !window.opera && !window.globalStorage && window.localStorage;
    $(webkit ? 'body' : 'html').animate({
      scrollTop: $(target).offset().top
    },400,'swing');
    return false;
  });
  
  // Map
  map = L.mapbox.map('map', 'georepublic.ghn7n3nf').setView([36.67740687825185, 136.71395820379257], 6);
  
  var mapIcon = new MapIcon();
  $.getJSON('https://spreadsheets.google.com/feeds/list/0AnJGwhMm-ribdEJ6V25HRTV2azVRNkpjTTJSQ3k3Nnc/1/public/values?alt=json').done(function(json){
    //console.log('done');
    $.each(json.feed.entry, function(key, entry) {
      if (entry.gsx$tags.$t == 'launch'){
        if (entry.gsx$location.$t != ''){
          var latlon = entry.gsx$location.$t.split(',');
          L.marker(latlon, {icon: mapIcon}).addTo(map).bindPopup('<a href="' + entry.gsx$sourceurl.$t + '" target="_blank">' + entry.gsx$source.$t + '</a>');
          selector_options.push({name: entry.gsx$source.$t, cd: entry.gsx$organizationcode.$t - 0, url: entry.gsx$webpage.$t});
          site_num++;
        }
      }
    });
    
    // Display Site number
    $('.js-city-num').text(site_num);
    
    // Site Selector
    _.sortBy(selector_options, 'cd').forEach(function(opt) {
      $('#js-site-selector').append($('<option />').val(opt.url).html(opt.name));
    });
    $('#js-site-selector').select2({
      width: "300px",
      placeholder: "自治体を選択してください"
    });
  }).fail(function( jqxhr, textStatus, error ){
    console.log('fail');
    console.log(textStatus);
    console.log(error);
  });
  
  $('#js-site-selector-button').on('click', function(e) {
    e.preventDefault();
    var url = $('#js-site-selector option:selected').val();
    if (url) {
      window.open(url);
    }
  });
});
