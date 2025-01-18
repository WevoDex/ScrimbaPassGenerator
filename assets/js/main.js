const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let randomKey = document.getElementsByClassName("shark")[0]
let randomPass = document.getElementsByClassName("whale")[0]
function passGen() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar];
}
function randomGen() {
    randomKey.textContent = ""
    randomPass.textContent = ""
    for (let i = 0; i < 11; i++) {
        randomKey.textContent += passGen()
        randomPass.textContent += passGen()
    }
}
randomGen()

function clicktocopy() {
    function checkRandom() {
        randomKey.onclick = function () {
            navigator.clipboard.writeText(randomKey.textContent)
            alert("Password Coppied: " + randomKey.textContent);
            checkRandom()
        };
    }
    function checkRandomPass() {
        randomPass.onclick = function () {
            navigator.clipboard.writeText(randomPass.textContent)
            alert("Password Coppied: " + randomPass.textContent)
            checkRandomPass()
        };
    }

    if (checkRandom()) {
        navigator.clipboard.writeText(randomKey.textContent)
        alert("Password Coppied: " + randomKey.textContent);
    } else if (checkRandomPass()) {
        navigator.clipboard.writeText(randomPass.textContent)
        alert("Password Coppied: " + randomPass.textContent)
    }
}
clicktocopy()