import validator from 'validator';

// TODO: Change replacements to regex for practice.

/*
 * Encode text for a blog post. Currently used to replace brackets and escape various characters when being put into the database.
 */
const encodeText = (text) => {
    let marker = '@';

    // Replace "[" and "]"
    text = text.replaceAll("[", marker + 'br_open' + marker).replaceAll("]", marker + 'br_close' + marker);
    // Replace """ and "'"
    text = text.replaceAll("\"", marker + 'quot_dubl' + marker).replaceAll("'", marker + 'quot_sing' + marker);
    // Replace "`"
    text = text.replaceAll("`", marker + 'tick' + marker);
    // Replace "\n"
    text = text.replaceAll("\n", marker + 'newline' + marker);
    // Replace "\t"
    text = text.replaceAll("\n", marker + 'newline' + marker);
    // Replace "#"
    text = text.replaceAll("#", marker + `pound` + marker);
    // Replace "?"
    text = text.replaceAll("?", marker + `question` + marker);
    // Replace "/"
    text = text.replaceAll("/", marker + `forw_slash` + marker);
    // Replace "\"
    text = text.replaceAll("\\", marker + `back_slash` + marker);
    return text;
}

/*
 * Decode text for a blog post. Replaces any characters with actual character prior to posting.
 */
const decodeText = (text) => {
    let marker = '@';

    // Put in "[" and "]"
    text = text.replaceAll(marker + 'br_open' + marker, "[").replaceAll(marker + 'br_close' + marker, "]");
    // Put in """ and "'"
    text = text.replaceAll(marker + 'quot_dubl' + marker, "\"").replaceAll(marker + 'quot_sing' + marker, "'");
    // Put in "`"
    text = text.replaceAll(marker + 'tick' + marker, "`");
    // Put in "\n"
    text = text.replaceAll(marker + 'newline' + marker, "\n",);
    // Put in "\n"
    text = text.replaceAll(marker + 'newline' + marker, "\t",);
    // Put in "#"
    text = text.replaceAll(marker + `pound` + marker, "#");
    // Put in "?"
    text = text.replaceAll(marker + `question` + marker, "?");
    // Put in "/"
    text = text.replaceAll(marker + `forw_slash` + marker, "/");
    // Put in "\"
    text = text.replaceAll(marker + `back_slash` + marker, "\\");
    return text;
}

/* 
 * Validation function to make sure a post has things that are allowed.
 * Currently only "banned" character is `@` for special things 
 */
const isValidBody = (text) => {

}

const PostAssistant = { encodeText, decodeText, isValidBody };
export default PostAssistant;