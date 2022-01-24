import BlogFeed from "./BlogFeed";
import MainColError from "./MainColError";
import NewPost from "./NewPost";

// TODO: Couldn't I just make this into a function? Maybe a component just feels nicer.

function MainColumnContent(props){

    if(props.content === 'latestPosts'){
        return <BlogFeed />
    } else if (props.content === 'newPost'){
        // TODO: Do a double-check to ensure someone has the right token
        const tempLoggedIn = true; // Temporary boolean for front-end testing
        
        return tempLoggedIn ? <NewPost /> : <MainColError />
    }
}

export default MainColumnContent;