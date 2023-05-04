import React from "react";
import './InputField.css'
export function InputField(props) {
    
    return (
        <div className="inputWrapper">
            
            <label>{props.label}&nbsp;</label><br/>
            <input onChange={props.func} className={props.class} type={props.type}/>
        </div>
    )
}