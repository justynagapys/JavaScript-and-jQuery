var noteInput, noteName, textEntered, target;       //Deklaracja zmiennych.

noteName = document.getElementById('noteName');     //Element zawierający notatkę.
noteInput = document.getElementById('noteInput');   //Element pozwalający na dodanie notatki.

function writeLabel(e){                             //Deklaracja funkcji.
    if (!e){                                        //Jeżeli obiekt zdarzenia nie istnieje.
        e = window.event;                           //Użycie rozwiązania awaryjnego dla IE5-8.
    }
    target = e.target || e.srcElement;              //Pobranie elementu docelowego dla zdarzenia.
    textEntered = e.target.value;                   //Wartość tego elementu.
    noteName.textContent = textEntered;             //Uaktualnienie tekstu notatki.
}

//W tym miejscu znajdują się kontrolki nagrywania i pauzy oraz funkcje...
function recorderControls(e) {                       //Deklaracja funkcji recorderControls().
    if (!e) {                                        //Jeżeli obiekt zdarzenia nie istnieje.
        e = window.event;                            //Użycie rozwiązania awaryjnego dla IE5-8.
    }
    target = e.target || e.srcElement;               //Pobranie elementu docelowego.
    if (event.preventDefault){                       //Jeżeli metoda preventDefault() jest obsługiwana.
        e.preventDefault();                          //Zatrzymanie akcji domyślnej.
    } else{                                          //W przeciwnym razie.
        event.returnValue = false;                   //Rozwiązanie awaryjne dla IE: zatrzymanie akcji domyślnej.
    }

    switch (target.getAttribute('data-state')){      //Pobranie atrybutów data-state.
        case 'record':                               //Jeżeli wartość atrybutu wynosi record.
            record(target);                          //Wywołanie funkcji record().
            break;                                   //Opuszczenie funkcji.
        case 'stop':                                 //Jeżeli wartość atrybutu wynosi stop.
            stop(target);                            //Wywołanie funkcji stop().
            break;                                   //Opuszczenie funkcji.
        //Tutaj można dodać kolejne przyciski...
    }
};

function record(target){                             //Deklaracja funkcji.
    target.setAttribute('data-state', 'stop');       //Przypisanie atrybutowi data-state wartości stop.
    target.textContent = 'stop';                     //Ustawienie tekstu 'stop'.
}

function stop(target){
    target.setAttribute('data-state', 'record');       //Przypisanie atrybutowi data-state wartości record.
    target.textContent = 'record';                     //Ustawienie tekstu 'record'.
}

if (document.addEventListener){                         //Jeżeli obserwator zdarzeń jest obsługiwany.
    document.addEventListener('click', function(e){     //W przypadku zdarzenia click.
        rocorderControls(e);                            //Wywołanie funkcji recorderControls().
    }, false);                                          //Przechwycenie w fazie propagowania zdarzeń.
//Jeżeli zdarzenie input zostanie wywołane dla pola tekstowego noteInput,
//to wywołaj funkcję writeLabel().
noteInput.addEventListener('input', writeLabel, false);
} else{                                                 //W przeciwnym razie.
    document.attachEvent('onclick', function(e){        //Rozwiązanie awaryjne dla IE: dowolne zdarzenie click.
        recorderControls(e);                            //Wywołanie funkcji recorderControls().
    });
    //Jeżeli zdarzenie keyup zostanie wywołane dla pola tekstowego noteInput,
    //to wywołaj funkcję writeLabel().
    noteInput.attachEvent('onkeyup', writeLabel, false);
}