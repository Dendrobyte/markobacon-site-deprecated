import { Button } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';

function LoginContent(props) {

    // Ensure username and password fields are somewhat filled in, at least
    const [buttonDisabled, setButtonDisabled] = useState(true); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // TODO: Temporary boolean to represent login.
    const login = false;

    // Disable login button if either field is empty
    useEffect(() => {
        setButtonDisabled(username === '' || password === '');
    }, [username, password])
    
    // Submit function for login
    const handleLoginSubmit = (event) => {
        event.preventDefault();

        console.log("Running login submit")
        axios.get(`http://localhost:3001/login?username=${username}&password=${password}`).then((res)=>{
            console.log(res.data)

            // If we're creating, the response just holds on to a specific boolean (rip, this doesn't work. but the document is added!)
            if(res.data.createAccount){
                alert('New account created! Check the database to make sure the hash was stored.')
                return
            }

            // Otherwise deal with login normally if it's successful
            
            // TODO: Update alerts to modals or something
            if (res.data.login === true) {
                alert("Hey there, " + username +"! You've successfully logged in.")
            } else {
                alert("Login failure!\nReason: " + res.data.reason)
            }
        }).catch((err)=>{
            alert(err)
        });

    }    

    // If they're logged in, show the New Post button. If they aren't, show the login form.
    return login ? <><Button variant="warning" className="newPostButton" onClick={() => props.mainColContentFunc('newPost')}>New Post</Button>{' '}</>
        : (<>
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
                    type="password"
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
            </>
        )
}

export default LoginContent;
