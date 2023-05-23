import QuoteButton from "./QuoteButton"
import "./styles/QuoteBox.css"
const Quotebox = ({ phrase, handleChangeQuote }) => {
    return (
        <section className="quoteBox">
            <article className="quoteBox__phrase">
                <p>{phrase}</p>
            </article>
            <QuoteButton handleChangeQuote={handleChangeQuote} />
        </section>
    )
}

export default Quotebox