import React from "react";
import { Link } from 'react-router-dom';
import './Personas.css';
import Persona2 from "./Persona";

function Personas(props){
    return (
        <div>
            <div className="hero2">
                <div className = "right-div">
                    <div className='page-title2'>
                        Personas
                    </div>
                    <div className="sub-title2">
                        We distilled and combined elements from our interviews into three core types. The key differences were around how emotional attached they were with the people they help, how confused they were throughout the process, the number of people they reach through their work, the amount of time they devote, and their expertise. The character sketches are fictionalized, but exist to highlight these key traits in practice.
                    </div>
                </div>
                <div className="persona-img">
                    <img className = "hero-img" src="https://static.vecteezy.com/system/resources/previews/000/132/960/original/free-personas-vector.png"/>
                </div>
            </div>
            <div>
                <Persona2 name="Get-it-done Greta" src='/src/images/gtg.jpg' class='gdg' text="A grandma of four, Find-a-fam Fanny is a working through her church group ..." />
                <Persona2 name="Lend-a-hand Larry" src='/src/images/lhl-sliders.jpg' class='gdg' text="A grandma of four, Find-a-fam Fanny is a working through her church group ..." />
                <Persona2 name="Find-a-fam Fanny" src='/src/images/fff-sliders.jpg' class='gdg' text="A grandma of four, Find-a-fam Fanny is a working through her church group ..." />
            </div>
            
        </div>
    )
}

export default Personas;