import GameOver from '../game-over/GameOver';
import './Game.css';
import PropTypes from 'prop-types';

export default function Game({result,playerScore, computerScore,gameOver,onResetGame}){

    return(
        <>
            <div className="game-container">
                <div className="game-score">{computerScore}</div>
                <div className='result'>
                    {result && <p>{result}</p>}
                </div>
                <div className="game-score">{playerScore}</div>  
            </div>

            <GameOver playerScore={playerScore} gameOver={gameOver} onResetGame={onResetGame}/>
        </>
    )
}

Game.propTypes = {
    result: PropTypes.any,
    playerScore: PropTypes.any,
    computerScore: PropTypes.any,
    gameOver: PropTypes.any,
    onResetGame: PropTypes.any,
}