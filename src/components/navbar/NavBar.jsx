import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Link } from '@mui/material';



function NavBar() {
    const buttonStyles = {
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        marginLeft:2
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{background: 'transparent'}}>
                <Container>
                    <Toolbar>
                        <img src="/src/assets/Recurso2.png" style={{height: '40px'}} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                        <Button component={Link} href='#inicio' sx={buttonStyles}>
                            INICIO
                        </Button>
                        <Button component={Link} href='#beneficios' sx={buttonStyles}>
                            BENEFICIOS
                        </Button>
                        <Button component={Link} href='/login' color="inherit" sx={{ ...buttonStyles, boxShadow: '0px 0px 5px 2px rgba(1, 255, 47, 0.5);'}}>Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default NavBar;