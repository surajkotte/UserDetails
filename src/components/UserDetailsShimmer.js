import React, { useState, useEffect } from "react";
import boy1 from "../Images/boy1.avif";
import Button from "@mui/material/Button";
import "../styles/userdetailsshimmer.css";

const UserDetailsShimmer = () => {
  return (
    <div className="flex flex-col items-center h-[300px] w-[350px] border-2 rounded-[20px] justify-center gap-4 shadow-lg">
      <div className="shimmer shimmer-circle h-[120px] w-[120px]"></div>
      <div className="shimmer shimmer-text w-[150px]"></div>
      <div className="shimmer shimmer-text w-[200px]"></div>
      <div className="flex justify-evenly p-4 w-full">
        <Button variant="outlined" size="medium" style={{ width: "91px" }}>
          Details
        </Button>
        <Button variant="outlined" size="medium" style={{ width: "91px" }}>
          Posts
        </Button>
      </div>
    </div>
  );
};

export default UserDetailsShimmer;
