// import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Navbar/Nav";

const ProfilePage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Nav />

    <div className="flex">
      <Sidebar />
      Profile Page Will be here
    </div>
  </>
  )
}

export default ProfilePage