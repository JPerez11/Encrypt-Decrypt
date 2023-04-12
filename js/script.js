/* Variables */

const encryptButton = document.getElementById("encrypt_button");
encryptButton.addEventListener("click", encrypt);
const decryptButton = document.getElementById("decrypt_button");
decryptButton.addEventListener("click", decrypt);
const copyButton = document.getElementById("copy_text");
copyButton.addEventListener("click", copy);
const textIn = document.getElementById("text_in");
const textOut = document.getElementById("text_out");
const error = document.getElementById("input_error");


const letter = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};
const regex = "^[a-z]+$";
const vowels = /[aeiou]/g;

/* Functions */

function validate(text) {
    if (!text.match(regex)) {
        return true;
    }
}

function encrypt() {
    let text = textIn.value;
    if (text === "") {
        textIn.setAttribute("placeholder", "You can't encrypt the field empty");
    } else if (validate(text)) {
        textOut.setAttribute("placeholder", "Only lowercase letters are allowed");
    } else {
        textIn.setAttribute("placeholder", "Write your text to encrypt");
        let textEncrypt = text.replace(vowels, (char) => { return letter[char] });
        textOut.innerHTML = textEncrypt;
    }
}

function decrypt() {
    let text = textOut.value;
    if (validate(text)) {
        textOut.setAttribute("placeholder", "You can't decrypt the field empty");
    } else {
        textOut.removeAttribute("placeholder");
        let textEncrypt = text;
        for (const key in letter) {
            const revert = new RegExp(letter[key], "g");
            textEncrypt = textEncrypt.replace(revert, key);
        }
        
        textOut.innerHTML = textEncrypt;
    }
}

function copy() {
    navigator.clipboard.writeText(textOut.textContent);
}