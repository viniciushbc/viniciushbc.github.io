function submitfunction () {
    var valor = document.getElementById("weightvalue").value;
    var u = document.getElementById("unitFrom").value;
    var r = document.getElementById("unitTo").value; 
    var number = parseFloat(valor);
    
    if (u == r) {
        console.log ("Same measure!!");
    }
    if (u == "Option 1") {
        if (r == "Option 2") {
            const kgtooz = (number * 35.27396195);
            console.log(kgtooz);
        }
        if (r == "Option 3") {
            const kgtolb = (number * 2.20462262185);
            console.log(kgtolb);
        }
    }
    if (u == "Option 2") {
        if (r == "Option 1") {
            const oztokg = (number * 0.02834952);
            console.log(oztokg);
        }
        if (r == "Option 3") {
            const oztolb = (number * 0.0625);
            console.log(oztolb);
        }
    }
    if (u == "Option 3") {
        if (r == "Option 1") {
            const lbtokg = (number * 0.453592);
            console.log(lbtokg);
         }
        if (r == "Option 2") {
            const lbtooz = (number * 16);
            console.log(lbtooz);
        }
    }
}
