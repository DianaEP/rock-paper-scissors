
import { useState } from 'react';
import Computer from '../computer/Computer';
import Player from '../player/Player';
import './Board.css';
import { data } from '../../data';
import Game from '../game/Game';

function roundWinner(player,computer){
    if (player === computer) return {
                 message: "It's a tie!", 
                 playerScore: 0, 
                 computerScore: 0 
                };
    if ((player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')){

            return {
                message:'You won!',
                playerScore: 1,
                computerScore: 0
            };
    }
    return {
        message:'Computer won!',
        playerScore: 0,
        computerScore: 1
    };
}

export default function Board(){
    const [computerChoice, setComputerChoice] = useState(data[0]);
    const [playerChoice, setPlayerChoice] = useState(data[0]);
    const [isComputing, setIsComputing] = useState(false);
    const [result, setResult] = useState('');
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    function handleChoice(choice){
        setPlayerChoice(choice);
        setIsComputing(true);
        setResult('');

        setTimeout(()=>{
            const computerChoice = data[Math.floor(Math.random() * data.length)];
            setComputerChoice(computerChoice);
            setIsComputing(false);

            const roundResult = roundWinner(choice.name,computerChoice.name);
            setResult(roundResult.message);
            setPlayerScore(prevScore => prevScore + roundResult.playerScore);
            setComputerScore(prevScore => prevScore + roundResult.computerScore);
            
        },500)

        

       
    }




    return(
        <>
         <div className="board-container">
            <Computer choice={computerChoice} isComputing={isComputing}/>
            <Game result={result} playerScore={playerScore} computerScore={computerScore}/>
            <Player choice={playerChoice} onSelect={handleChoice}/>
         </div>
         
         

        </>
    )
}