function znajdzNWD() {
    var liczba1 = l1.value;
    var liczba2 = l2.value;
    var x;
    if (Number.isInteger(parseInt(liczba1)) == false || Number.isInteger(parseInt(liczba2)) == false ){
        nwd.style.color = "red"
        nwd.innerHTML = "Co najmniej jedna z podanych wartości nie jest liczbą! Napraw błąd!"
    } else{
        do {
            x = liczba1 > liczba2 ? liczba1 - liczba2 : liczba2 - liczba1;
            if (liczba2 > liczba1) {
                liczba2 = x;
            } else {
                liczba1 = x;
            }
        }
        while (x != 0);
        nwd.style.color = "black"
        nwd.innerHTML = "NWD liczb " + l1.value + " i " + l2.value + " to: " + liczba2
    }
}