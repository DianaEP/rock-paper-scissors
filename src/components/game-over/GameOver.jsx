import './GameOver.css';
import PropTypes from 'prop-types';

export default function GameOver({gameOver, playerScore, onResetGame}){
    return(
        <div className={`game-over ${gameOver ? 'game-over-active' : ''}`}>
            <p>Game Over!</p>
            <p>{playerScore === 5 ? 'You win!!🏆' : 'Computer wins!'}</p>
            <button onClick={onResetGame}>Play again</button>   
        </div>
    )
}

GameOver.propTypes = {
    playerScore: PropTypes.any,
    gameOver: PropTypes.any,
    onResetGame: PropTypes.any,
}