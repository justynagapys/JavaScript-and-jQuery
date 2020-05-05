function znajdzFibo() {
    var nr = fibo.value;
    var x = 0
    if (Number.isInteger(parseInt(nr)) == false){
        elemFibo.style.color = "red"
        elemFibo.innerHTML = "Podana przez Ciebie wartość nie jest liczbą! Napraw błąd!"
    } else {
    if (nr<2){
        x=nr;
    } else{
        var fib = 1, pop = 1, tmp;
        let i = 3;
        while (i <= nr) {
            tmp = pop;
            pop = fib;
            fib = tmp + pop;
            i++;
        }
        x = fib;
    }
    elemFibo.style.color = "black"
    elemFibo.innerHTML = fibo.value + " element ciągu Fibonacciego to: " + x
    }
}