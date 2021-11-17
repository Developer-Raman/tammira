import React, { useEffect, useState } from 'react'
import { Container, Box, Typography, CircularProgress, List, Button, Dialog, DialogTitle } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'

import PostCard from '../../components/PostCard'
import AddPostForm from '../../components/AddPostForm'
import { getPostsAction, saveNewPostAction } from '../../store/actions'

const validationSchema = yup.object({
    title: yup
        .string("Enter post title")
        .required("This field is required")
        .max(100, "Max 100 chars"),
    body: yup
        .string("Enter post body")
        .required("This field is required")
});

const initialValues = {
    title: '',
    body: '',
    userId: '1'
}


const Index = () => {
    const dispatch = useDispatch()
    const { isPostLoading, isSaving, posts } = useSelector(state => state.postsReducer)
    const [openAddPostDialog, setOpenAddPostDialog] = useState(false)

    useEffect(() => {
        dispatch(getPostsAction())
    }, [])

    const toggleAddPostDialog = () => setOpenAddPostDialog(!openAddPostDialog)

    const handleSubmit = (values) => {
        dispatch(saveNewPostAction(values, toggleAddPostDialog))
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Dummy Posts
                </Typography>
            </Box>

            {isPostLoading &&
                <Box justifyContent="center" display="flex">
                    <CircularProgress />
                </Box>
            }

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}>
                {posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))}
            </List>

            <Box sx={{ my: 4 }}>
                <Button variant="contained" fullWidth onClick={toggleAddPostDialog}>Add Post</Button>
            </Box>

            <Dialog open={openAddPostDialog} onClose={toggleAddPostDialog}>
                <DialogTitle>Add Post</DialogTitle>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(props) => <AddPostForm {...props} onClose={toggleAddPostDialog} isSubmitting={isSaving} />}
                </Formik>
            </Dialog>

        </Container>
    )
}

export default Index