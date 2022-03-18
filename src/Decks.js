import React from "react";
import FlashCards from "./FlashCards";

export default function Decks(props) {
    const { flashcards, index } = props;
    const [esconder, setEsconder] = React.useState(true);
    const [classe, setClasse] = React.useState("");

    function mudarEstado(status) {
        setEsconder(!esconder);
        setClasse(status);
    }

    return esconder ?
        (<div className="perguntas" onClick={mudarEstado}>
            <p className={classe}><strong>Pergunta {props.index+1}</strong></p>
            <img src="assets/vetor.svg" />
        </div>)
        : <FlashCards index={index} flashcards={flashcards} mudarEstado={mudarEstado} />;
}