// Ten skrypt jest umieszczony w natychmiast wykonywanym wyrażeniu funkcji, 
// co pomaga w ochornie zakresu zmiennych.
(function(){
    //Część I. Utowrzenie obiektu hotel oraz wyświetlenie szczegółów oferty.
    //Utworzenie obiektu hotel za pomocą składni literału obiektu.
    var hotel={
        name: 'Park',
        roomRate: 240, //Wartość wyrażona w złotych.
        discount: 15, //Rabat wyrażony w procentach.
        offerPrice: function(){
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    //Wyświetlenie nazwy hotelu, ceny standardowej oraz ceny specjalnej z uwzględnionym rabatem.
    var hotelName, roomRate, specialRate; //Deklaracja zmiennych.

    hotelName = document.getElementById('hotelName'); //Pobranie elementów.
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name; //Wyświetlenie nazwy hotelu.
    roomRate.textContent = hotel.roomRate.toFixed(2) + ' zł'; //Wyświetlenie ceny standardowej.
    specialRate.textContent = hotel.offerPrice() + ' zł'; //Wyświetlenie ceny specjalnej z uwzględnionym rabatem.

    //Część II. Obliczenie i wyświetlenie szczegółów dotyczących czasu trwania oferty promocyjnej.
    var expiryMsg; //Komunikat wyświetlany użytkownikowi.
    var today; //Bieżąca data.
    var elEnds; //Element wyświetlający komunikat o dacie wygaśnięcia oferty promocyjnej.

    function offerExpires(today) {
        //Zadeklarowanie zmiennych w funkcji, a więc mają zakres lokalny.
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        //Dodanie siedmiu dni (wyrażonych w milisekundach).
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //Utworzenie tablic przechowujących nazwy dni tygodnia i miesięcy.
        dayNames = ['niedzielę', 'poniedziałek', 'wtorek', 'środę', 'czwartek', 'piątek', 'sobotę'];
        monthNames = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
        //Wybór komponentów daty wyświetlanej na stronie.
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        //Przygotowanie komunikatu.
        expiryMsg = 'Oferta wygasa w: ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    //Umieszczenie dzisiejszej daty w zmiennej.
    elEnds = document.getElementById('offerEnds'); //Pobranie elementu offerEnds.
    elEnds.innerHTML = offerExpires(today);
    //Wyświetlenie przygotowanego komunikatu.

    //Koniec natychmiast wywołanego wyrażenia funkcji.
}());