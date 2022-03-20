import React from "react";
import FlashCards from "./FlashCards";
import seta from "./../assets/seta.png";
import correto from "./../assets/correto.png";
import incorreto from "./../assets/incorreto.png";
import duvida from "./../assets/duvida.png";

export default function Decks(props) {
    const {flashcards, index, concluidos, emojis, incorretas} = props;
    const [esconder, setEsconder] = React.useState(true);
    const [classe, setClasse] = React.useState("");
    const [resposta, setResposta] = React.useState(seta);

    function mudarEstado(status) {
        setEsconder(!esconder);
        setClasse(status);
        if (status === "incorreto") {
            setResposta(incorreto);
            emojis(incorreto);
            incorretas(1);
        }
        if (status === "correto") {
            setResposta(correto);
            emojis(correto);
        }
        if (status === "meio-termo") {
            setResposta(duvida);
            emojis(duvida);
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