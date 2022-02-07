import { Button } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';

function LoginContent(props) {

    // Ensure username and password fields are somewhat filled in, at least
    const [buttonDisabled, setButtonDisabled] = useState(true); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [disableNewPost, setDisableNewPost] = useState(false);

    // State variable to represent if a user is logged in (perhaps it can hold token?)
    const [isLoggedIn, setIsLoggedIn] = useState('')
    const [loginErrorMsg, setLoginErrMsg] = useState('')

    // Check if user is logged in
    // TODO: Change the token to the user's token stored in local storage or something
    useEffect(() => {
        axios.get(`http://localhost:8080/isloggedin`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authkey")
            }
        }).then((res) => {
            if (res.data === true) setIsLoggedIn(true);
        }).catch((err) => {
            console.log(err)
            setIsLoggedIn(false);
        });
    }, [])

    // Disable login button if either field is empty
    useEffect(() => {
        setButtonDisabled(username === '' || password === '');
    }, [username, password])
    
    // Submit function for login
    const handleLoginSubmit = (event) => {
        event.preventDefault();

        console.log("Running login submit")
        // TODO: Once we make proper request to Spring backend, store the token in local storage
        axios.post(/*`https://markside-backend.herokuapp.com/loginauth`*/`http://localhost:8080/loginauth`, {
                "username": username,
                "password": password
        }).then((res)=>{
            localStorage.setItem("authkey", res.data.token);
            // TODO: Registration flag

            // Otherwise deal with login normally if it's successful
            
            // TODO: Update alerts to modals or something
            if (res.status === 200) {
                setLoginErrMsg('')
                setIsLoggedIn(true)
                setUsername('')
                setPassword('')
            }
        }).catch((err)=>{
            console.log(err)
            setLoginErrMsg(<p className="loginErrorText">Incorrect Login!</p>)
        });

    }    

    const handleLogout = (event) => {
        localStorage.removeItem("authkey");
        setIsLoggedIn(false);
        setDisableNewPost(false);
        props.mainColContentFunc('latestPosts');
    }
    // If they're logged in, show the New Post button. If they aren't, show the login form.
    return isLoggedIn ? <>
    <Button variant="warning" className="newPostButton" disabled={disableNewPost} onClick={() => {props.mainColContentFunc('newPost'); setDisableNewPost(true);}}>New Post</Button>{' '}
    <Button variant="warning" className="logoutButton" onClick={() => handleLogout()}>Logout</Button>
    </>
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
                {loginErrorMsg}
                <Button as="input" type="button" value="Submit" className="marksideLoginButton" disabled={buttonDisabled} onClick={handleLoginSubmit} />
            </div>
            </>
        )
}

export default LoginContent;
