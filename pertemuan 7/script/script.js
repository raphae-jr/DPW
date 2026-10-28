import {
    increment,
    inputSisaKarakter,
    fokusSisaKarakter,
    blurSisaKarakter,
    cekCaptcha,
    melakukanCopy,
    melakukanPaste,
    submitData
} from "./form.js";


document
    .getElementById("naik")
    .addEventListener("click", increment);


document
    .getElementById("nama")
    .addEventListener("input", inputSisaKarakter);


document
    .getElementById("nama")
    .addEventListener("focus", fokusSisaKarakter);


document
    .getElementById("nama")
    .addEventListener("blur", blurSisaKarakter);


document
    .getElementById("inputCaptcha")
    .addEventListener("input", cekCaptcha);


document
    .getElementById("inputCopy")
    .addEventListener("copy", melakukanCopy);


document
    .getElementById("inputPaste")
    .addEventListener("paste", melakukanPaste);


document
    .getElementById("latihan-form")
    .addEventListener("submit", submitData);