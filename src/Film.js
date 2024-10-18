import React from "react";
import './Film.css'
const Film = (props) => (
    <div className="Film">
            <img src={props.Source}/>
            <div className="Title"><h2>{props.Title}</h2><p>{props.Type}</p></div>
            <div className="Tags"><p className="Tag">{props.Tag}</p></div>
            <p className="Time">{props.Time}</p>
    </div>
)


export default  Film