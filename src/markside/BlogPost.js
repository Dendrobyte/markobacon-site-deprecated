import './Markside.css';

// TODO: Blog post should have two main states- preview and extended. Should seamlessly work when in a BlogFeed component.
// TODO: For obvious reasons, these things should be passed in as props.

function BlogPost() {
    return (
        <>
            <div className="blogPostContainer">
                <div className="blogPostHeader">
                    <p className="blogPostTitle">This is a title</p>
                    <p className="blogPostTags">#these #are #tags</p> { /* TODO: Make into a list when I integrate db stuff */ }
                    <p className="blogPostTimestamp">07-04-21</p>
                </div>
                <p className="blogPostContent">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...</p>
                <p className="blogPostExpand">Read More...</p> { /* TODO: Switch it when it toggles (make this a function) */ }
            </div>
        </>
    )

}

export default BlogPost;