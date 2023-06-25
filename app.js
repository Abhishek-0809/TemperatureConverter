
var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

cel.addEventListener("input", function () {
    console.log("Celsius changed")
    let c = Number(this.value);
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;

    if (!Number.isInteger(f)) {
        f = f.toFixed(2);
    }
    if (!Number.isInteger(k)) {
        k = k.toFixed(2);
    }
    fah.value = f;
    kel.value = k;
});

fah.addEventListener("input", function () {
    console.log("Fahrenheit changed")
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    let k = 5 / 9(f - 32) + 273.15;

    if (!Number.isInteger(c)) {
        c = c.toFixed(2);
    }
    cel.value = c;

});
kel.addEventListener("input", function () {
    console.log("Kelvin changed")

    let k = this.value;


    if (!Number.isInteger(k)) {
        k = k.toFixed(2);
    }
    kel.value = k;
});

