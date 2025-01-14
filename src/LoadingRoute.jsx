import React from 'react';
import { Route } from 'react-router';

//Route for typescript
const LoadingRoute = ({
    location,
    component,
    render,
    children,
    path,
    exact,
    sensitive,
    strict,
    loading
}) =>
    <Route
        location={location}
        component={component}
        render={render}
        children={children}
        path={path}
        exact={exact}
        sensitive={sensitive}
        strict={strict}
    />;

export default LoadingRoute;
