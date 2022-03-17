import React from "react";

export default function FlashCards(props) {
    return (
        <div className="perguntas">
            <p>Pergunta {props.index}</p>
            <img src="assets/vetor.svg" />
        </div>
    );
}