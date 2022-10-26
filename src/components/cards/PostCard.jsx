import { Delete, FavoriteBorderOutlined, FavoriteRounded } from "@mui/icons-material";
import { IconButton, Card, CardActions, CardContent, Typography } from "@mui/material";
import s from './postCard.module.css'
import { useState } from 'react';
import BasicModal from "../modal/ModalPost";

function PostCard({title, body, deleteFunc, id}) {
    const [isFavorite, setFavorite] = useState(() => false)

    const onDelete = () => {
        deleteFunc(id)
    }

    return ( 
        <Card className={s.card}>
            <CardContent>
                <Typography className={s.text} variant='h6'>
                    {title}
                </Typography>
                <Typography className={s.text} variant='body1'>
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={() => setFavorite(prev => !prev)}>
                    {isFavorite ? <FavoriteRounded className={s.text} /> : <FavoriteBorderOutlined className={s.text} />}
                </IconButton>
                <IconButton onClick={onDelete}>
                    <Delete className={s.text}  />
                </IconButton>
                <BasicModal mode='edit'/>
            </CardActions>
        </Card>
     );
}

export default PostCard;