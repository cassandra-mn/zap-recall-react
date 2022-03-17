import React from "react";
import Tela2 from "./Tela2";

export default function Tela1() {
    const [visivel, setVisivel] = React.useState(true);

    if (visivel) {
        return (
            <div className="tela1">
                <div className="container">
                    <img src="assets/image 1.png" alt="raio" />
                   <h1>ZapRecall</h1> 
                </div>
                <button onClick={() => setVisivel(false)}><p>Iniciar Recall!</p></button>
            </div>
        );
    }
    return <><Tela2 /></>
}