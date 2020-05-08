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
});