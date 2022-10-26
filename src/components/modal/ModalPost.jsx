import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Add, Edit } from "@mui/icons-material";
import { IconButton, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({mode, handleChange, handleAdd}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {mode === 'edit'
                ? <IconButton onClick={handleOpen} sx={{color:'white'}}>
                     <Edit />
                </IconButton>
            : <Button startIcon={<Add />} onClick={handleOpen}> 
                Añadir nuevo post
            </Button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{color: 'black'}} id="modal-modal-title" variant="h6" component="h2">
                        {mode === 'edit' ? 'Edita este post' : 'Crea un nuevo post'}
                    </Typography>
                    <TextField onChange={handleChange} fullWidth margin='normal' name='title' variant='outlined' label='Titulo' />
                    <TextField onChange={handleChange} fullWidth margin='normal' name='body' variant='outlined' label='Contenido' />
                    <Button fullWidth variant='contained' onClick={() => {handleAdd(); handleClose()}}>
                        Añadir
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}