import s from './postPagination.module.css'
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import { getPostsFrom } from "../../redux/actions";

function PostPagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage)



    const handleChangePag = (e, selectedPage) => {
        dispatch(getPostsFrom(selectedPage))
    }
    
    return ( 
        <div className={s.container}>
            <Pagination className={s.pagination} variant="outlined" count={10} page={currentPage} onChange={handleChangePag}/>
        </div>
     );
}

export default PostPagination;