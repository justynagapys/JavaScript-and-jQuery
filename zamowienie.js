//Odpowieni plik HTML do skryptu znajduje się w katalogu HTML&CSS
//Utworzenie zmiennych do obsługi komunikatu powiatania.
var greeting = 'Witaj, ';
var name = 'Janku';
var message = ', proszę, sprawdź zamówienie:';
//Połączenie powyższych zmiennych w celu utworzenia ostatecznego komunikatu.
var welcome = greeting + name + message;

//Utworzenie zmiennych do obsługi szczegółów związanych z tabliczką.
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Pobieranie elementu, którego wartością atrybutu id jest greeting.
var el = document.getElementById('greeting');
//Zastąpienie wartości tego elementu spersonalizowanym komunikatem powitania.
el.textContent = welcome;

//Pobieranie elementu, którego wartościa atrybutu id jest userSign, a następnie uaktualnienie jego zawartości.
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Pobieranie elementu, którego wartościa atrybutu id jest tiles, a następnie uaktualnienie jego zawartości.
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Pobieranie elementu, którego wartością atrybutu id jest subTotal, a następnie uaktualnienie jego zawartości.
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal + ' zł';

//Pobieranie elementu, którego wartością atrybutu id jest shipping, a następnie uaktualnienie jego zawartości.
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping + ' zł';

//Pobieranie elementu, którego wartością atrybutu id jest grandTotal, a następnie uaktualnienie jego zawartości.
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + ' zł';