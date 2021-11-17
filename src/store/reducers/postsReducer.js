import { postsConstant } from "../constants";

const initialState = {
    isPostLoading: false,
    isSaving: false,
    posts: [],
    postError: null,
    savePostError: null
}

export default (state = {...initialState}, action) => {
    const { type, payload } = action

    switch (type) {
        case postsConstant.GETTING_POSTS:
            return {
                ...state,
                isPostLoading: true
            }

        case postsConstant.POSTS_SUCCESS:
            return {
                ...state,
                isPostLoading: false,
                posts: payload,
                postError: null
            }

        case postsConstant.POSTS_FAILED:
            return {
                ...state,
                isPostLoading: false,
                posts: [],
                postError: payload
            }

        case postsConstant.ADDING_NEW_POST:
            return {
                ...state,
                isSaving: true,
                savePostError: null
            }
        case postsConstant.NEW_POST_SUCCESS:
            return {
                ...state,
                isSaving: false,
                savePostError: null,
                posts: [{...payload}, ...state.posts]
            }

        case postsConstant.NEW_POST_FAILED:
            return {
                ...state,
                isSaving: false,
                savePostError: payload,
            }
    
        default:
            return state
    }
    
}