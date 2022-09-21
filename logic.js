let lbl = document.getElementById("lbl");
let txt = document.getElementById("numtxt");
let btn = document.getElementById("btn");
let form = document.getElementById("mainForm");

let data = {
    1: "Mayank M. Kanakiya",
    2: "Bhavesh M. Kanakiya"
}

txt.onkeyup = function () {
    if (data[txt.value] != undefined) {
        lbl.innerText = data[txt.value]
    } else {
        lbl.innerText = "";
    }
}