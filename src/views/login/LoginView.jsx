import s from './loginView.module.css'
import { Container, Typography, Stack } from "@mui/material";
import Login from '../../components/login/Login';
import { useState } from 'react'
import createUser from '../../services/createUser'
import authUser from "../../services/authUser";
import { useDispatch } from 'react-redux'
import { isLoading, setUserCredential } from '../../redux/actions'
import { useHistory } from 'react-router-dom'

function LoginView() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [formValues, setValues] = useState({
        user: '',
        password: ''
    })


    const handleChange = (e) => {
        setValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const submit = (e) => {
        dispatch(isLoading(true))
        e.preventDefault()
        if (e.target.name === 'logIn') {
            authUser(formValues.user, formValues.password)
                .then((userCredential) => {
                    dispatch(setUserCredential(userCredential))
                    dispatch(isLoading(false))
                    
                    history.push('/home')
                })
            } else if (e.target.name === 'register') {
                createUser(formValues.user, formValues.password)
                .then((userCredential) => {
                    dispatch(setUserCredential(userCredential))
                    dispatch(isLoading(false))
                    history.push('/home')
                })
                .catch(()=> {
                    dispatch(isLoading(false))
                })
        }
    }
    return ( 
        <Container >
            <Stack direction='row' alignItems='center' className={s.main}>
                <Typography variant='h3'>
                    Empieza una <b>experiencia asombrosa</b> con nosotros.
                </Typography>
                <Login submit={submit} setForm={handleChange} formValues={formValues}/>
            </Stack>    
        </Container>
     );
}

export default LoginView;