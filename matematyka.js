//Odpowieni plik HTML do skryptu znajduje się w katalogu HTML&CSS.
var table = 3;  //Liczba, na której będą przeprowadzane operacje.
var operator = 'addition';  //Rodzaj obliczeń (domyślnie to dodawanie).
var i = 1;  //Przypisanie licznikowi wartości 1.
var msg = '';   //Komunikat.

if (operator == 'addition'){    //Jeżeli wartością zmiennej operator jest addition.
    while(i<11){    //Dopóki licznik ma wartość mniejszą niż 11.
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';  //Obliczenia.
        i++;    //Dodanie 1 do wartości licznika.
    }
} else{     //W przeciwnym razie.
    while (i < 11){    //Dopóki licznik ma wartość mniejszą niż 11.
        msg += i + ' + ' + table + ' = ' + (i * table) + '<br />';  //Obliczenia.
        i++;    //Dodanie 1 do wartości licznika.
    }
}

//Wyświetlenie na stronie zawartości zmiennej msg.
var el = document.getElementById('blackboard');
el.innerHTML = msg;