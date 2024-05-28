import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { POSTS_URL } from "../constants/constant";
import PostsDetails from "./PostsDetails";
const Posts = (props) => {
  const [posts, SetPosts] = useState([]);
  const fetchPosts = async () => {
    const data = await fetch(POSTS_URL + props.userId);
    const jsonData = await data.json();
    SetPosts(jsonData);
    console.log(jsonData);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-[2]">
      <div className=" h-4/5 w-2/4 bg-white p-4 rounded shadow-md overflow-y-auto">
        <div className=" h-[50px]">
          <button
            className="text-blue-500 hover:text-blue-700 focus:outline-none float-right"
            onClick={() => {
              props.closeClicked();
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <div className=" flex justify-center items-center flex-col gap-2">
          {posts.map((data) => {
            return <PostsDetails postDetails={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
