import { Container, IconButton, Typography, Stack, Box, Button, Divider, useTheme } from "@mui/material";
import NavBar from "../../components/navbar/NavBar";
import s from './landingPage.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';

function LandingPage() {
    const theme = useTheme()

    return (
        <>
            <NavBar />
            <div className={s.main}>

                <Container maxWidth='md' id='inicio'>


                        <Typography variant='h2'>
                            Bienvenido a tu <br />
                            <b>Entrevista Técnica</b> en<br />
                            <img src="/src/assets/waco.svg" style={{width: '50%', marginTop: 8}} />
                        </Typography>
                </Container>
            </div>
            <div className={s.sectionDivider}>
                <Container>
                    <Typography variant='h3' align='right' sx={{ color: '#0E0E0E'}}>
                        Trabajamos para<br />
                        <b>Convertir ideas</b> en <br />
                        <b> productos.</b>
                    </Typography>
                    <img className={s.socialImage} src="/src/assets/image1.png" />
                </Container>
            </div>

            <Container sx={{height: '80vh'}} id='beneficios'>
                <Typography variant='h4' align='center' sx={{mt: 8}}>
                    Entre los <b>beneficios</b> que <br />
                    <b>ofrecemos</b> se encuentran    
                </Typography>
            </Container>

            <Stack direction='column' sx={{height: '70vh'}}>
                <Typography variant='h4' align='center' sx={{mb: 2}}>
                    Gracias por <b>completar el ejercicio</b>
                </Typography>
                <Typography variant='h5' align='center'>
                    Te invitamos a ver más información
                </Typography>
                <Stack direction='row' justifyContent='center' sx={{mt: 4}}>
                    <IconButton component={Link} href='https://www.instagram.com/waconomads/' color='primary' size='large'>
                        <InstagramIcon fontSize='inherit'/>
                    </IconButton>
                    <Button component={Link} href='https://wacoservices.com/' variant='contained' sx={{background: theme.palette.primary.mainGradient}}>Conocer más</Button>
                </Stack>
            </Stack>
            <Divider sx={{ borderColor: 'rgb(124 123 123 / 12%)'}} />
            <Stack sx={{height: '10vh'}} justifyContent='center' direction='row'>
                <img className={s.footerImage} src="/src/assets/Recurso2.png" alt="" />
            </Stack>
        </>
    );
}

export default LandingPage;