import axios from 'axios'

export const SERVER = "https://waco-api.herokuapp.com/api/posts";
export const IS_LOADING = "IS_LOADING";
export const IS_REGISTERED = "IS_REGISTERED";
export const GET_POSTS_FROM = "GET_POSTS_FROM";
export const USER_CREDENTIAL = "USER_CREDENTIAL";
export const SIGN_OUT = "SIGN_OUT";
export const DELETE_POST = "DELETE_POST";


export const isLoading = (payload) => {
    return {
        type: IS_LOADING,
        payload
    }
}

export const isRegistered = (payload) => {
    return {
        type: IS_REGISTERED,
        payload
    }
}

export const getPostsFrom = (page) => {
    return async (dispatch) => {
        return axios.get(`${SERVER}?page=${page}`)
         .then(({data}) => dispatch({
            type: GET_POSTS_FROM,
            payload: data
         }))
    }
}

export const setUserCredential = (payload) => {
    return {
        type: USER_CREDENTIAL,
        payload
    }
}

export const deleteUserCredential = () => {
    return {
        type: SIGN_OUT
    }
}

export const deletePostFrom = (payload) => {
    return {
        type: DELETE_POST,
        payload
    }
}