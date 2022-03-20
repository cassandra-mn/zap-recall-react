import {useState} from "react";
import Decks from "./Decks";
import TelaInicial from "./TelaInicial";
import raio from "./../assets/raio.png";
import party from "./../assets/party.png";
import sad from "./../assets/sad.png";

export default function TelaPerguntas(props) {
    const {flashcards} = props;
    const [concluidos, setConcluidos] = useState(0);
    const [emojis, setEmojis] = useState([]);
    const [incorretas, setIncorretas] = useState(0);
    const [visivel, setVisivel] = useState(true);
    const imgFinal = incorretas === 0 ? party : sad;
    const h1Final = incorretas === 0 ? "PARABÉNS!" : "PUTZ!";
    const pFinal = incorretas === 0 ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltaram alguns... Mas não desanime!";
    const flashcardsEmbaralhados = embaralhar(flashcards);

    function embaralhar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    if (visivel) {
        return concluidos < flashcards.length ? (
            <div className="telaPerguntas">
                <header>
                    <img src={raio} alt="raio" />
                    <h1>ZapRecall</h1>
                </header>
                <main>
                    {flashcardsEmbaralhados.map((card, index) =>
                        <Decks key={index} index={index} flashcards={flashcardsEmbaralhados} concluidos={valor => setConcluidos(concluidos + valor)} emojis={resposta => setEmojis([...emojis, resposta])} incorretas={quantidade => setIncorretas(incorretas + quantidade)} />
                    )}
                </main>
                <footer>
                    <p>{concluidos}/{flashcards.length} CONCLUÍDOS</p>
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
                    <img src={raio} alt="raio" />
                    <h1>ZapRecall</h1>
                </header>
                <main>
                    {flashcards.map((card, index) =>
                        <Decks key={index} index={index} flashcards={flashcardsEmbaralhados} concluidos={valor => setConcluidos(concluidos + valor)} emojis={resposta => setEmojis([...emojis, resposta])} />
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
                    <button onClick={() => setVisivel(false)}><p>REINICIAR RECALL</p></button>
                </footer>
            </div>
        );
    }
    return <TelaInicial />;
}