import './shibe_styles.css';

function ShibeCard(props) {
    let imageUrl = props.src;
    let quote = props.quote;

    return<>
        <div className="card-container">
            <div className="card-title">
                <p>Card Title</p>
            </div>
            <img className="card-image" src={imageUrl} alt="Your generated shibe here."></img>
            <div className="card-quote">
                <p>{ quote }</p>
            </div>
        </div>
    </>
}

export default ShibeCard;