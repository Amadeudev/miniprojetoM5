import '../../components/Card/cardStyle.css'
import cards from  '../../assets/mockDB/db.json'

function Card({title, category, author}) {
    console.log(cards.title, cards.category, cards.author)
    console.log(cards)

    return (
        <section className='cardLivro'>
            <img src='' alt=''/>
            <h3>Título: {title}</h3>
            <p>Categoria: {category}</p>
            <p>Autor: {author}</p>
        </section>
    )
}

export default Card