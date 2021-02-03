import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserImage from "../../assets/user.png";

import "./TopBar.scss";

export default function TopBar(props) {

  return (
    <div className="top-bar">
      CANCHA APP

      <div className="top-bar__right">
        <Link to="/">
          <Image src={UserImage} />
          user
        </Link>
        <Icon name="log out" onClick={() => {}} />
      </div>
    </div>
  );
}
