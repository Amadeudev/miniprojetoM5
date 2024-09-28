import '../../components/Card/cardStyle.css'
import cards from  '../../assets/mockDB/db.json'

function Card({ title, category, author }) {
    console.log(cards.title, cards.category, cards.author)
    console.log(cards)
    return (
        <section className='cardLivro'>
            <img src='' alt=''/>
            <h3>Título: {cards.title[0]}</h3>
            <p>Categoria: {cards.category[0]}</p>
            <p>Autor: {cards.author[0]}</p>
        </section>
    )
}

export default Card