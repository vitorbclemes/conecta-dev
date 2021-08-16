import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    title: {
        fontSize: 33,
        color: '#fff',
        lineHeight: '45px'
    },
    subtitle: {
        color: 'rgb(255,255,255,0.7)',
        marginTop: 30,
        fontSize: 15,
        lineHeight: '30px'
    },
    avatar: {
        background: theme.palette.primary.main,
        margin: theme.spacing(1)

    },
    button: {
        marginTop: theme.spacing(1),
    },
    form: {
        margin: theme.spacing(2, 4)
    }
}))

function Copyright() {
    return (
        <Typography variant='body 2' align='center'>
            {`Copyright @`}
            <a color='inherit' href="https://www.youtube.com">
                Lucas Nihmi
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

function SignIn() {
    const classes = useStyles()
    const navigate = useNavigate()
    return (

        <Grid container className={classes.root}>
            <Grid
                item
                container
                direction='column'
                justify='center'
                alignItems='center'
                md={7}
                className={classes.image}>
                <Typography className={classes.title}><strong> Simplificando a forma de conectar desenvolvedores de software!</strong></Typography>
                <Typography variant='body2' className={classes.subtitle}>Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software</Typography>
            </Grid>

            <Grid item md={5} >
                <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5"><strong>Acesso</strong></Typography>

                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id='email'
                            label='E-mail'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id='password'
                            label='Senha'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                        />
                        <Button fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={() => navigate('/')}>
                            Entrar
                        </Button>

                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn;