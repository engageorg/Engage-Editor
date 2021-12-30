import Editor from "@monaco-editor/react";
import React, { useState } from "react";
import "./snippet.css";

function SnippetScreen() {
    const [description, setDescription] = useState('');
    const [tabtrigger, setTabtrigger] = useState('');
    const [snippet, setSnippet] = useState('');



    const handleSubmission = (event) => {
      event.preventDefault();
      localStorage.setItem('description', description);
      localStorage.setItem('tabtrigger', tabtrigger);
      localStorage.setItem('snippet', snippet);
      window.location.href = 'http://localhost:3000/'; 
    }
    return ( 
      <div className="snippet-screen" onSubmit={handleSubmission}>
          <form>
            <div className="upper-input">
              <input className="snippet-description" placeholder="snippet-description" onChange={(event) => {setDescription(event.target.value)}} value={description}/>
              <input className="snippet-tabtrigger" placeholder="snippet-tabtrigger" onChange={(event) => {setTabtrigger(event.target.value)}} value={tabtrigger}/>
            </div>
            <div>
              <Editor
                height="calc(90vh - 2.4vh)"
                theme="vs-dark"
                language="javascript"
                defaultValue="//snippet here"
                value={snippet}
                onChange={(value) => {setSnippet(value)}}
              />
              <input type="submit" className="snippet-submit"/>
            </div>

          </form>
      </div>
    );
}

export default SnippetScreen;
