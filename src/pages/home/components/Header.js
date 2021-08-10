import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, SvgIcon, Avatar } from '@material-ui/core';
import { Bell } from 'react-feather'


const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }
})



function Header() {
    const classes = useStyles();
    return (
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Toolbar>
                <img src='/images/logo.png' alt='logo' className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button color='primary' variant='contained' className={classes.button}>Novo Post</Button>
                    <SvgIcon className={classes.bell}>
                        <Bell />
                    </SvgIcon>
                    <Avatar alt='Remy Sharp' src="/"></Avatar>
                </div>

            </Toolbar>
        </AppBar>
    );
}

export default Header;