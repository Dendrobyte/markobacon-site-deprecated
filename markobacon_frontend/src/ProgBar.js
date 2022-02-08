function ProgBar(props) {
    // props.perc = perc of knowledge
    // props.text = text to put in the div
    let secondClass = `progBar${props.perc}`;
    return <div className={secondClass + " progBar"}>{props.text}</div>
}

export default ProgBar;