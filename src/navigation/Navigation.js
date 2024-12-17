import React from "react";
import Principal from "../principal/principal";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

const Navigations = React.FC = () =>
{
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
        </Routes>
      </Router>

    );
}

export default Navigations;