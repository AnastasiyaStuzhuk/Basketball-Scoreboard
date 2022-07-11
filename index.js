let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function homeAdd1Btn() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
    compareResult()
}

function homeAdd2Btn() {
    homeScore += 2
    homeScoreEl.textContent = homeScore;
    compareResult()
}

function homeAdd3Btn() {
    homeScore += 3
    homeScoreEl.textContent = homeScore;
    compareResult()
}

function guestAdd1Btn() {
    guestScore += 1
    guestScoreEl.textContent = guestScore;
    compareResult()
}

function guestAdd2Btn() {
    guestScore += 2
    guestScoreEl.textContent = guestScore;
    compareResult()
}

function guestAdd3Btn() {
    guestScore += 3
    guestScoreEl.textContent = guestScore;
    compareResult()
}

function compareResult() {
    if (homeScore > guestScore) {
        homeScoreEl.style.color = '#E11D48'
    } else if (homeScore < guestScore) {
        homeScoreEl.style.color = '#F94F6D'
        guestScoreEl.style.color = '#E11D48'
    } else {
        homeScoreEl.style.color = '#F94F6D'
        guestScoreEl.style.color = '#F94F6D'
    }
}

function resetBtn() {
    homeScore = 0
    homeScoreEl.textContent = 0
    homeScoreEl.style.color = '#F94F6D'
    guestScore = 0
    guestScoreEl.textContent = 0
    guestScoreEL.style.color = '#F94F6D'
}