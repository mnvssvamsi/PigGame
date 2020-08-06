
var scores, roundScore, activePlayer, gamePlaying,detailsEntered;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {

    
        if(gamePlaying) {
        // detailsEntered=true;
        if(detailsEntered){
            // document.getElementsByClassName('playerLabel')[0].style.display='none';
            // document.getElementsByClassName('playerLabel')[1].style.display='none';
            document.getElementById('submit').style.display='none';
            document.getElementById('player1').style.display='none';
            document.getElementById('player2').style.display='none';
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        var diceNumber =document.getElementById('dice-number')
        diceNumber.style.display='block';
        diceNumber.innerText= dice;
        // var diceDOM = document.querySelector('.dice');
        // diceDOM.style.display = 'block';
        // diceDOM.src = 'dice-' + dice + '.png';
        
        //3. Update the round score IF the rolled number was NOT a 1
        if(dice!== 1){
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent= roundScore;
        }
        else{
            nextPlayer();
        }
        }

    }    
 
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            // document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-number').style.display='none';
            // document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('won');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    // document.getElementById('name-0').

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    detailsEntered= true;


    //submitting the players details

        var detailsForm= document.getElementById('details');
        detailsForm.addEventListener("submit",function(e){
        e.preventDefault();
        var player1Name= document.getElementById('player1').value;
        var player2Name= document.getElementById('player2').value;
        if(player1Name =="" && player2Name==""){
            alert("Enter player details")
            gamePlaying= false;
        }else {
            if(detailsEntered){
                var player1Name= document.getElementById('player1').value;
                var player2Name= document.getElementById('player2').value;
                document.getElementById('name-0').innerText=player1Name;
                document.getElementById('name-1').innerText=player2Name;
            }
        } 
        // detailsEntered= true;
    })
    
 
    // document.getElementsByClassName('playerLabel')[0].style.display='block';

    document.getElementById('dice-number').style.display= 'none';
    // document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;






