import React from "react";

export default function FlashCards(props) {
    const { flashcards, index } = props;
    const [virada, setVirada] = React.useState(true);

    return virada ? (
        <div className="cards">
            <p>{flashcards[index].pergunta}</p>
            <img src="/assets/Vector.svg" onClick={() => setVirada(!virada)}></img>
        </div>
    )
        : (
            <div className="cards">
                <p>{flashcards[index].resposta}</p>
                <div className="caixinhas">
                    <div className="caixinha vermelha"><p>Não lembrei</p></div>
                    <div className="caixinha laranja"><p>Quase não lembrei</p></div>
                    <div className="caixinha verde"><p>Zap!</p></div>
                </div>
            </div>
        );
}