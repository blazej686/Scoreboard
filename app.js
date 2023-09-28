// Global Vars

let homeScore = 0
let awayScore = 0



// Functions

function increaseAway1() {
    awayScore += +1
    updateAwayScore()

}

function increaseAway3() {
    awayScore += +3
    updateAwayScore()
}

function increaseHome1() {
    homeScore += +1
    updateHomeScore()
}

function increaseHome3() {
    homeScore += +3
    updateHomeScore()
}


function updateAwayScore() {
    const awayScoreelement = document.getElementById('awayScore')
    awayScoreelement.innerText = awayScore


} function updateHomeScore() {
    const homeScoreElement = document.getElementById('homeScore')
    homeScoreElement.innerText = homeScore

}
function sub1Away() {
    awayScore -= 1
    updateAwayScore()

}

function sub1Home() {
    homeScore -= 1
    updateHomeScore()
}

function resetScores() {
    homeScore = 0
    awayScore = 0
    updateAwayScore()
    updateHomeScore()
}