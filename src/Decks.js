import React from "react";
import FlashCards from "./FlashCards";

export default function Decks(props) {
    const [esconder, setEsconder] = React.useState(true);

    return esconder ?
        (
            <div className="perguntas" onClick={() => {
                setEsconder(false);
            }}>
                <p><strong>Pergunta {props.index + 1}</strong></p>
                <img src="assets/vetor.svg" />
            </div>
        )
        : <FlashCards index={props.index} flashcards={props.flashcards} />;
}