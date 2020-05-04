//Dodanie elementów na początku i końcu listy.
var list = document.getElementsByTagName('ul')[0];  //Pobranie elementu <ul>.

//Dodanie nowego elementu na końcu listy.
var newItemLast = document.createElement('li');     //Utworzenie elementu.
var newTextLast = document.createTextNode('krem');  //Utworzenie węzła tekstowego.
newItemLast.appendChild(newTextLast);               //Dodanie węzła tekstowego do elementu.

list.appendChild(newItemLast);                      //Umieszczenie elementu na końcu listy.

//Dodanie nowego elementu na końcu listy.
var newItemFirst = document.createElement('li');    //Utworzenie elementu.
var newTextFirst = document.createTextNode('kapusta');
//Utworzenie węzła tekstowego.
newItemFirst.appendChild(newTextFirst);
//Dodanie węzła tekstowego do elementu.
list.insertBefore(newItemFirst, last.firstChild);
//Umieszczenie elementu na początku listy.

var listItems = document.querySelectorAll('li');    //Wszystkie elementy <li>.

//Dodanie klasy cool do wszystkich elementów listy.
var i;                                              //Zmiana licznika.
for (i=0; i<listItems.length; i++){                 //Iteracja przez elementy.
    listItems[i].className = 'cool';                //Zmiana klasy na cool.
}

//Dodanie do nagłówka liczby elementów znajdujących się na liście.
var heading = document.querySelector('h2');         //Element <h2>.
var headingText = heading.firstChild.nodeValue;     //Tekst elementu <h2>.
var totalItems = listItems.length;                  //Liczba elementów <li>.
var newHeading = headingText + '<span>' + totalItems + '</span>'; //Zawartość
heading.innerHTML = newHeading;                     //Uaktualnienie elementu <h2>.