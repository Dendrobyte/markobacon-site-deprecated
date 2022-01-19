import BlogFeed from "./BlogFeed";
import NewPost from "./NewPost";

// TODO: Couldn't I just make this into a function? Maybe a component just feels nicer.

function MainColumnContent(props){

    if(props.content === 'latestPosts'){
        return <BlogFeed />
    } else if (props.content === 'newPost'){
        return <NewPost />
    }
}

export default MainColumnContent;