// document.body.style.backgroundColor = "green"
// console.log(document);
// const box = document.querySelector(".box")

// for (let i = 0; i <= 20; i++) {
//     const h1 = document.createElement("li")
//     h1.textContent = "BYe World"
//     box.appendChild(h1)

// }

// let obj = {}
// const ChangeKey = (event) => {
//     const { name, value } = event.target
//     obj[name] = value

// }
// const btn = document.getElementById("btn")
// btn.addEventListener("click", function (e) {
// e.preventDefault()
//     const { username, password } = obj

//     if (username === "Alien" && password === "1234") {
//         alert("success")
//     }
//     else {
//         alert("Failure")
//     }
// })


// const password = document.getElementById("password").value
// const result = document.querySelector(".result")
// const line = document.querySelector(".line")
// let length = input.length
// function CheckPass(event) {
//     let el = event.target.value
//    if (el.length <= 3) {
//     result.innerHTML = "Password is too weak"
//        line.style.backgroundColor = "red"
//        result.style.color = "red"
//        line.style.width ="33%"
//        line.style.height = "2px"
//        line.style.transition = "0.8s"

//    }
//    else if (el.length <= 5) {
//        result.innerHTML = "Password is  weak"
//        result.style.color = "orange"
//        line.style.backgroundColor = "orange"
//        line.style.width ="54%"
//        line.style.height = "2px"
//        line.style.transition = "0.8s"
//    }
//    else if (el.length <= 8) {
//        result.innerHTML = "Password is strong"
//        line.style.backgroundColor = "green"
//        result.style.color = "green"
//        line.style.width = "100%"
//        line.style.height = "2px"
//        line.style.transition = "0.8s"
//    }
// }

const textarea = document.getElementById("textarea").value
// const length = textarea.length
const count = document.querySelector(".count")
function countText(event) {
    let el = event.target.value
    let arr = []
    el.split(" ").filter((item, index) => item !== ("") && item !== ",")

}