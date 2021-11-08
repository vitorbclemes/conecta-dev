import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from "@material-ui/core/MenuItem";

import { signOut } from '../../../../actions/accountAction'


function Account() {
    const account = useSelector((state) => state.account)
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = !!account.user


    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);

    }

    const handleSignOut = () => {
        handleClose();
        dispatch(signOut());
        navigate('/')
    }

    return (
        <>
            <Avatar
                ref={ref}
                onClick={handleOpen}
                alt='Remy Sharp'
                src={account.user && account.user.avatar}
            />
            {
                isAuthenticated
                    ?
                    <Menu
                        anchorEl={ref.current}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        open={isOpen}
                        onClose={handleClose}
                        getContentAnchorEl={null}
                    >

                        <MenuItem>Perfil</MenuItem>
                        <MenuItem>Meus Favoritos</MenuItem>
                        <MenuItem>Meus Posts</MenuItem>
                        <MenuItem>Minhas Conexões</MenuItem>
                        <MenuItem onClick={handleSignOut}>Sair</MenuItem>

                    </Menu>
                    :
                    <Menu
                        anchorEl={ref.current}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        open={isOpen}
                        onClose={handleClose}
                        getContentAnchorEl={null}
                    >
                        <MenuItem>Registrar</MenuItem>
                        <MenuItem>Entrar</MenuItem>
                    </Menu>
            }

        </>
    );
}

export default Account;