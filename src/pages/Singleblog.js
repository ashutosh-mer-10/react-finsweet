import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Singleblog = () => {
  return (
    <>
      <div className="page-wrapper">
        <Editor
        //   editorState={editorState}
        //   onEditorStateChange={this.onEditorStateChange}
        />
        ;
      </div>
    </>
  );
};

export default Singleblog;
