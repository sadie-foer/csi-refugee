import React from "react";
import { Link } from 'react-router-dom';
import Representation from "./Representation";
import './Representations.css';

function Representations(props){
    return (
        <div>
        <div className='representations'>
            <div className='page-title'>
                Representations
            </div>
            <div className ='representations-body'>
                <Representation title="2x2 matrix" src="./src/images/2x2-1.jpg" />
                <Representation title="2x2 matrix" src="./src/images/2x2-2.jpg" />
                <Representation title="2x2 matrix" src="./src/images/venn-diagram-1.jpg" />
            </div>
            
            <div className='insight-hed'>Explore our FigJam</div>
            <div className="fig-jam">
                <iframe width="800" height="350" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FN2l8YxnSaohLmB7yw2LE56%2FStrategy-Setting%3Fnode-id%3D0%253A1%26t%3DeZ8JbUFbweYQCGYV-1" allowfullscreen>
                </iframe>
            </div>
            
        </div>
        </div>
    )
}

export default Representations;