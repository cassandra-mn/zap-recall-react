import React from "react";
import Decks from "./Decks";

export default function TelaPerguntas() {
    const flashcards = [
        { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
        { pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces" },
        { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
        { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" },
        { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes" },
        { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];
    const [concluidos, setConcluidos] = React.useState(0);
    const [emojis, setEmojis] = React.useState([]);
    const [incorretas, setIncorretas] = React.useState(0);
    const imgFinal = incorretas === 0 ? "assets/party.svg" : "assets/sad.svg";
    const h1Final = incorretas === 0 ? "PARABÉNS!" : "PUTZ!";
    const pFinal = incorretas === 0 ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltaram alguns... Mas não desanime!";

    return concluidos < flashcards.length ? (
        <div className="telaPerguntas">
            <header>
                <img src="assets/raio.png" alt="raio" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {flashcards.map((card, index) =>
                    <Decks key={index} index={index} flashcards={flashcards} concluidos={valor => setConcluidos(concluidos+valor)} emojis={resposta => setEmojis([...emojis, resposta])} incorretas={quantidade => setIncorretas(incorretas+quantidade)} />    
                )}
            </main>
            <footer>
                <p>{concluidos}/8 CONCLUÍDOS</p>
                <div className="emojis">
                    {emojis.map((emoji, index) => {
                        return <img key={index} src={emoji} alt={emoji} />
                    })}
                </div>
            </footer>
        </div>
    ) : (
        <div className="telaPerguntas">
            <header>
                <img src="assets/raio.png" alt="raio" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {flashcards.map((card, index) =>
                    <Decks key={index} index={index} flashcards={flashcards} concluidos={valor => setConcluidos(concluidos+valor)} emojis={resposta => setEmojis([...emojis, resposta])} />    
                )}
            </main>
            <footer className="parte-final">
                <div className="alinhar">
                    <img src={imgFinal} alt="party" />
                    <h1>{h1Final}</h1>
                </div>
                <p>{pFinal}</p>
                <div className="emojis">
                    {emojis.map((emoji, index) => {
                        return <img key={index} src={emoji} alt={emoji} />
                    })}
                </div>
            </footer>
        </div>
    );
}