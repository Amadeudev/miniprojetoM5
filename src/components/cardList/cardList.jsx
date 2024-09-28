import cards from  '../../assets/mockDB/db.json'
import Card from '../Card/Card'

function CardList() {
    const cardList = cards.cards
    if (!cardList || cardList.length === 0) {
        return <p>Não há livros disponíveis</p>
    } 
    return (
        <div className="card-list">
            {cardList.map((card) => (
                <Card
                key={card.id}
                title={card.title}
                author={card.author}
                image={card.image}
                category={card.category}/>
            ))}
        </div>
    )
}

export default CardList 