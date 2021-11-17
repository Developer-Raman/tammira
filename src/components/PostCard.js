import React from 'react'
import { ListItem, Divider, ListItemText } from '@mui/material';

const PostCard = ({ post }) => (
    <React.Fragment>
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={post.title}
                secondary={post.body}
            />
        </ListItem>
        <Divider component="li" />
    </React.Fragment>
)

export default PostCard