import React from "react";
import FlashCards from "./FlashCards";

export default function Decks(props) {
    const {flashcards, index} = props;
    const [esconder, setEsconder] = React.useState(true);

    function mudarEstado() {
        setEsconder(!esconder);
    }

    return esconder ?
        (
            <div className="perguntas" onClick={mudarEstado}>
                <p><strong>Pergunta {props.index + 1}</strong></p>
                <img src="assets/vetor.svg" />
            </div>
        )
        : <FlashCards index={index} flashcards={flashcards} mudarEstado={mudarEstado} />;
}