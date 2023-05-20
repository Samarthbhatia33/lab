let totalPressedCount = 0
let totalPressed = document.getElementById("totalPressed")


let buttonOneCounter = 0
let buttonTwoCounter = 0
let buttonThreeCounter = buttonOneCounter + buttonTwoCounter

let buttonOne = document.getElementById("buttonOne")
let buttonTwo = document.getElementById("buttonTwo")
let buttonThree = document.getElementById("buttonThree")

buttonOne.addEventListener('click', ()=>{
    buttonOneCounter ++
    buttonOne.innerHTML = "Button 1 Pressed " + buttonOneCounter + " times"
    totalPressedCount = buttonOneCounter + buttonTwoCounter + buttonThreeCounter
    totalPressed.innerHTML = "Total Times Pressed = " + totalPressedCount
 
})

buttonTwo.addEventListener('click', ()=>{
    buttonTwoCounter ++
    buttonTwo.innerHTML = "Button 2 Pressed " + buttonTwoCounter + " times"
    totalPressedCount = buttonOneCounter + buttonTwoCounter + buttonThreeCounter
    totalPressed.innerHTML = "Total Times Pressed = " + totalPressedCount
})

buttonThree.addEventListener('click', ()=>{
    buttonThreeCounter ++
    buttonThree.innerHTML = "Button 3 Pressed " + buttonThreeCounter + " times"
    totalPressedCount = buttonOneCounter + buttonTwoCounter + buttonThreeCounter
    totalPressed.innerHTML = "Total Times Pressed = " + totalPressedCount
        
})

let myArray = [0,1,1,2,5]

let nounArray = ["computer","flower","puppy",""]
let nounSpan = document.getElementById('nounSpan')

nounSpan.addEventListener('click')
  nounSpan.innerHTML= nounArray[nounCounter]
    nounCounter++

  if(nounCounter > nounArray )

  