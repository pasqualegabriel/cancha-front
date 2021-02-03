import React from "react";

import "./Matchs.scss";

export default function Matchs(props) {

  return (
      <div className="middlet">
        {Array.from({length: 25}, (_, i) => 
            <div className="my-col2"></div>
        )}
      </div>
  );
}
