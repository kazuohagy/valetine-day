import React
 from "react";
import "./container.css";
import {Button} from "./Button.jsx";
import "./funcao.js";

export const Container = () => {
    return (
        <div className="container">
            <h1>Dia dos Namorados</h1>
            <p>Você quer namorar comigo?</p>
            <div className="pergunta">
                <Button id="peach" classe="button" value="Sim"/>
                <Button id="luigi" classe="randombutton" value="Não"/>
            </div>
        </div>
    );
}