let countHome = 0
let countGuest = 0
let count = 0
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let newGame = document.getElementById("newGame")

function addHome1() {    
   countHome += 1
   scoreHome.textContent = countHome   
}

function addHome2() {
    countHome += 2
    scoreHome.textContent = countHome    
}

function addHome3() {
    countHome += 3
    scoreHome.textContent = countHome        
}

function addGuest1() {
    countGuest += 1
    scoreGuest.textContent = countGuest    
}

function addGuest2() {
    countGuest += 2
    scoreGuest.textContent = countGuest      
}

function addGuest3() {
    countGuest += 3
    scoreGuest.textContent = countGuest    
}

function reset() {
    scoreHome.textContent = count
    scoreGuest.textContent = count 
}
    
