import { useEffect, useState } from 'react';
import './Markside.css';
import PostAssistant from './PostAssistant';
import MarkdownFormatter from './MarkdownFormatter';

// TODO: Blog post should have two main states- preview and extended. Should seamlessly work when in a BlogFeed component.
// TODO: For obvious reasons, these things should be passed in as props.

function BlogPost(props) {

    let prevLength = 512;

    let convertUnixToTimestamp = (timeInUnix => {
        let date = new Date(timeInUnix * 1000);
        return date.toDateString();
    });

    const [readMoreTag, setReadMoreTag] = useState('');
    const [blogPostBody, setBlogPostBody] = useState(PostAssistant.decodeText(props.postBody).substring(0, prevLength) + "...");

    useEffect(() => {
        // Check the post body to see if we need a "read more" tag
        if (props.postBody.length > prevLength) {
            setReadMoreTag("Read More...")
        } else {
            setReadMoreTag("");
        }
    }, [props.postBody.length]);


    const onReadMoreClick = () => {
        if (readMoreTag === "Read More...") {
            setReadMoreTag("Read Less");
            setBlogPostBody(props.postBody);
        }
        else {
            setReadMoreTag("Read More...")
            setBlogPostBody(props.postBody.substring(0, prevLength) + "...");
        }
    }
    return (
        <>
            <div className="blogPostContainer">
                <div className="blogPostHeader">
                    <div className="blogPostTitle">{props.postTitle}</div>
                    <div className="blogPostTags">{props.postTags}</div> { /* TODO: Make into a list when I integrate db stuff */ }
                    <div className="blogPostTimestamp">{convertUnixToTimestamp(props.dateInUnix)}</div>
                </div>
                <div className="blogPostContent">
                    {MarkdownFormatter.textToMarkdown(blogPostBody)}
                </div>
                <span className="blogPostExpand" onClick = {() => onReadMoreClick()}>{readMoreTag}</span> { /* TODO: Switch it when it toggles (make this a function) */ }
            </div>
        </>
    )

}

export default BlogPost;