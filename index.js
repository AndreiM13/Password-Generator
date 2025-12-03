const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordFirst = document.getElementById("first-password").addEventListener("click", generatePassword)
let passwordSecond = document.getElementById("second-password").addEventListener("click", generatePassword)


function generatePassword() {
    passwordFirst.textContent = ""
    passwordSecond.textContent = ""

    for (let i = 0; i < 15; i++) {  
        let random1 = Math.floor(Math.random() * characters.length)
        let random2 = Math.floor(Math.random() * characters.length)

        passwordFirst.textContent += characters[random1]
        passwordSecond.textContent += characters[random2]
    }
}


generatePassword()


