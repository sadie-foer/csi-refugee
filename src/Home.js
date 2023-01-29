import React from "react";
import { Link } from 'react-router-dom'
import "./Home.css";
import Columns from "./Columns";
import Persona1 from "./Persona1";

function Home(){
    return (
        <div>
            <div className="hero1">
                <div>
                    <div className = "title1">Who is a refugee advocate?</div>
                    <div className = 'sub-title1'>We talked to 5 real-world advocates to understand their motivations, challenges and day-to-day life. Here are our findings.</div>
                </div>
            </div>
            <div className= "graphs">
                {<Columns images={
                    ['pie', 'pie2']}
                />}
            </div>
            <div className= "personas">
                <Persona1 name = "Lend-a-hand Larry" class= "lhl1" text="Get-it-done Greta has a full-time job at a non-proft. She studied international relations in college and wanted to apply her knowledge in a professional setting to help people. She takes her job very seriously and has a professional relationship with her “clients”" />
                <Persona1 name = "Get-it-done Greta" class= "gdg1" text="Get-it-done Greta has a full-time job at a non-proft. She studied international relations in college and wanted to apply her knowledge in a professional setting to help people. She takes her job very seriously and has a professional relationship with her “clients”" />
                <Persona1 name = "Find-a-fam Fanny" class= "fff1" text="Get-it-done Greta has a full-time job at a non-proft. She studied international relations in college and wanted to apply her knowledge in a professional setting to help people. She takes her job very seriously and has a professional relationship with her “clients”" />
            </div>
        </div>
    )
}

export default Home;