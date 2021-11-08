import React from 'react'
import { Container, makeStyles, Box } from '@material-ui/core'

import Header from './components/Header';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },

    main: {
        height: '100vh',
        padding: 24
    },
    toolbar: {
        minHeight: '64px'
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display='flex'>
                        <Navbar />
                        <Feed />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default Home;