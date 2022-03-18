import React from "react";
import FlashCards from "./FlashCards";

export default function Decks(props) {
    const { flashcards, index } = props;
    const [esconder, setEsconder] = React.useState(true);
    const [classe, setClasse] = React.useState("");
    const [emoji, setEmoji] = React.useState("assets/vetor.svg");

    function mudarEstado(status) {
        setEsconder(!esconder);
        setClasse(status);
        if (status === "correto") setEmoji("assets/correto.svg");
        if (status === "incorreto") setEmoji("assets/incorreto.svg");
        if (status === "meio-termo") setEmoji("assets/meio-termo.svg");
    }

    return esconder ?
        (<div className="perguntas" onClick={mudarEstado}>
            <p className={classe}><strong>Pergunta {props.index+1}</strong></p>
            <img src={emoji} alt={classe}/>
        </div>)
        : <FlashCards index={index} flashcards={flashcards} mudarEstado={mudarEstado} />;
}