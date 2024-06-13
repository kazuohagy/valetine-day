import React from "react";
import "./Button.css";

export const Button = (props) => {
    return (
        
        <button id={props.id} className={props.classe}>
            {props.value}
        </button>
    );
}