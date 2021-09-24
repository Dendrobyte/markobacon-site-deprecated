import { ArrowLeftShort } from 'react-bootstrap-icons';
import MainColumnContent from './MainColumnContent.js';
import SecondaryColumnContent from './SecondaryColumnContent.js';
import './Markside.css';

// TODO: Put some states here for the navbar selected item which then re-renders the BlogPost by passing in a new prop
let tempVar = 'latestPosts';

function MarksideHome() {
    return (
        <>
        <body>
            <div className="homeTopBar">
                <ArrowLeftShort className="homeTopBarArrow" />
                <p className="homeTopBarText">Return from whence you came...</p>
            </div>
            
            <div className="homeHeader">
                <h1 className="marksideText">Markside</h1>
                <p className="marksideSubtext">Welcome to my 'side' of the internet</p>
            </div>

            <div className="homeBody">
                <div className="mainColumn">
                    <div className="mainColumnNavbar">
                        { /* Options will go here. TODO: Change how this works*/}
                        <p className="selectedNavItem">Latest Posts</p>
                        <p className="unselectedNavItem">Archive</p>
                    </div>
                    <div className="mainColumnBody">
                        { /* Components depending on navbar selection will go here */ }
                        {/* Replace the below with this: <MainColumnContent content={tempVar} /> */}
                        <MainColumnContent content={tempVar} />
                        <MainColumnContent content={tempVar} />
                        {/* End of blog post */}
                    </div>
                </div>
                <div className="secondaryColumn">
                    <div className="secondaryColumnHeader">
                        <p className="secondaryColumnHeaderText">Tweets @Mobkinz78</p>
                    </div>
                    <SecondaryColumnContent />
                </div>
            </div>
        </body>
        </>
    )
}

export default MarksideHome;