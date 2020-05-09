$(function(){

    //Konfiguracja
    var $list, $newItemForm, $newItemButton;
    var item = '';              //Ta zmienna elementu zawiera pusty ciąg tekstowy.
    $list = $('ul');            //Buforowanie nieuporządkowanej listy.
    $newItemForm = $('#newItemForm');
    //Buforowanie formularza dodawania nowego elementu.

    $newItemButton = $('#newItemButton');
    //Buforowanie przycisku pokazującego formularz.
    $('li').hide().each(function(index){            //Ukrycie elementów listy.
        $(this).delay(450*index).fadeIn(1600);      //A następnie ich pokazanie.
    });

    //Licznik elementów.
    function updateCount(){                             //Deklaracja funkcji
        var items = $('li[class!=complete]').length;    //Liczba elementów znajdujących się na liście.
        $('#counter').text(items);                      //Umieszczenie liczby w nagłówku
    }
    updateCount();                                      //Wywołanie funkcji.

    //Konfiguracja formularza dodawania nowego elementu.
    $newItemButton.show();                              //Pokazanie przycisku.
    $newItemForm.hide();                                //Ukrycie formularza.
    $('#showForm').on('click', function(){              //Po kliknięciu nowego elementu.
        $newItemButton.hide();                          //Ukrycie przycisku.
        $newItemForm.show();                            //Pokazanie formularza.
    });

    //Dodanie nowego elementu listy.
    $newItemForm.on('Submit', function(e){              //Kiedy nowy element zostanie przekazany.
        e.preventDefault();                             //Uniemożliwienie wysłania formularza.
        var text = $('input:text').val();               //Pobranie wartości pola tesktowego.
        $list.append('<li>' + text + '</li>');          //Dodanie elementu do końca listy.
        $('input:text').val('');                        //Opróżnienie pola tekstowego.
        updateCount();                                  //Uaktualnienie licznika.
    });

    //Obsługa kliknięcia = używana jest delekacha w elemencie <ul>.
    $list.on('click', 'li', function(){
        var $this = $(this);                            //Buforowanie elementu w obiekcie jQuery.
        var complete = $this.hasClass('complete');      //Czy zadanie zostało wykonane?
        if (complete===true){                           //Sprawdzenie czy zadanie zostało wykonane
            $this.animate({                             //Jeżeli tak, animujemy właściwości opacity i padding.
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function(){
                //Użycie funckji wywołania zwrotnego po zakończeniu animacji.
                $this.remove();                         //Całkowite usunięcie danego elementu.
            });
        } else{                                         //W przeciwnym razie oznaczamy zadanie jako wykonane.
            item = $this.text();                        //Pobranie tekstu z elementu listy.
            $this.remove();                             //Usunięcie elementu listy.
            $list
            //DOdanie elementu z powrotem na końcu listy - jako zadania wykonanego.
            .append('<li class=\"complete\">' + item + '</li>')
            .hide().fadeIn(300);                        //Ukrycie elementu, aby mógł się później pojawić.
            updateCount();                              //Uaktualnienie licznika.
        }                                               //Koniec bloku else
    });                                                 //Koniec procedury obsługi zdarzeń.
});