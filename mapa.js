//Odpowieni plik HTML do skryptu znajduje się w katalogu HTML&CSS.
function init(){
    var mapOptions = {                  //Konfiguracja opcji mapy.
        center: new google.maps.LatLng(40.782710,-73.965310),
        mapTypeId: google.maps.MapTydeId.ROADMAP,
        zoom: 13
    };
    var venueMap;                       //Metoda Mpa() powoduje wygenerowanie mapy.
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript(){
    var script = document.createElement('script');  //Utworzenie elementu <script>.
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize';
    document.body.appendChild(script);              //Umieszczenie elementu na stronie.
}

window.onload = loadScript;                         //Wywołanie zdarzenia onload.

 var mapOptions={
    zoom: 14,
    center: new google.maps.LatLng(40.782710, -73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl: true,
    scaleControlOptions:{
        position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false
 };

 styles:[                                           //Właściowść styles to tablica obiektów.
     {
        stylers: [                                  //Właściwość stylers przechowuje tablicę obiektów.
            {hue: "#00ff6f"}                        //Ogólne kolory mapy.
            {saturation: -50}                       //Ogólne nasycenie mapy.
        ]
     },
     {
         featureType: "road",                       //Modyfikacje dotyczące dróg.
         elementType: "geometry",                   //Geometria wyświetlonego elementu (linie).
         stylers: [
             {lightness: 100},                      //Jasność dróg
             {visibility: "simplified"}             //Poziom szczegółowości dróg
         ]
     },
     {
         featureType: "transit",                    //Modyfikacje dotyczące transportu publicznego.
         elementType: "geometry",                   //Geometria wyświetlanego elementu (linie).
         stylers:[
             {hue: "#ff6600"},                      //Kolor dla transportu publicznego.
             {saturation: +80}                      //Nasycenie dla transportu publicznego.
         ]
     },
     {
         featureType: "transit",                    //Modyfikacje dotyczące transportu publicznego.
         elementType: "labels",                     //Etykiety dla wyświetlanego elementu.
         stylers:[
             {hue: "#ff0066"},                      //Kolor etykiety.
             {saturation: +80}                      //Nasycenie etykiety.
         ]
     }
 ]
 