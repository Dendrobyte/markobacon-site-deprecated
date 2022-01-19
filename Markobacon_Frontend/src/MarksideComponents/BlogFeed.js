import BlogPost from "./BlogPost";
import {useState, useEffect} from 'react';
require('dotenv').config({ silent: true })

function BlogFeed(props){

    const [data, setData] = useState(null);
    const [postArray, setPostArray] = useState([])

    // TODO: Make the feed load 10 at first and then be dynamic. Loading the feed is where things are pulled/rendered from DB...?
    useEffect(() =>{
        //fetch(`http://localhost:3001/allentries`,)
        fetch(`http://localhost:8080/getallposts`)
            .then((res) => res.json())
            .then((data) => {
                // "data" is a list of blog post objects in JSON format
                setData(data)
                // Create an array object of posts that I can then return to render
                let blogPostArray = [];
                blogPostArray = data.map((postInfo, index) => 
                    (
                        <BlogPost key={index} postTitle={postInfo.postTitle} postTags={postInfo.postTags} dateInUnix={postInfo.dateInUnix} postBody={postInfo.postBody}/>
                    )
                )
                setPostArray(blogPostArray);
            });
    },  []);

    return postArray;
}

export default BlogFeed;