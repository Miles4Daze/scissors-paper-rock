var rps_ai;
var rps_pl;
var rps_pl_prm;

function gameEnd() {
    if (rps_ai == 1) {
        rps_ai = "rock"
    } else {
        if (rps_ai == 2) {
            rps_ai = "paper"
        } else {
            if (rps_ai == 3) {
                rps_ai = "scissors"
            } else {
                window.alert("Error, AI chose invalid number.")
            }
        }
    }
    document.write("<br>" + "AI = " + rps_ai);
    document.write("<br>" + "PLAYER = " + rps_pl_prm)
}


function win() {
    document.write("You win!");
    gameEnd()
}

function lose() {
    document.write("You lose!");
    gameEnd()
}

function tie() {
    document.write("It's a tie!");
    gameEnd()
}

rps_ai = Math.floor(Math.random() * 3) + 1;
rps_pl = prompt("Rock, Paper, or Scissors? ");
rps_pl_prm = rps_pl

if (rps_pl == "rock") {
    rps_pl = 1
} else {
    if (rps_pl == "paper") {
        rps_pl = 2
    } else {
        if (rps_pl == "scissors") {
            rps_pl = 3
        } else {
            window.alert("Error, input MUST be 'rock', 'paper', or 'scissors'.")
        }
    }
}
if (rps_pl - 1 == rps_ai) {
    win()
} else {
    if (rps_pl + 2 == rps_ai) {
        win()
    } else {
        if (rps_pl == rps_ai) {
            tie()
        } else {
            lose()
        }
    }
}
