


let box = document.getElementById("box")



let inputBox = document.getElementById("inputBox");
let submitBtn = document.getElementById("submitBtn");

submitBtn.innerText = "Generate Password🤫"

function clickHua() {

    const characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_|{}:<>,.''/?+";
    let length = 9
    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * characters.length)
        console.log(random);
        password += characters[random]
    }

    alert("Your password is generated")

    inputBox.value = password

}

submitBtn.addEventListener('click', clickHua)

// console.log(inputBox.nextSibling);
// console.log(submitBtn);
