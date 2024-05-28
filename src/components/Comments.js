import React, { useEffect, useState } from "react";
import { COMMENTS_URL } from "../constants/constant";
import CommentsShimmer from "./CommentsShimmer";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    console.log(postId + " post id ");
    const data = await fetch(COMMENTS_URL + postId);
    const jsonData = await data.json();
    setComments(jsonData.slice(0, 3));
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div className=" flex flex-col gap-2">
      <p className="text-lg font-bold mb-2">Comments</p>
      {comments ? (
        comments.map((comment) => {
          return (
            <div key={comment.id} className="border-t pt-2">
              <h3 className="font-semibold text-md">{comment.name}</h3>
              <p className="text-gray-600">{comment.body}</p>
            </div>
          );
        })
      ) : (
        <>
          <CommentsShimmer />
        </>
      )}
    </div>
  );
};

export default Comments;
