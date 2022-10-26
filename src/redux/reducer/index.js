import {
    DELETE_POST,
    GET_POSTS_FROM,
    IS_LOADING, IS_REGISTERED, SIGN_OUT, USER_CREDENTIAL
} from '../actions'

const initialState = {
    isLoading: false,
    isRegistered: false,
    currentPosts: [],
    currentPage: 1,
    userCredential: {},
    auth: false
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            
            return {
                ...state,
                isLoading: action.payload
            }
        
        case IS_REGISTERED:

            return {
                ...state,
                isRegistered: action.payload
            }

        case GET_POSTS_FROM:

            return {
                ...state,
                currentPosts: action.payload.data,
                currentPage: action.payload.meta.current_page
            }
    
        case USER_CREDENTIAL:

            return {
                ...state,
                userCredential: action.payload,
                auth: true
            }

        case SIGN_OUT:
            
            return {
                ...state,
                userCredential: {},
                auth: false
            }
        
        case DELETE_POST:

        return {
            ...state,
            currentPosts: state.currentPosts.filter( item => item.id != action.payload)
        }
        default:
            return state;
    }
}

export default main;