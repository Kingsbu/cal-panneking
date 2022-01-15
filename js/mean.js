function clearScreen() {
    document.getElementById("result").innerHTML = "";
}

   // This function display values
function display(value) {
    document.getElementById("result").innerHTML += value;
}
   // This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").innerHTML;
    var q = eval(p);
    document.getElementById("result").innerHTML = q;
}

