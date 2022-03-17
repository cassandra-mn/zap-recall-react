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

export default function Tela2() {
    return (
        <div class="tela2">
            <header>
                <img src="assets/image 1.png" alt="raio" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {flashcards.map((card, index) =>
                    <Perguntas index={index+1} />    
                )}
            </main>
            <footer>
                <p>0/8 CONCLUÍDOS</p>
            </footer>
        </div>
    );
}

function Perguntas(props) {
    return (
        <div class="perguntas">
            <p>Pergunta {props.index}</p>
            <img src="assets/vetor.svg" />
        </div>
    );
}