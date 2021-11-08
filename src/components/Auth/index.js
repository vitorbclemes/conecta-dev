import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import authService from '../../service/authService'
import { setUserData } from '../../actions/accountAction'

function Auth({ children }) {
    const dispatch = useDispatch();

    const initAuth = useCallback(async () => {
        if (authService.isAuthenticated()) {
            await dispatch(setUserData())
        }

    }, [dispatch])

    useEffect(() => {
        initAuth();
    }, [initAuth])

    return children;
}

export default Auth;