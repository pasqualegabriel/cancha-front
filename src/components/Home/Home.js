import React from "react";

import "./Home.scss";

export default function Home(props) {

  return (
    <div className="wrapper">
      <div className="one">one</div>
      <div className="two">
        {Array.from({length: 25}, (_, i) => 
          <div className="my-grid-row" key={i+1}>
            <div className="my-col"></div>
          </div>
        )}
      </div>
    </div>
    
  );
}
