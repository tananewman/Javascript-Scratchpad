window.onload = () => {
    let p1Score = 0;
    let p2Score = 0;
    let p1ScoreView = document.querySelector("#p1Score");
    let p2ScoreView = document.querySelector("#p2Score");
    let playingTo = 0;

    p1ScoreView.innerHTML = p1Score;
    p2ScoreView.innerHTML = p2Score;

    function isGameInProgress() {
        return p1Score < playingTo && p2Score < playingTo;
    };

    let resetGame = function() {        
        setPlayerScore(1, 0);
        setPlayerScore(2, 0);
        p1ScoreView.style.color = "black";
        p2ScoreView.style.color = "black";
        playingTo = document.querySelector("#playingToInput").value;
    }

    let setPlayerScore = function(playerNum, score) {
        if (playerNum === 1) {
            p1Score = score;
            p1ScoreView.textContent = score;
        } else if (playerNum === 2) {
            p2Score = score;
            p2ScoreView.textContent = score;
        } else {
            console.log("You're an idiot");
        }
    }

    document.querySelector("#playerOne").addEventListener("click", () => {
        if (isGameInProgress()) { 
            p1ScoreView.textContent = ++p1Score;
            console.log(p1Score);

            if (p1ScoreView.textContent == playingTo) {
                p1ScoreView.style.color = "green";
            }
        }
    });

    document.querySelector("#playerTwo").addEventListener("click", () => {
        if (isGameInProgress()) { 
            p2ScoreView.textContent = ++p2Score;

            if (p2ScoreView.textContent === playingTo) {
                p2ScoreView.style.color = "green";
            }
        }  
    });

    document.querySelector("#playingToInput").addEventListener("click", () => {
        playingTo = document.querySelector("#playingToInput").value;
    });

    document.querySelector("#reset").addEventListener("click", () => {
        resetGame();
        console.log(document.querySelector("#p1Score").textContent);
        console.log(document.querySelector("#p1Score").textContent);
    });    
};

