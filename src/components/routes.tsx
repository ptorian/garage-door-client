import React from 'react'

import { Route, Switch } from "react-router-dom";
import {Redirect} from "react-router";
import LoginFormContainer from "../containers/loginFormContainer";
import GarageDoorListContainer from "../containers/garageDoorListContainer";
import PrivateRouteContainer from "../containers/privateRouteContainer";
import PublicRouteContainer from "../containers/publicRouteContainer";
import MainDashboardContainer from "../containers/mainDashboardContainer";

const Routes = () => (
    <div style={{backgroundColor: "white", padding: "15px"}}>
        <Switch>
            <PrivateRouteContainer exact path="/home" component={MainDashboardContainer} />
            <PrivateRouteContainer exact path="/garage-doors" component={GarageDoorListContainer} />
            <PublicRouteContainer exact path="/login" component={LoginFormContainer} />
            <Route>
                <Redirect to="/home"/>
            </Route>
        </Switch>
    </div>
);

export default Routes;