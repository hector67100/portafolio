import React from "react";
import Principal from "../principal/Principal";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navigations = React.FC = () =>
{
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route path="/">
            <Principal />
          </Route>
      </div>
    </Router>
}

export default Navigations;