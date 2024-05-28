import React, { useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
const PostsDetails = (props) => {
  return (
    <div className="h-33 border-2 rounded-2 p-4">
      <p className="font-bold float-left">{props.postDetails.title}</p>
      <p>{props.postDetails.body}</p>
      <IconButton
        aria-label="delete"
        onClick={() => {
          props.commentsClicked(props.postDetails.id);
        }}
      >
        <CommentIcon />
      </IconButton>
      {props.showComment && <div>comments</div>}
    </div>
  );
};

export default PostsDetails;
