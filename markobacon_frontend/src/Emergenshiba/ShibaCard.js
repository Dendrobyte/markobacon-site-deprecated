import './shibastyles.css';

function ShibaCard({ title, imgUrl, quote}) {

    return<>
        <div className="card-single">
            <div className="card-title">
                <p>{title}</p>
            </div>
            <img className="card-image" src={imgUrl} alt="Requesting shiba...."></img>
            <div className="card-quote-container">
                <p className="card-quote-content">{ quote.quote }</p>
                <p className="card-quote-author">- {quote.author }</p>
            </div>
        </div>
    </>
}

export default ShibaCard;