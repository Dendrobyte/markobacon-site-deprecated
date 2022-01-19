function NewPost(props) {

    return (
        <>
        <div className="newPostContainer">
                <div className="blogPostHeader">
                    <p className="blogPostTitle">NEW POST</p><br></br>
                    <p className="blogPostTags">TAGS (comma separated)</p>
                </div>
                <textarea className="newPostTextArea"></textarea>
            </div>
        </>
    )

}

export default NewPost;