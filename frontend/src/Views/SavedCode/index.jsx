import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Table from "./savedCodeTable";
const userCode = [];

export default function UserCode() {
  const [codeInfo, setCodeInfo] = useState([]);
  const [cookies] = useCookies(["cookie-name"]);
  useEffect(() => {
    (() => {
      axios(
        `https://engage-editor-backend.herokuapp.com/usercode/${cookies.sessId}`
      ).then((response) => {
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
          userCode.reverse();
          setCodeInfo(userCode);
        } else if (response.data.status === 401) {
          alert(response.data.message);
        }
      });
    })();
  }, []);

  return (
    <>
      <Table savedCode={codeInfo} />
    </>
  );
}
