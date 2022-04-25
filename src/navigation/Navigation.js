import React from "react";
import principal from "../principal/principal";

const Navigations = React.FC = () =>
{
    <Router>
        <Switch>
            <Route path='/' component={principal} />
        </Switch>
    </Router>
}

export default Navigations;