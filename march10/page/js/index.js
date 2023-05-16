let nounArray = ["computer","flower","puppy","mouse","cat","bat"]

let nounSpan = document.getElementById('nounSpan')

nounSpan.addEventListener('click', ()=>{

  nounSpan.innerHTML= nounArray[nounCounter]
    nounCounter++

  if(nounCounter > nounArray.length -1){
        nounCounter = 0 
  }
