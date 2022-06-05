function submitfunction () {
    var valor = document.getElementById("weightvalue").value;
    var u = document.getElementById("unitFrom").value;
    var r = document.getElementById("unitTo").value; 
    var number = parseFloat(valor);
    
    if (u == r) {
        console.log ("Same measure!!");
        document.getElementById("txtvalue").innerHTML = 'Please, insert different measurements!';
    }
    if (u == "Option 1") {
        if (r == "Option 2") {
            const kgtooz = (number * 35.27396195);
            document.getElementById("txtvalue").innerHTML = number + ' kilograms are ' + kgtooz.toFixed(2) + ' ounces! ';
        }
        if (r == "Option 3") {
            const kgtolb = (number * 2.20462262185);
            document.getElementById("txtvalue").innerHTML = number + ' kilograms are ' + kgtolb.toFixed(2) + ' pounds! ';
        }
    }
    if (u == "Option 2") {
        if (r == "Option 1") {
            const oztokg = (number * 0.02834952);
            document.getElementById("txtvalue").innerHTML = number + ' ounces are ' + oztokg.toFixed(2) + ' kilograms! ';
        }
        if (r == "Option 3") {
            const oztolb = (number * 0.0625);
            document.getElementById("txtvalue").innerHTML = number + ' ounces are ' + oztolb.toFixed(2) + ' pounds! ';
        }
    }
    if (u == "Option 3") {
        if (r == "Option 1") {
            const lbtokg = (number * 0.453592);
            document.getElementById("txtvalue").innerHTML = number + ' pounds are ' + lbtokg.toFixed(2) + ' kilograms! ';
         }
        if (r == "Option 2") {
            const lbtooz = (number * 16);
            document.getElementById("txtvalue").innerHTML = number + ' pounds are ' + lbtooz.toFixed(2) + ' ounces! ';
        }
    }
    if (document.getElementById("weightvalue").value.length == 0) {
        document.getElementById("txtvalue").innerHTML = 'Please, insert a valid measure!';
    }
    if (document.getElementById("weightvalue").value < 0) {
        document.getElementById("txtvalue").innerHTML = 'Negatives measures ARE NOT valid!';
    }
    if (isNaN(document.getElementById("weightvalue").value )) {
        document.getElementById("txtvalue").innerHTML = 'Please, insert ONLY numbers!';
    }
}
