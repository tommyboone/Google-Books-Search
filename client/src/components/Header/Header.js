import React from "react";
import backgroundImage from "../../images/Google-Books-Background.jpg";
import "./style.css"


const headerStyle = {
  "backgroundImage": `url(${backgroundImage})`,
  "maxWidth": "100vw",
  "height": "calc(100vw * .43333)",
  "backgroundSize": "cover",
  "position": "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
          <span className="span">
              <h1> Google Books React Search</h1>
            <p>Search for and Save Books of Interest</p>
          </span>

        </header>
    );
}

export default Header;