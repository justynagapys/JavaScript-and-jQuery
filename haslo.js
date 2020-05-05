function poprawnoscHasla() {
    var x = inputpass.value
    if (x == "") {
        pass.style.color = "red"
        pass.innerHTML = "HASŁO JEST PUSTE"
    }
    else if (x.search("[0-9]") >= 0 && x.length > 6) {
        pass.style.color = "green"
        pass.innerHTML = "HASŁO JEST DOBRE"
    }
    else if (x.search("[0-9]") >= 0 && x.length >= 4 && x.length <= 6) {
        pass.style.color = "blue"
        pass.innerHTML = "HASŁO JEST ŚREDNIE"
    }
    else {
        pass.style.color = "yellow"
        pass.innerHTML = "HASŁO JEST SŁABE"
    }
}