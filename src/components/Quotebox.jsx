
import "./styles/QuoteBox.css"
const Quotebox = ({ phrase, handleChangeQuote }) => {
    return (
        <section className="quoteBox">
            <article className="quoteBox__phrase">
                <p>{phrase}</p>
            </article>
        </section>
    )
}

export default Quotebox