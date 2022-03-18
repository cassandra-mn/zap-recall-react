import React from "react";

export default function FlashCards(props) {
    const { flashcards, index } = props;
    const [virada, setVirada] = React.useState(true);

    return virada ? (
        <div className="pergunta-flash">
            <p>{flashcards[index].pergunta}</p>
            <img src="/assets/Vector.svg" onClick={() => setVirada(!virada)}></img>
        </div>
    )
        : (
            <div className="pergunta-flash">
                <p>{flashcards[index].resposta}</p>
            </div>
        );
}