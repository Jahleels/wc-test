import { Card, CardContent, TextField, Typography, CardActions, Button, Link } from "@mui/material";
import {LoadingButton} from '@mui/lab'
import s from '../../views/login/loginView.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'



function Login({formValues, setForm, submit}) {
    const loading = useSelector(state => state.isLoading)
    const [register, setRegister] = useState(false)


    const toggle = (e) => {
        e.preventDefault()
        setRegister(prev => !prev)
    }




    return !register ? (
        <Card className={s.card}>
            <CardContent>
                <Typography variant='h5'>Iniciar Sesión</Typography>
                <TextField value={formValues.user} name='user' onChange={setForm} fullWidth margin='normal' variant='filled' label='Usuario' />
                <TextField value={formValues.password} name='password' onChange={setForm} type='password' fullWidth margin='normal' variant='filled' label='Contraseña' />
            </CardContent>
            <CardActions>
                <LoadingButton loading={loading} className={s.buttonSubmit} onClick={submit} name='logIn' variant='outlined'>Iniciar Sesión</LoadingButton>
            </CardActions>
            <Typography variant='caption'>
                ¿No eres usuario? <Link component='button' onClick={toggle}>Registrate aquí</Link>
            </Typography>
        </Card>
    ) : (
            <Card className={s.card}>
                <CardContent>
                    <Typography variant='h5'>Registrarse</Typography>
                    <TextField value={formValues.user} name='user' onChange={setForm} fullWidth margin='normal' variant='filled' label='Usuario' />
                    <TextField value={formValues.password} name='password' onChange={setForm} fullWidth margin='normal' variant='filled' label='Contraseña' />
                </CardContent>
                <CardActions>
                    <LoadingButton loading={loading} className={s.buttonSubmit} onClick={submit} name='register' variant='outlined'>Registrarse</LoadingButton>
                </CardActions>
                <Typography variant='caption'>
                    ¿Ya tienes una cuenta? <Link component='button' onClick={toggle}>Inicia sesión</Link>
                </Typography>
            </Card>
    )
}

export default Login;