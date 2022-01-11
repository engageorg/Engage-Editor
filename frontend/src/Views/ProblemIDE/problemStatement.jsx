import React, { useState } from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { updateSampleTests } from "../../actions";
import { cfEndMarkup, cfMarkup } from "./codeforcesTemplate";

let globalUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://engage-editor-backend.herokuapp.com";

function PS() {
    const dispatch = useDispatch();
    const [url, setUrl] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event)
      axios.get(globalUrl + "/ps?url=" + url).then((response) => {
        dispatch(updateSampleTests(response.data.sampleTests));
        let if_data = cfMarkup + response.data.markup + cfEndMarkup;
        var ifrm = document.createElement("iframe");
        ifrm.srcdoc = if_data;
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";
        document.getElementsByClassName("iframe_div")[0].innerHTML = "";
        document.getElementsByClassName("iframe_div")[0].appendChild(ifrm);
      });
    };

    return(
        <div className="iframe_div">
        <form onSubmit={handleSubmit}>
          <input
            className="url_input"
            onChange={(event) => {
              setUrl(event.target.value);
            }}
            value={url}
          />
          <input type="submit" value="Submit" />
        </form>
        <h1>Insert problem statement link,above to show here</h1>
      </div>
    )
}

export default PS;