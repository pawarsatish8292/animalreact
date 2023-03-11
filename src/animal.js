import { useState } from "react";
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import animalcss from './animal.css';

const svgMap = {
    bird:bird,
    cat:cat,
    cow:cow,
    gator:gator,
    horse:horse
};

function Animal({type}){
  const [clicks, setClicks]= useState(0);

  const handleClick = ()=>{
    setClicks(clicks + 1);
  };

  return (
   <div className="animal-show" onClick={handleClick}>
    <img className="animal" alt ="animal" src={svgMap[type]}/> 
    <img className="heart" alt ="heart" src={heart} style={{width : 10 + 10 * clicks +'px'} }
    />
   </div>
  );
}

export default Animal;

