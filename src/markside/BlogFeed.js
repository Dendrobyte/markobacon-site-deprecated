import BlogPost from "./BlogPost";

// TODO: Make the feed load 10 at first and then be dynamic. Loading the feed is where things are pulled/rendered from DB...?

function BlogFeed(props){

    return (
        <>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </>
    )
}

export default BlogFeed;