// task 1
const textarea = document.getElementById("textarea").value
const count = document.getElementById("count")

function countText(event) {
  event.preventDefault()
  let el = event.target.value
  count.innerHTML = el.split(" ").map((item, index) => (item !== "", index++)).length + "words you entered"

}

// TAsk 2
const textareaSecond = document.getElementById("textarea_nd")
const result = document.getElementById("result")
const wordToCheck = document.getElementById("wordToCheck")
const check = document.getElementById("check")

function checkText() {
  let text = textareaSecond.value
  let textToCheck = text.split(" ")
  let word = wordToCheck.value
  if (word !== "") {
    if (textToCheck.includes(word)) {
      result.innerHTML = "bor"
      result.style.color = "green"
    }
    else {
      result.innerHTML = "yuq"
      result.style.color = "red"
    }
  }

}


// task 3

const create = document.getElementById("create")
create.addEventListener("click", function createElement(e) {
  e.preventDefault()
  const height = document.getElementById("height").value
  const width = document.getElementById("width").value
  const borderRadius = document.getElementById("border-radius").value
  const backgroundColor = document.getElementById("bg-color").value
  const box = document.getElementById("box")

  box.style.height = height + "px"
  box.style.width = width + "px"
  box.style.borderRadius = borderRadius + "px"
  box.style.backgroundColor = backgroundColor

  document.innerText = box

})

// task 4

const fileInput = document.getElementById("file")
const volumeOutput = document.getElementById("volume")
function checkVolume() {
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0]
    const fileSizeInKb = (file.size / 1024).toFixed(2)
    volumeOutput.innerText = `Size:  ${fileSizeInKb} Kb`
    console.log((file.size / 1024).toFixed(2));
  }
  else {
    volumeOutput.innerText = ""
  }
}

// Task 5

const bracesInput = document.getElementById("braceInput").value
const bracesOutput = document.getElementById("bracesOutput")

function checkBraces() {
  const bracesInput = document.getElementById("braceInput").value
let openBracket = bracesInput.split("").filter(item => item === ")")
let closeBracket = bracesInput.split("").filter(item => item ==="(")
if (openBracket.length === closeBracket.length) {
  bracesOutput.innerText = "Opening and Closing brackets are equal"
  bracesOutput.style.color = "green"
}
else{
  bracesOutput.innerText = "Opening and Closing brackets aren't equal"
  bracesOutput.style.color = "red"
}
}




