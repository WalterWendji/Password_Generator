const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]

let genPasswdEl = document.getElementById("genPasswd-el")
let firstPasswdEl = document.getElementById("firstPasswd-el")
let secondPasswdEl = document.getElementById("secondPasswd-el")

genPasswdEl.addEventListener("click", function () {
    firstPasswdEl.textContent = generatePassword()
    secondPasswdEl.textContent = generatePassword()

});

function generatePassword() {
    let password = ""
    for (let i = 0; i < 14; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length)
        password += characters[randomCharacter]
    }
    return password
}

firstPasswdEl.onclick = function() {
    document.execCommand("copy")
}

secondPasswdEl.onclick = function() {
    document.execCommand("copy")
}

firstPasswdEl.addEventListener("copy", function(event){
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", firstPasswdEl.textContent)
        console.log(event.clipboardData.getData("text"))
    }
})
secondPasswdEl.addEventListener("copy", function(event){
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", secondPasswdEl.textContent)
        console.log(event.clipboardData.getData("text"))
    }
})