import { useState, useEffect } from 'react';
import { ArrowLeftShort } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button'
import MainColumnContent from './MainColumnContent.js';
import SecondaryColumnContent from './SecondaryColumnContent.js';
import './Markside.css';

// TODO: Put some states here for the navbar selected item which then re-renders the BlogPost by passing in a new prop
let tempVar = 'latestPosts';

function MarksideHome() {

    // Ensure username and password fields are somewhat filled in, at least
    const [buttonDisabled, setButtonDisabled] = useState(true); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        setButtonDisabled(username === '' || password === '');
    }, [username, password])

    const handleLoginSubmit = (event) => {
        event.preventDefault();
    }    

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
                        <p className="secondaryColumnHeaderText">Quick Login</p>
                        <input
                            type="textarea"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(val) => setUsername(val.target.value)}
                            className="marksideLogin"
                        ></input>
                        <input
                            type="textarea"
                            name="username"
                            placeholder="Password"
                            value={password}
                            onChange={(val) => setPassword(val.target.value)}
                            className="marksideLogin"
                            onKeyPress={(event) => {
                                if(event.key === 'Enter'){
                                    handleLoginSubmit(event)
                                }
                            }}
                        ></input>
                        <Button as="input" type="button" value="Submit" className="marksideLoginButton" disabled={buttonDisabled} onClick={handleLoginSubmit} />
                    </div>
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