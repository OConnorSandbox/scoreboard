let homeCount = 0
let guestCount = 0

let homeScoreEl = document.getElementById("homeScore-El")
let guestScoreEl = document.getElementById("guestScore-El")

function homePlusOne(){
    homeCount += 1
    homeScoreEl.innerText = homeCount
}

function homePlusTwo(){
    homeCount += 2
    homeScoreEl.innerText = homeCount
}

function homePlusThree(){
    homeCount += 3
    homeScoreEl.innerText = homeCount
}

function guestPlusOne(){
    guestCount += 1
    guestScoreEl.innerText = guestCount
}

function guestPlusTwo(){
    guestCount += 2
    guestScoreEl.innerText = guestCount
}

function guestPlusThree(){
    guestCount += 3
    guestScoreEl.innerText = guestCount
}

function newGame(){
    homeScoreEl.innerText = 0
    guestScoreEl.innerText = 0
    homeCount = 0
    guestCount = 0
}