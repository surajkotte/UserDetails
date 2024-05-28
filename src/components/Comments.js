import React, { useEffect, useState } from "react";
import { COMMENTS_URL } from "../constants/constant";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    console.log(postId+" post id ")
    const data = await fetch(COMMENTS_URL + postId);
    const jsonData = await data.json();
    setComments(jsonData.slice(0, 3));
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div className="mt-4">
      {comments.map((comment) => (
        <div key={comment.id} className="border-t pt-2">
          <h3 className="font-semibold">{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
