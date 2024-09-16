
import { useEffect, useState } from 'react';
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
    const [gameOver, setGameOver] = useState(false);


    useEffect(()=>{
        if(playerScore === 5 || computerScore === 5){
            setGameOver(true);
        }
    },[playerScore,computerScore])

    function handleChoice(choice){
        if(gameOver) return;

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

    function resetGame(){
        setComputerChoice(data[0]);
        setPlayerChoice(data[0]);
        setIsComputing(false);
        setResult('');
        setPlayerScore(0);
        setComputerScore(0);
        setGameOver(false);
    }

    return(
         <div className="board-container">
            <Computer choice={computerChoice} isComputing={isComputing}/>
            <Game result={result} playerScore={playerScore} computerScore={computerScore} gameOver={gameOver} onResetGame={resetGame}/>
            <Player choice={playerChoice} onSelect={handleChoice}/>
        </div>    
    )
}