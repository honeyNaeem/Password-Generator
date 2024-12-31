


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

    // alert("Your password is generated")
    Toastify({
        text: "Your Password is generated",
        duration: 1000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,rgb(0, 33, 219),rgb(32, 240, 0))",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    inputBox.value = password

}

submitBtn.addEventListener('click', clickHua)

// console.log(inputBox.nextSibling);
// console.log(submitBtn);
