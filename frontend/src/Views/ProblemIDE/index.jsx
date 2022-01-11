import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import EditorPS from "./editor";
import "./index.css";
import Split from "react-split";
import Sidebar from "../../Components/editorSidebar";
import PS from "./problemStatement"


function Problem() {

  return (
    <>
      <motion.div       
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }} 
        className="problem"
      >
        <Sidebar/>
        <div className="problem_screen">
          <Split
            sizes={[50, 50]}
            minSize={20}
            expandToMin={false}
            direction="horizontal"
            cursor="col-resize"
            className="split-flex"
          >

            <PS/>
            <EditorPS/>
          </Split>
        </div>
      </motion.div>
      
    </>
  );
}

export default Problem;
