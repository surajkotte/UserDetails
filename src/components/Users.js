import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import UserDetailsShimmer from "./UserDetailsShimmer";
const Users = () => {
  const [userDetails, SetUserDetails] = useState();
  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();
    SetUserDetails(jsonData);
    console.log(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {userDetails ? (
        <div className=" flex justify-center p-6 flex-wrap gap-3">
          {userDetails.map((data) => {
            return <UserDetails key={data.id} userinfo={data} />;
          })}
        </div>
      ) : (
        <div className=" flex justify-center p-6 flex-wrap gap-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <UserDetailsShimmer key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Users;
