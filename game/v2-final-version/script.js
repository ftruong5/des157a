(function(){
    'use strict'
    console.log('reading JS');

    //The Click Me button stays hidden at first.
    const clickBtn1 = document.querySelector('#click-btn1');
    const clickBtn2 = document.querySelector('#click-btn2');
    clickBtn1.style.display = 'none';
    clickBtn2.style.display = 'none';

    //To keep track of each player's time
    let player1Time;
    let player2Time;
    let player1FinalTime
    let player2FinalTime

    //Starting the game
    const titleScreen = document.querySelector('.title-screen');
    const player1Screen = document.querySelector('.player1-screen');
    const startBtn = document.querySelector('#start-btn');

    //Audio Variables
    const bgMusic = document.querySelector('#bg-music');
    bgMusic.volume = 0.3;

    const clickSound = document.querySelector('#btn-click-sound');
    clickSound.volume = 1;

    const wowSound = document.querySelector('#wow-sound');
    wowSound.volume = 1;

    //Background Images
    const backgrounds = ['images/stripes.png', 'images/polkaDot.png'];

    //When the player clicks Start Game, it will change to Player 1's Turn.
    startBtn.addEventListener('click', function(){
        //Button Sound Effect
        clickSound.play();

        //Play background music
        bgMusic.play();

        //Set the color to orange on waiting screen.
        player1Screen.style.backgroundColor = '#E99D25';

        titleScreen.style.display = 'none';
        player1Screen.className = 'player1-screen';

        const randomTime1 = Math.floor(Math.random() * 2000) + 3000;

        //After starting the game, Player 1's Click Me button will randomly appear on the screen.
        setTimeout(function(){
            document.querySelector('.player1-screen p').style.display = 'none';
            clickBtn1.style.display = 'block';

            //Button will appear in a random position.
            clickBtn1.style.position = 'absolute';
            clickBtn1.style.left = Math.floor(Math.random() * 80) + '%';
            clickBtn1.style.top = Math.floor(Math.random() * 80) + '%';

            //Randomly choose background image when button appears.
            const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
            player1Screen.style.backgroundImage = 'url("' + randomBg + '")';
            player1Screen.style.backgroundSize = 'cover';

            //Record the time when the button appears.
            player1Time = Date.now();
        }, randomTime1);
    });

    // When Player 1's Click Me button is pressed, it will show the results for 2 seconds. Then move on to Player 2's turn.
    const player1Results = document.querySelector('.player1-results');
    const player2Screen = document.querySelector('.player2-screen');
    

    clickBtn1.addEventListener('click', function(){
        //Button Sound Effect
        clickSound.play();

        //Calculate the difference from when the button appears to when Player 1 clicks it. Then display the results.
        player1FinalTime = Date.now() - player1Time;
        document.querySelector('[player1-time]').textContent = 'Time: ' + player1FinalTime + 'ms';

        player1Screen.className = 'player1-screen hidden';
        player1Results.className = 'player1-results';

        setTimeout(function(){
            player1Results.className = 'player1-results hidden';
            player2Screen.className = 'player2-screen';

            //Set the color to orange on waiting screen.
            player2Screen.style.backgroundColor = '#E99D25';

            const randomTime2 = Math.floor(Math.random() * 2000) + 3000;

            //After starting the game, Player 2's Click Me button will randomly appear on the screen.
            setTimeout(function(){
                document.querySelector('.player2-screen p').style.display = 'none';
                clickBtn2.style.display = 'block';

                //Button will appear in a random position.
                clickBtn2.style.position = 'absolute';
                clickBtn2.style.left = Math.floor(Math.random() * 80) + '%';
                clickBtn2.style.top = Math.floor(Math.random() * 80) + '%';

               //Randomly choose background image when button appears.
                const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
                player2Screen.style.backgroundImage = 'url("' + randomBg + '")';
                player2Screen.style.backgroundSize = 'cover';

                //Record the time when the button appears.
                player2Time = Date.now();
            }, randomTime2);
        }, 2000);
    });

    // When Player 2's Click Me button is pressed, it will show the results for 2 seconds. Then move on to Winner screen.
    const player2Results = document.querySelector('.player2-results');
    const winnerScreen = document.querySelector('.winner-screen');

    clickBtn2.addEventListener('click', function(){
        //Button Sound Effect
        clickSound.play();

        //Calculate the difference from when the button appears to when Player 2 clicks it. Then display the results.
        player2FinalTime = Date.now() - player2Time;
        document.querySelector('[player2-time]').textContent = 'Time: ' + player2FinalTime + 'ms';

        player2Screen.className = 'player2-screen hidden';
        player2Results.className = 'player2-results';

        setTimeout(function(){
            player2Results.className = 'player2-results hidden';
            winnerScreen.className = 'winner-screen';

            //Winner Sound Effect
            wowSound.play();

            //Determining the winner of the game.
            if (player1FinalTime < player2FinalTime) {
                document.querySelector('#winner-msg').innerHTML = 'Player 1 Wins!';
            }
            else if (player2FinalTime < player1FinalTime) {
                document.querySelector('#winner-msg').innerHTML = 'Player 2 Wins!'; 
            }
            else {
                document.querySelector('#winner-msg').innerHTML = "It's a tie!";
            }
        }, 2000);
    });

    //The Play Again button will restart the game.
    const restartBtn = document.querySelector('#restart-btn');

    restartBtn.addEventListener('click', function(){
        //Button Sound Effect
        clickSound.play();

        winnerScreen.className = 'winner-screen hidden';
        titleScreen.style.display = 'flex';

        //Reset the game
        clickBtn1.style.display = 'none';
        document.querySelector('.player1-screen p').style.display = 'block';
        clickBtn2.style.display = 'none';
        document.querySelector('.player2-screen p').style.display = 'block';

        player1Screen.style.backgroundImage = '';
        player2Screen.style.backgroundImage = '';
    });
})();