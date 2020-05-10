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
});