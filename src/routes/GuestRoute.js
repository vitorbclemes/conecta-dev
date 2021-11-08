import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../pages/home';
import { useSelector } from 'react-redux'

function GuestRoute({ element: Component, ...rest }) {
    const account = useSelector(state => state.account);
    const isAuthenticated = Boolean(account.user)
    return (
        <Route {...rest} element={(
            isAuthenticated
                ? <Home />
                : Component
        )} />
    )
}

export default GuestRoute;