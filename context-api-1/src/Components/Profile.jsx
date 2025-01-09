import React from "react";

import UserContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
    if(!user) return <div>Please Login</div>

  return <div>UserName: {user}</div>;
};

export default Profile;
