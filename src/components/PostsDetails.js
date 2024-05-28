import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import Comments from "./Comments";

const PostsDetails = (props) => {
  return (
    <div className="h-33 border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md">
      <p className="font-bold text-xl mb-2">{props.postDetails.title}</p>
      <p className="text-gray-700 mb-3">{props.postDetails.body}</p>
      <div className="flex justify-end">
        <IconButton
          aria-label="show comments"
          onClick={() => {
            props.commentsClicked(props.postDetails.id);
          }}
          className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
        >
          <CommentIcon />
        </IconButton>
      </div>
      {props.showComment && (
        <div className="mt-4">
          <Comments postId={props.postDetails.id} />
        </div>
      )}
    </div>
  );
};

export default PostsDetails;
