import React from "react";
import Decks from "./Decks";

let i = null;

export default function FlashCards(props) {
    const [esconder, setEsconder] = React.useState(true);

    if (esconder) {
        return (
            <div className="perguntas" onClick={() => { 
                    setEsconder(false);
                    i = props.index - 1;
                }}>
                <p>Pergunta {props.index}</p>
                <img src="assets/vetor.svg" />
            </div>
        );
    }
    return <Decks index={i} />;
}