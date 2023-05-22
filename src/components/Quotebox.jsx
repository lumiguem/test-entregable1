import "./styles/QuoteBox.css"
const Quotebox = ({ phrase, handleChangeQuote }) => {
    return (
        <section className="quoteBox">
            <article className="quoteBox__phrase">
                <p>{phrase}</p>
            </article>
            <button className="quoteBox__btn" onClick={handleChangeQuote}>Update</button>
        </section>
    )
}

export default Quotebox