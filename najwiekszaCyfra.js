function znajdzNajwiekszy() {
    var ciag = cyfry.value;
    var tab = ciag.split(" ");
    if (tab.length > 7) {
        najwiekszy.style.color = "red"
        najwiekszy.innerHTML = "W ciągu wprowadzono więcej niż 7 cyfr! Napraw błąd!"
    } else {
        var maks = tab[0];
        for (var i = 0; i < tab.length; i++) {
            if (tab[i] > maks) {
                maks = tab[i];
            }
        }
        najwiekszy.style.color = "black"
        najwiekszy.innerHTML = "Największa cyfra to: " + maks
    }
}