import BlogFeed from "./BlogFeed";

// TODO: Couldn't I just make this into a function? Maybe a component just feels nicer.

function MainColumnContent(props){

    if(props.content === 'latestPosts'){
        return <BlogFeed />
    }
}

export default MainColumnContent;