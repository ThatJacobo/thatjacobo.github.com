(function() {
    'use strict';
    console.log("reading js");

    /* game data variables */
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const score2 = document.getElementById('P2Score');
    const actionArea = document.getElementById('actions');
    /* sounds */
    const childrenYay = new Audio('media/Children.mp3');
    const diceSound = new Audio('media/dice.wav');

    const gameData = {/* data involving the game, names are self-explanitory */
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 
                'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,/* numbers indicate which plater */
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
/* starts game when the start game button has been clicked */
    startGame.addEventListener("click", function() {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2 id="change">The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>'

        document.getElementById('quit').addEventListener("click", function() {
            location.reload();
        })
        console.log("set up the turn!");
        setUpTurn();/* sets up first turn immediately*/
    });

    function setUpTurn() {/* sets up turn when this function is called */
        game.innerHTML = `<h1>${gameData.players[gameData.index]}</h1><p>Roll the Dice</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function() {
            console.log("roll the dice!");
            diceSound.play();/* dice rolling sound for rolling dice */
            throwDice();
        });
    };

    function throwDice() {/* randomizes and outputs dice pictures and numbers associated */
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<h1>${gameData.players[gameData.index]}</h1><p>You Rolled:</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}" width=64px height=64px>
                            <img src="${gameData.dice[gameData.roll2-1]}" width=64px height=64px>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if( gameData.rollSum === 2) {/* snake eyes if statement.  */
            console.log("snake eyes were rolled");
            game.innerHTML += '<p>Oh snap! Snake eyes</p>';
            gameData.score[gameData.index] = 0;
            gameDate.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        else if(gameData.roll1 === 1 || gameData.roll2 === 1) {/* restart if 1 is rolled */
            console.log("one of the two dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}`;
            setTimeout(setUpTurn, 2000);
        }
        else {/* else game proceeds */
            console.log("the game proceeds")
            showCurrentScore();
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';
            
            document.getElementById('rollagain').addEventListener('click', function() {
                setUpTurn();
            })

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            })

            checkWinningCondition();/* did anyone win? */
        }
    };

    function checkWinningCondition() {/* checks if anyone wins */
        if(gameData.score[gameData.index] > gameData.gameEnd) {

            document.getElementById('change').innerHTML = `<h2 class="blt">${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;/* says winner and final scpres */
            score.innerHTML = `<h1 id="playerOne">Player 1</h1> <p id="scre"><strong>Score:</strong></p> 
                <h2 id="scoreOne"><strong>${gameData.score[0]}</strong></h2>`;
            score2.innerHTML = `<h1 id="playerTwo">Player 2</h1> <p id="scre"><strong>Score:</strong></p> 
                <h2 id="scoreTwo"><strong>${gameData.score[1]}</strong></h2>` ;
            childrenYay.play();/* children say yay since you won */

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else {
            showCurrentScore();/* if no one wins, just shows score */
        }
    };

    function showCurrentScore() {/* shows score in both player boxes */
        score.innerHTML = `<h1 id="playerOne">Player 1</h1> <p id="scre"><strong>Score:</strong></p> 
                <h2 id="scoreOne"><strong>${gameData.score[0]}</strong></h2>`;
        score2.innerHTML = `<h1 id="playerTwo">Player 2</h1> <p id="scre"><strong>Score:</strong></p> 
                <h2 id="scoreTwo"><strong>${gameData.score[1]}</strong></h2>` ;
    }

    const rst = document.getElementsByClassName('rst');/* Instructions button script/ unused for NOW */
    rst.addEventListener('click', function() {
        document.querySelector('.hidden').className = 'showing'
        document.querySelector('.showing').className = 'hidden'
    })




}) ()