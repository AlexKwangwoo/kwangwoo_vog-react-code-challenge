import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="Welcome_Box">
      <div className="Welcome_Title">Welcome To Vog Code Challenge</div>
      <div className="Welcome_Link">
        <Link to={"/home"}>
          <div className="Common_Button Welcome_Home">Go to Home Page</div>
        </Link>
        <Link to={"/universities"}>
          <div className="Common_Button Welcome_Universities">
            Go to Universities Page
          </div>
        </Link>
        <Link to={"/postal"}>
          <div className="Common_Button Welcome_Postal ">
            Go To Postal Lookup Page
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
