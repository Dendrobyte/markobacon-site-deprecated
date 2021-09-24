import BlogPost from "./BlogPost";
import {useState, useEffect} from 'react';
require('dotenv').config({ silent: true })

function BlogFeed(props){

    const [test, setTest] = useState(null);

    // TODO: Make the feed load 10 at first and then be dynamic. Loading the feed is where things are pulled/rendered from DB...?
    useEffect(() =>{
        fetch(`http://localhost:3001/allentries`,)
            .then((res) => res.json())
            .then((data) => setTest(data.message));
    },  []);

    return (
        <>
            <p>{test}</p>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </>
    )
}

export default BlogFeed;