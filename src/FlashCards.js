export default function FlashCards(props) {
    const { flashcards, index } = props;

    return (
        <div className="pergunta-flash">
            <p>{flashcards[index].pergunta}</p>
            <img src="/assets/Vector.svg"></img>
        </div>
    );
}