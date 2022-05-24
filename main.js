function selectweight() { //Prints the number written for organizingation purposes (this function should be deleted soon)//         
    var valor = document.getElementById("weightvalue").value;
    console.log(valor);
}

function unitselected() {
    var u = document.getElementById("unitFrom").value;
    console.log(u);
}

function unitselected2() {
    var r = document.getElementById("unitTo").value;
    console.log(r);
}

function submitfunction () {    
    var valor = document.getElementById("weightvalue").value;
    var number = parseFloat(valor);
    console.log(number * 1000);

}
