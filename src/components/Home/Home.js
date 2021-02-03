import React from "react";
import Matchs from "../Matchs"

import "./Home.scss";

export default function Home(props) {

  return (
    // <div className="wrapper">
    //   <div className="one">one</div>
    //   <div className="two">
    //     {Array.from({length: 25}, (_, i) => 
    //       <div className="my-grid-row" key={i+1}>
    //         <div className="my-col"></div>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="body2">

      <div className="sidebar">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      {/* <div className="middlet"> */}
        <Matchs />
      {/* </div> */}

    </div>
    
  );
}
