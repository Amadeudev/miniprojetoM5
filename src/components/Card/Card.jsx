import styles from '../../components/Card/cardSyle.css'

function Card({ title, cathegory, author }) {
    return (
        <section className='cardLivro'>
            <image></image>
            <h3>{title}Título:</h3>
            <p>{cathegory}Categoria:</p>
            <p>{author}Autor:</p>
        </section>
    )
}

export default Card