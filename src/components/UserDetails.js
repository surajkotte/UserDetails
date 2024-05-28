import React, { useEffect, useState } from "react";
import boy from "../Images/boy.avif";
import boy1 from "../Images/boy1.avif";
import boy2 from "../Images/boy2.avif";
import boy3 from "../Images/boy3.jpeg";
import Button from "@mui/material/Button";
import Posts from "./Posts";
const UserDetails = (props) => {
  const [postsClicked, SetPostsClicked] = useState(false);
  return (
    <div
      className=" flex flex-col items-center h-[300px] w-[350px] border-2 rounded-[20px] justify-center gap-4"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className=" h-[120px] w-[120px] border-2 rounded-full">
        <img
          className="h-[120px] w-[120px] border-2 rounded-full"
          src={boy1}
        ></img>
      </div>
      <p>{props.userinfo.name}</p>
      <p>{props.userinfo.email}</p>
      <div className=" flex justify-evenly p-4 w-full">
        <Button variant="outlined" size="medium" style={{ width: "91px" }}>
          Details
        </Button>
        <Button
          variant="outlined"
          size="medium"
          style={{ width: "91px" }}
          onClick={() => {
            SetPostsClicked(true);
          }}
        >
          Posts
        </Button>
        {postsClicked && (
          <Posts userId={props.userinfo.id}
            closeClicked={() => {
              console.log("close clicked");  
              SetPostsClicked(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default UserDetails;
