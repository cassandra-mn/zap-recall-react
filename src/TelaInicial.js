import React from "react";
import TelaPerguntas from "./TelaPerguntas";

export default function TelaInicial() {
    const react = [
        { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
        { pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces" },
        { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
        { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" },
        { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes" },
        { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];
    const js = [
        { pergunta: "Dentro de qual elemento HTML colocamos o JavaScript?", resposta: "<script>" },
        { pergunta: "Que tipos de dados são suportados pelo JS?", resposta: "String, Number, Boolean, BigInt, Null, Undefined, Object e Symbol" },
        { pergunta: "O que o operador typeof faz?", resposta: "Retorna o tipo de dado identificado" },
        { pergunta: "O que faz uma template string?", resposta: "Permite criar expressões embutidas em uma string" }
    ];
    const [visivel, setVisivel] = React.useState(true);
    const [selecionar, setSelecionar] = React.useState(0);
    const classe = selecionar === 0 ? "desabilitado" : "";
    const bool = selecionar === 0 ? true : false;
    let flashcards = [];

    if (selecionar === "1") flashcards = react;
    if (selecionar === "2") flashcards = js;

    if (visivel || selecionar === "0") {
        return (
            <div className="telaInicial">
                <div className="container">
                    <img src="assets/raio.png" alt="raio" />
                    <h1>ZapRecall</h1>
                </div>
                <select onClick={e => setSelecionar(e.target.value)}>
                    <option value="0">Escolha seu deck</option>
                    <option value="1">React</option>
                    <option value="2">JavaScript</option>
                </select>
                <button className={classe} onClick={() => setVisivel(bool)} ><p>Iniciar Recall!</p></button>
            </div>
        );
    }
    return <><TelaPerguntas flashcards={flashcards} /></>
}