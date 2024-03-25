// import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Navbar/Nav";

const TournamentPage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Nav />

    <div className="flex">
      <Sidebar />
      HTournaments will be organized here
    </div>
  </>
  )
}

export default TournamentPage