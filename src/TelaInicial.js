import React from "react";
import TelaPerguntas from "./TelaPerguntas";

export default function TelaInicial() {
    const [visivel, setVisivel] = React.useState(true);

    if (visivel) {
        return (
            <div className="telaInicial">
                <div className="container">
                    <img src="assets/image 1.png" alt="raio" />
                   <h1>ZapRecall</h1> 
                </div>
                <button onClick={() => setVisivel(false)}><p>Iniciar Recall!</p></button>
            </div>
        );
    }
    return <><TelaPerguntas /></>
}