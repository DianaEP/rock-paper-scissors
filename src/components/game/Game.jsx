import './Game.css';
import PropTypes from 'prop-types';

export default function Game({result,playerScore, computerScore}){
    return(
        <>
        <div className="game-container">
            <div className="game-score">{computerScore}</div>
            <div className='result'>
                {result && <p>{result}</p>}
            </div>
            <div className="game-score">{playerScore}</div>
        
        </div>
        </>
    )
}

Game.propTypes = {
    result: PropTypes.any,
    playerScore: PropTypes.any,
    computerScore: PropTypes.any,
    
  }