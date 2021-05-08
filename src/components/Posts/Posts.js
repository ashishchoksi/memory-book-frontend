import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

// select data from global state / store
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurId }) => {

    // useSelector have whole global redux state access
    // we need state of posts.
    // state.posts because reduces we used keyword posts

    const posts = useSelector((state) => {
        return state.posts;
    });

    // console.log(posts); // have all data

    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container alignitem="stretch" spacing={3} >
                {
                    posts.map((post) => {
                        return (
                            <Grid key={post._id} item xs={12} sm={6}>
                                <Post post={post} setCurId={setCurId} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    );
};

export default Posts;
