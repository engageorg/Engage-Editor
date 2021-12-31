import Editor from "@monaco-editor/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./snippet.css";

function SnippetScreen() {
    const [description, setDescription] = useState('');
    const [tabtrigger, setTabtrigger] = useState('');
    const [snippet, setSnippet] = useState('');
    let navigate = useNavigate();

    const handleSubmission = (event) => {
      event.preventDefault();
      localStorage.setItem('description', description);
      localStorage.setItem('tabtrigger', tabtrigger);
      localStorage.setItem('snippet', snippet);
		  navigate("/");
    }
    return ( 
      <div className="snippet-screen">
          <form className="snippet-form" onSubmit={handleSubmission}>
            <div className="upper-input">
              <input className="snippet-description" placeholder="snippet-description" onChange={(event) => {setDescription(event.target.value)}} value={description}/>
              <input className="snippet-tabtrigger" placeholder="snippet-tabtrigger" onChange={(event) => {setTabtrigger(event.target.value)}} value={tabtrigger}/>
            </div>
            <div>
              <Editor
                height="calc(70vh - 2.4vh)"
                theme="vs-dark"
                language="javascript"
                className="snipper-editor"
                defaultValue="//Type your snippet here"
                value={snippet}
                onChange={(value) => {setSnippet(value)}}
              />
              <button type="submit" className="snippet-submit btn mt-4">Save Snippet</button>
            </div>

          </form>
      </div>
    );
}

export default SnippetScreen;
