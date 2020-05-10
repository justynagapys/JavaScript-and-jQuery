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

 