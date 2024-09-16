import PropTypes from 'prop-types';
import { data } from '../../data';
import { useEffect, useState } from 'react';


export default function Computer({choice,isComputing}){
   const[currentChoice, setCurrentChoice] = useState(data[0]);

   useEffect(()=>{
    if(isComputing){
        const interval = setInterval(()=>{
            const randomIndex = Math.floor(Math.random() * data.length);
            setCurrentChoice(data[randomIndex])
        },5)
        return ()=>clearInterval(interval)
    }else if(choice){
        setCurrentChoice(choice)
    }
   },[isComputing,choice])

    return(
        <div className="computer-container">
            <div className="common-container">
                <span>{currentChoice.name}</span>
                <img src={currentChoice.image} alt={currentChoice.name} />
            </div>
        </div>
    )
}

Computer.propTypes = {
    choice: PropTypes.any,
    isComputing: PropTypes.any,
    onSelect: PropTypes.any,
  }