import React from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import {useEffect} from "react";
export default function Table(props) {
  return (
      <>
        {props.savedCode.map((lecture) => {
        return (
          <>
          <div className="lectureRow">
          <Link to = {{
            pathname:`/usercode/${lecture.id}`,
            }}>
            <div>
              <h1 id={lecture.no}>{lecture.no}</h1>
              <h1 id={lecture.no}>{lecture.name}</h1>
              <h1 id={lecture.no}>{lecture.language}</h1>
              <h1 id={lecture.no}>{lecture.createdAt}</h1>
            </div>
            </Link>
            </div>
          </>
        );
      })}
      </>
  );
}
