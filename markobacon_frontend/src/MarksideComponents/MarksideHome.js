import { useState } from 'react';
import { ArrowLeftShort } from 'react-bootstrap-icons';
import LoginContent from './LoginContent.js';
import MainColumnContent from './MainColumnContent.js';
import SecondaryColumnContent from './SecondaryColumnContent.js';
import './Markside.css';

function MarksideHome() {

    const [mainColContent, setMainColContent] = useState('latestPosts');
    
    return (
        <>
        <body>
            <div className="homeTopBar">
                <ArrowLeftShort className="homeTopBarArrow" />
                <p className="homeTopBarText" onClick={() => window.history.back()}>Return from whence you came...</p>
            </div>
            
            <div className="homeHeader">
                <h1 className="marksideText">Markside</h1>
                <p className="marksideSubtext">Welcome to my 'side' of the internet</p>
                <p className="marksideSubtext">Blog page is, visibly, a live WIP | Frontend: React JS, Backend: Spring (Java)</p>
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
                        <MainColumnContent content={mainColContent} mainColContentFunc={setMainColContent} />
                        {/* End of blog post */}
                    </div>
                </div>
                <div className="secondaryColumn">
                    <LoginContent mainColContentVar={mainColContent} mainColContentFunc={setMainColContent}/>
                    <SecondaryColumnContent />
                </div>
            </div>
        </body>
        </>
    )
}

export default MarksideHome;