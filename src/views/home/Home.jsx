import { Button, Container, Stack } from "@mui/material";
import PostCard from "../../components/cards/PostCard";
import PostPagination from "../../components/pagination/PostPagination";
import s from './home.module.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { deletePostFrom, deleteUserCredential, getPostsFrom } from "../../redux/actions";
import deletePost from "../../services/deletePost";
import BasicModal from "../../components/modal/ModalPost";
import addPost from "../../services/addPost";
import { ExitToApp } from "@mui/icons-material";
import signingOut from "../../services/signOut";


function Home() {
    const dispatch = useDispatch()
    const currentPosts = useSelector( state => state.currentPosts)
    const user_uuid = useSelector(state => state.userCredential.user.uid)
    const [newPost, setNewPost] = useState({
        title: '',
        body: '',
        user_uuid
    })

    const handleChange = (e) => {
        setNewPost(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    
    useEffect(() => {
        dispatch(getPostsFrom(1))
    }, [])

    const handleSignOut = () => {
        signingOut()
        dispatch(deleteUserCredential())
    }

    const handleDelete = (id) => {
        deletePost(id).then(
            dispatch(deletePostFrom(id))
        )
    }

    const handleAdd = () => {
        addPost(newPost).then(() => console.log('succesful'))
        setNewPost({
            title: '',
            body: ''
        })
    }

    return ( 
        <div className={s.main}>
            <Container className={s.container}>
                <Stack direction='row' justifyContent='space-between' className={s.header}>
                    <BasicModal handleChange={handleChange} handleAdd={handleAdd} />
                    <Button startIcon={<ExitToApp />} onClick={handleSignOut}>Cerrar Sesión</Button>
                </Stack>

                
                <Stack direction='row' className={s.cardList}>
                <PostPagination />
                    { currentPosts.map( item => (
                        <PostCard title={item.title} deleteFunc={handleDelete} body={item.body} id={item.id} key={item.id} />
                    ))}
                <PostPagination />
                </Stack>
            </Container>
        </div>
     );
}

export default Home;