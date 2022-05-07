import './shibastyles.css';

function ShibaCard({ imgUrl, quote}) {

    return<>
        <div className="card-container">
            <div className="card-title">
                <p>Card Title</p>
            </div>
            <img className="card-image" src={imgUrl} alt="Your generated shiba here."></img>
            <div className="card-quote">
                <p>{ quote }</p>
            </div>
        </div>
    </>
}

export default ShibaCard;