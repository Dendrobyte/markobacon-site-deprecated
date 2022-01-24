import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {useState, useEffect} from 'react';
import axios from 'axios';

function NewPost(props) {

    // State variables to handle form inputs
    const [formTitle, setFormTitle] = useState('');
    const [formTags, setFormTags] = useState('');
    const [formBody, setFormBody] = useState('');

    const handleNewPostSubmit = (event) => {
        event.preventDefault();
        let newPostObj = {
            postTitle: formTitle,
            postTags: formTags,
            postBody: formBody
        }
        console.log("Post info: " + JSON.stringify(newPostObj));
        axios.post(`http://localhost:8080/newpost?postTitle=${formTitle}&postTags=${formTags}&postBody=${formBody}`)
        .then(response => {
            alert("Post submitted! :D"+response);
        }).catch(err => {
            alert("Encountered an error...");
            
            console.log(err);
        });
        
    }

    return (
        <>
        <div className="newPostContainer">
            <Form onSubmit={handleNewPostSubmit}>
                <div className="blogPostHeader">
                    <Form.Group className="mb-3 newPostTitleGroup" controlId="formPostTitle">
                        <Form.Label className="newPostTitleText">Post Title</Form.Label><br></br>
                        <Form.Control value={formTitle} onChange={(e) => setFormTitle(e.target.value)} placeholder="Epic Title" className="newPostTitleTextArea"/><br></br>
                        <Form.Text className="newPostSubtitle">
                            Make it a good one!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 newPostTitleGroup" controlId="formPostTags">
                        <Form.Label className="newPostTagsText">Tags</Form.Label><br></br>
                        <Form.Control value = {formTags} onChange={(e) => setFormTags(e.target.value)} placeholder="Your,Tags,Here" className="newPostTagsTextArea"/><br></br>
                        <Form.Text className="newPostSubtitle">
                            Comma separated!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 newPostTitleGroup" controlId="formPostBody">
                            <Form.Label className="newPostTitleText">Post Content</Form.Label><br></br>
                            <Form.Text className="newPostBodySubtitle">
                                Markdown support soon™
                            </Form.Text>
                            <Form.Control value = {formBody} onChange={(e) => setFormBody(e.target.value)} as="textarea" placeholder="So today on Markside..." className="newPostTextArea"/><br></br>
                            
                    </Form.Group>
                </div>

                <Button className="newPostSubmitButton" variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
        </>
    )

}

export default NewPost;