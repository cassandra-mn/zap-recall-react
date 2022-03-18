import React from "react";
import FlashCards from "./FlashCards";

export default function Decks(props) {
    const {flashcards, index, concluidos, emojis} = props;
    const [esconder, setEsconder] = React.useState(true);
    const [classe, setClasse] = React.useState("");
    const [resposta, setResposta] = React.useState("assets/vetor.svg");

    function mudarEstado(status) {
        setEsconder(!esconder);
        setClasse(status);
        if (status === "correto") {
            setResposta("assets/correto.svg");
            emojis("assets/correto.svg");
        }
        if (status === "incorreto") {
            setResposta("assets/incorreto.svg");
            emojis("assets/incorreto.svg");
        }
        if (status === "meio-termo") {
            setResposta("assets/meio-termo.svg");
            emojis("assets/meio-termo.svg");
        }
        concluidos(1);
    }

    return esconder ?
        (<div className="perguntas" onClick={() => setEsconder(false)}>
            <p className={classe}><strong>Pergunta {props.index+1}</strong></p>
            <img src={resposta} alt={classe}/>
        </div>)
        : <FlashCards index={index} flashcards={flashcards} mudarEstado={mudarEstado} />;
}