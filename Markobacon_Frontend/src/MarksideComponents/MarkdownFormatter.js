import PostAssistant from "./PostAssistant";
import './PostMarkdown.css';

// Component that takes text, parses for symbols, and returns a component that consists of properly sized text
function textToMarkdown(bodyText){
    // Turn the post text into "readable" text here
    let marker = '@';
    //bodyText = PostAssistant.decodeText(bodyText)
    // Array of HTML elements to eventually render
    let elements = []

    // A current string of normal text
    let normText = "";

    // Take all respective elements and place them within respective tags.
    let counter = 0; // We'll keep updating this
    while (counter < bodyText.length){
        let currChar = bodyText.charAt(counter);
        // End the building of a normal line and push to elements
        if (currChar === marker || currChar === "*" || currChar === "_"){ // TODO: Add ~~ support
            if (normText.length > 0){
                elements.push(<div className="normText">{normText}</div>);
                normText = "";
            }

        }

        if (currChar === marker){
            // Headers
            if (bodyText.substring(counter, counter+7) === marker + "pound" + marker) {
                elements.push(<div className="headerL1">{bodyText.substring(counter+8, bodyText.indexOf(marker + "newline" + marker))}</div>);
                counter += 8;
            }
            // TODO L2 (and L3) headers

            // New lines
            else if (bodyText.substring(counter, counter+9) === marker + "newline" + marker) {
                elements.push(<br></br>);
                counter += 9;
            }
        }

        // Bold
        else if (currChar === "*"){
            if (bodyText.charAt(counter+1) === "*"){ // Double check, I guess?
                let startOfBold = counter+2;
                let endOfBold = bodyText.substring(startOfBold).indexOf("*");
                elements.push(<strong>{bodyText.substring(startOfBold, endOfBold)}</strong>)
                counter += endOfBold+2 - startOfBold;
            }
        }

        // Italics

        // Finally, if the current thing is not a marker, add all text until the next marker into a normal p tag and change iterbodytext to that marker spot
        else {
            normText += currChar;
            counter += 1;
            console.log(counter);
        }

        // Trim bodytext
        bodyText = bodyText.substring(counter);
        console.log(bodyText)
        console.log(elements)
        
    }

    // Create the array to return
    
    return (
        <>
        {elements}
        {/* Change to elements.map or whatever */}
        </>
    )
}

const MarkdownFormatter = { textToMarkdown };
export default MarkdownFormatter; 