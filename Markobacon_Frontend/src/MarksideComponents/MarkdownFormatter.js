import PostAssistant from "./PostAssistant";

// Component that takes text, parses for symbols, and returns a component that consists of properly sized text
function textToMarkdown(bodyText){
    // Turn the post text into "readable" text here
    bodyText = PostAssistant.decodeText(bodyText)

    return bodyText;
}

const MarkdownFormatter = { textToMarkdown };
export default MarkdownFormatter; 