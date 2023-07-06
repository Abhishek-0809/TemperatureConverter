
const cel = document.getElementById("cel");
const fah = document.getElementById("fah");
const kel = document.getElementById("kel");

function computeTemp(){
    //Add + to avoid string problem
    const currentValue = +event.target.value;

    switch (event.target.id) {
        case "cel" :
            fah.value = currentValue * 1.8 + 32;
            kel.value = currentValue + 273.15; 
            break;

        case "fah" :
            cel.value = (currentValue - 32) / 1.8; 
            kel.value = (currentValue - 32) / 1.8 + 273.15;
            break;

        case "kel" :
            cel.value = currentValue - 273.15; 
            fah.value = (currentValue - 273.15) * 1.8 + 32;
            break;
    
        default:
            break;
    }
}

// --------------------------Old script--------------------------

// cel.addEventListener("input", function () {
//     console.log("Celsius changed")
//     let c = Number(this.value);
//     let f = (c * 9 / 5) + 32;
//     let k = c + 273.15;

//     if (!Number.isInteger(f)) {
//         f = f.toFixed(2);
//     }
//     if (!Number.isInteger(k)) {
//         k = k.toFixed(2);
//     }
//     fah.value = f;
//     kel.value = k;
// });

// fah.addEventListener("input", function () {
//     console.log("Fahrenheit changed")
//     let f = Number(this.value);
//     let c = (f - 32) * 5 / 9;
//     let k = [(f - 32) * 5 / 9] + 273.15;

//     if (!Number.isInteger(c)) {
//         c = c.toFixed(2);
//     }
//     if (!Number.isInteger(k)) {
//         k = k.toFixed(2);
//     }
//     cel.value = c;
//     kel.value = k;

// });
// kel.addEventListener("input", function () {
//     console.log("Kelvin changed")
//     let k = Number(this.value);
//     let c = k - 273.15;
//     let f = [(k - 273.15) * 9 / 5] + 32;

//     if (!Number.isInteger(c)) {
//         c = c.toFixed(2);
//     }
//     if (!Number.isInteger(f)) {
//         f = f.toFixed(2);
//     }

//     cel.value = c;
//     fah.value = f;

// });

