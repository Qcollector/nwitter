import { authService } from "firebaseApp";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const onLogoutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogoutClick}>Logout</button>
    </>
  );
};

export default Profile;
