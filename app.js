const checkSameArray = []
const score = document.querySelector('.score')
const winner = document.querySelector('.winner')
const cards = document.querySelectorAll('.card')





// main
let cardOpen = 0
document.addEventListener('click',e=>{
   
   if(e.target.matches('.front')){
       const position =e.target.dataset.id
       const parent =   e.target.parentElement
       parent.classList.add('flip')
    
      cardOpen++
    
     
    if (cardOpen === 1) {
          
           checkSameArray.push({parent,position})
          }
        else  if (cardOpen === 2) {
           
            checkSameArray.push({parent,position})
          
            checkSame(checkSameArray)
           
           
          }
          else if(cardOpen === 3){
              const first =  checkSameArray[0].position
              const second =  checkSameArray[1].position
              checkSameArray.push({parent,position})
            
              cardOpen = 1
              if (first != second) {
                checkSameArray[0].parent.classList.remove('flip')
                checkSameArray[1].parent.classList.remove('flip')
              
               
               
              }
              checkSameArray.splice(0,2)

          
          }
         
      
   }
  if (e.target.matches('.restart')) {
   const btnRestart = e.target
   btnRestart.addEventListener('click',restartGame)
  }


  
})



// check if its same
  function checkSame(data) {
   
      const first = data[0].position
      const second = data[1].position
      if (first === second) {
          score.innerText  = parseInt(score.innerText) + 1
        
         
      }

    if (score.innerText === "9"){
        showCongo()
      
    }}



//   reset game
function restartGame() {
    winner.classList.add('none')
    cards.forEach(card=>{
         card.classList.remove('flip')
        
    })
    score.innerText = 0
    checkSameArray.length = 0
    cardOpen = 0
   
}

// show congo
function showCongo() {
    winner.classList.remove('none')
   

}