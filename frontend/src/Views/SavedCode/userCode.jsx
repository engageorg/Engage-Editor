import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Table from "../Table/savedCodeTable";
const userCode = [];

export default function UserCode() {
  const [codeInfo, setCodeInfo] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  useEffect(() => {
    (() => {
      axios(`http://localhost:5000/usercode/${cookies.sessId}`).then(
        (response) => {
          if (response.data.status === 200) {
            response.data.code.forEach((code, index) => {
              userCode.push({
                code: code.code,
                no: index + 1,
                id: code._id,
                name: code.name,
                language: code.language,
                createdAt: code.createdAt,
              });
            });
            setCodeInfo(userCode);
          }else if(response.data.status === 401){
            alert(response.data.message)
          }
        }
      );
    })();
  }, []);

  return (
    <>
      <h1>MY CODE</h1>
      <Table savedCode={codeInfo} />
    </>
  );
}
