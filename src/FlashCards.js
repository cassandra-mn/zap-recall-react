import React from "react";

export default function FlashCards(props) {
    const {flashcards, index, mudarEstado} = props;
    const [virada, setVirada] = React.useState(true);

    return virada ? 
        (<div className="cards">
            <p>{flashcards[index].pergunta}</p>
            <img src="/assets/Vector.svg" onClick={() => setVirada(!virada)} alt="seta" />
        </div>) : 
        (<div className="cards">
            <p>{flashcards[index].resposta}</p>
            <div className="caixinhas">
                <div className="caixinha vermelha" onClick={() => mudarEstado("incorreto")}><p>Não lembrei</p></div>
                <div className="caixinha laranja" onClick={() => mudarEstado("meio-termo")}><p>Quase não lembrei</p></div>
                <div className="caixinha verde" onClick={() => mudarEstado("correto")}><p>Zap!</p></div>
            </div>
        </div>);
}