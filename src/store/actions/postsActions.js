import API from './API'
import { postsConstant } from '../constants'

export const getPostsAction = () => {
    return dispatch => {
        dispatch({
            type: postsConstant.GETTING_POSTS,
        })

        API.get('/posts')
            .then(response => {
                if (response.status === 200) {
                    // get latest 10 posts
                    let payload = response.data.length > 10 ? response.data.slice(0, 10) : response.data
                    dispatch({
                        type: postsConstant.POSTS_SUCCESS,
                        payload
                    })
                } else {
                    dispatch({
                        type: postsConstant.POSTS_FAILED,
                        payload: "Failed to fetch results"
                    })
                }
            },
                error => {
                    dispatch({
                        type: postsConstant.POSTS_FAILED,
                        payload: error.message
                    })
                })
    }
}

export const saveNewPostAction = (payload, toggleAddPostDialog) => {
    return dispatch => {
        dispatch({
            type: postsConstant.ADDING_NEW_POST
        })

        API.post('/posts', payload)
            .then(response => {
                // console.log("new post res", response);
                if (response.status === 201) {
                    dispatch({
                        type: postsConstant.NEW_POST_SUCCESS,
                        payload: response.data
                    })
                } else {
                    dispatch({
                        type: postsConstant.NEW_POST_FAILED,
                        payload: "Failed to add post"
                    })
                }
                toggleAddPostDialog()
                window.scrollTo({top: 0, behavior: 'smooth'})
            }, error => {
                dispatch({
                    type: postsConstant.NEW_POST_FAILED,
                    payload: error.message
                })
            })
    }
}