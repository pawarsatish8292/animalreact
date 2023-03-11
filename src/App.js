import { useState } from "react";
import AnimalShow from './animal';
import appcss from "./app.css";

function getRendomAnimal(){
    const animals = ['bird','cat','cow','gator','horse'];
    return animals[Math.floor(Math.random()* animals.length)];
}

function App (){
    const [animals, setAnimals]= useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRendomAnimal()]);
    }
        const renderAnimals = animals.map((Animal, index)=>{
            return <AnimalShow key = {index} type = {Animal}/>;
        });
        return (
            <div className="app">
                <button onClick={handleClick}>Add Animal</button>
                <div className="animal-list"> {renderAnimals}</div>
            </div>
        );
}
export default App;