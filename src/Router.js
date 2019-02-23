import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';
import IssuePage from './components/IssuePage.js';

const routes = [
    {
        path: "/:id",
        component: IssuePage
    }
]

const RouteConstructor = (route) => (
    <Route
        path={route.path}
        render={props => (
        <route.component {...props} issues={route.data.issues} />
        )} />
);

const ConfiguredRouter = (props) => (
    <Router>
        <div>
            {routes.map((route, i) => <RouteConstructor key={i} {...route} data={props} />)}
            <Route path='/' exact render={data => (
                <Home {...data} issues={props.issues} />
                )} />
        </div>
    </Router>
);

export default ConfiguredRouter;
