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
  //console.log('hello');

  map = L.mapbox.map('map', 'georepublic.ghn7n3nf').setView([36.67740687825185, 136.71395820379257], 5);
  
  var mapIcon = new MapIcon();
  $.getJSON('https://spreadsheets.google.com/feeds/list/0AnJGwhMm-ribdEJ6V25HRTV2azVRNkpjTTJSQ3k3Nnc/1/public/values?alt=json').done(function(json){
    //console.log('done');
    $.each(json.feed.entry, function(key, entry) {
      if (entry.gsx$tags.$t == 'launch'){
        if (entry.gsx$location.$t != ''){
          var latlon = entry.gsx$location.$t.split(',');
          L.marker(latlon, {icon: mapIcon}).addTo(map).bindPopup('<a href="' + entry.gsx$sourceurl.$t + '" target="_blank">' + entry.gsx$source.$t + '</a>');
          num++;
        }
      }
    });
    $('.js-city-num').text(num);
    //map.fitBounds(markersToBounds(markers));
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

