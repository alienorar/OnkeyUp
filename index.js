const textarea = document.getElementById("textarea").value
// const length = textarea.length
const count = document.getElementById("count")

 function countText(event) {
  event.preventDefault()
  let el = event.target.value
    count.innerHTML = el.split(" ").map((item, index) => (item !== "" && item !== ",", index ++)).length +  "words you entered"
   
}
  
const textareaSecond = document.getElementById("textarea_nd")
const result  = document.getElementById("result")
const wordToCheck = document.getElementById("wordToCheck")
const check = document.getElementById("check")

 function checkText() {
  let text = textareaSecond.value
  let textToCheck = text.split(" ")
  let word = wordToCheck.value
    if (textToCheck.includes(word)) {
      result.innerHTML = "bor"
     result.style.color = "green"
    }
    else{
      result.innerHTML = "yuq"
      result.style.color = "red"
    }
  }







