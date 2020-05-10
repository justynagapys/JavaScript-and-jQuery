//Odpowieni plik HTML do skryptu znajduje się w katalogu HTML&CSS.
$(function(){                           //Kiedy model DOM będzie gotowy.

    var times;                          //Deklaracja zmiennej globalnej.
    $.ajax({                            //Konfiguracja żądania.
        beforeStand: function(xhr){     //Przed wykonaniem żądania.   
            if (xhr.overrideMimeType){  //Jeżeli przeglądarka obsługuje tę metodę.
                xhr.overrideMimeType("application/json");   //ustaw typ MIME, aby uniknąć błędów
            }
        }
    });

    //Funckja pobierająca dane z pliku JSON.
    function loadTimetable(){           //Deklaracja funkcji
        $.getJSON('data/example.json')  //Próba zebrania danych JSON.
        .done( function(data){          //Jeżeli zakończy się powodzeniem,
            times=data;                 //to dane będą przechowywane w zmiennej.
        }).fail (function(){            //W przypadku problemu należy wyświetlić komunikat.
            $('#event').html('Przepraszamy! Nie udało się wczytać harmonogramu.'); 
        });
    }
    loadTimetable();                    //Wywołanie funkcji.

    //Kliknięcie wydarzenia powoduje wczytanie harmonogramu.
    $('#content').on('click', '#event a', function(e){      //Użytkownik klika wybraną lokalizację.

        e.preventDefault();                                 //Uniemożliwienie wczytania strony.
        var loc = this.id.toUpperCase();                    //Pobranie właściwości atrybutu id.

        var newContent = '';
        for (var i = 0; i < times[loc] / length; i++) {     //W celu utworzenia harmonogramu przeprowadzamy iteracje przes sesje.
            newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
            newContent += '<a href="descriptions.html#';
            newContent += times[loc][i].title.replace(/ /g, '-') + '">'
            newContent += times[loc][i].title + '</a></li>';
        }

        $('#sessions').html('<ul>' + newContent + '</ul>'); //Wyświetlenie godziny.

        $('#event a.current').removeClass('current');       //Uaktualnienie wybranego łącza.
        $(this).addClass('current');

        $('#details').text('');                             //Usunięcie zawartości trzeciej kolumny.
    });

    //Kliknięcie sesji powoduje wczytanie jej opisu.
    $('#content').on('click', '#sessions li a', function(e){ //Kliknięcie sesji.
        e.preventDefault();                                 //Nie ma przejścia na nową stronę.
        var fragment = this.href;                           //Tytuł znajduje się w atrybucie href.

        fragment = fragment.replace('#', '#');              //Dodanie spacji po znaku #.
        $('#details').load(fragment);                       //Wczytanie opisu.

        $('#sessions a.current').removeClass('current');    //Uaktualnienie elementu.
        $(this).addClass('current');
    });

    //Kliknięcie nawigacji.
    $('nav a').on('click', function(e){                     //Kliknięcie w elemencie <nav>.
        e.preventDeafult();                                 //Nie ma przejścia na nową stronę.
        var url = this.href;                                //Pobranie adresu URl do wczytania.

        $('nav a.current').removeClass('current');          //Uaktualnienie klas w nawigacji.
        $(this).addClass('current');

        $('#container').remove();                           //Usunięcie starego elementu.
        $('#content').load(url + ' #container').hide().fadeIn('slow');  //Dodanie nowego elementu.
    });
});