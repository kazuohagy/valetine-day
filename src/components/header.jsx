import React from "react";
import "./header.css";


export const Header = () => {
    return (
        <header className="solteiros">
            <nav className="mario">
                <ul className="quarto"> 
                    {/* <li>
                        <a href="/">Oi Kazuo tudo bem?</a>
                    </li>
                    <li>
                        <a href="/about">Posso pegar seu numéro?</a>
                    </li> */}
                    <li>
                        <a href="https://github.com/kazuohagy" target="_blank">Contact Kazuo</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}