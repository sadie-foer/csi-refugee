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
                <Persona2 name="Get-it-done Greta" src='/src/images/gtg.jpg' class='gdg' text="
                A professional at a large non-profit, Get-it-done Greta studied global affairs in college and is passionate about applying that knowledge to somehting she cares about. She is motivated, is confident in herself and her abilities. She works with the complicated legal and government aid systems and uses. She is steadfast in the face of emotional burdens. To maintain her own mental health, she stays emotionally distanced from her so-called clients. She is also frustrated with big donors and the American justice system.
                " />
                <Persona2 name="Lend-a-hand Larry" src='/src/images/lhl_sliders.jpg' class='gdg' text="Lend-a-hand Larry has a full time job and a family but likes to devote his free time to helping refugees. He is a friendly and altruistic guy who, after seeing the refugee crisis in Afghanistan, decided to organize a food drive at his kids school and has been helping out ever since. He is outgoing but doesn't have a lot of knowledge and is just doing what he can to help. He volunteers with a larger organization and loves how fulfilled he feels. He is frustrated that the other volunteers he has helped get involved have stopped showing up and doesn't knpw how to be as helpful as he can be." />
                <Persona2 name="Find-a-fam Fanny" src="/src/images/fff_sliders.jpg" class='gdg' text="A grandma of four, Find-a-fam Fanny is a working through her church group to sponser a family of four. She is retired and has a lot fo time to spare so she has taken on the big task of sponsering a family. Going in she didn't have any experience but she's learned a lot since she started. She is very practical and isn't afraid to be opinionated and firm when it comes to money. She is also warm, outgoing and friendly. She has gotten to know the fmialy she is helping intimately and goes to their children birthday parties or will help when the mom gets sick. She is frustrated with the bureacracy how little help she has gotten from the government and large social services agencies, but has gotten deep fulfillment and emotional connection from the process." />
            </div>
            
        </div>
    )
}

export default Personas;