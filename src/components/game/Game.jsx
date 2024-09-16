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

        <div className={`game-over ${gameOver ? 'game-over-active' : ''}`}>
                <p>Game Over!</p>
                <p>{playerScore === 5 ? 'You win!!🏆' : 'Computer wins!'}</p>
                <button onClick={onResetGame}>Play again</button>   
        </div>

       
        {/* {gameOver && <div className='game-over'>
                            <p>Game Over!</p>
                            <p>{playerScore === 5 ? 'You win!!🏆' : 'Computer wins!'}</p>
                            <button onClick={onResetGame}>Play again</button>
                    </div>} */}
        
       
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