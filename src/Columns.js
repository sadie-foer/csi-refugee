import React from "react";
import { Link } from 'react-router-dom';
import './Columns.css';

function Columns(props){
    return (
        <div className = "grid">
            {props.images.map(img=> {
                return (<div className="container">
                <Link to= '/representations'>
                    <div className = {'image ' + img } ></div>
                </Link>
            </div>)
            })}
            
        </div>
    )
}

export default Columns;