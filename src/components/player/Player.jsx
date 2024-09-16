import './Player.css';
import {data} from '../../data';
import PropTypes from 'prop-types';

export default function Player({choice, onSelect}){
    
    return(   
        <div className="player-container">
            <div className="common-container">
                <span>{choice.name}</span>
                <img src={choice.image} alt={choice.name} />   
            </div>
            <div className='player-buttons'>
                {data.map((item)=><button  key={item.name} onClick={()=>onSelect(item)}>{item.name}</button>)}
            </div>
        </div>
    )
}

Player.propTypes = {
    choice: PropTypes.any,
    onSelect: PropTypes.any,
}