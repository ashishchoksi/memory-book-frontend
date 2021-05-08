import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Typography, Paper, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ curId, setCurId }) => {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', selectedFile: '', tags: ''
    });

    // access global state
    const post = useSelector((state) => curId ? state.posts.find((p) => p._id === curId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);


    const classes = useStyles();
    const dispatch = useDispatch();

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (curId) {
            dispatch(updatePost(curId, postData));
        } else {
            dispatch(createPost(postData));
        }

        clear();
    };

    const clear = () => {
        setCurId(null);
        setPostData({
            creator: '', title: '', message: '', selectedFile: '', tags: ''
        });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={HandleSubmit}>
                <Typography variant="h6"> {curId ? "Updating" : "Creating"} Memeries </Typography>

                {/* it is functional based component so changing single value replace whole state */}
                <TextField value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    name="creator" variant="outlined" label="Creator" fullWidth />
                <hr />
                <TextField value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    name="title" variant="outlined" label="title" fullWidth />
                <hr />
                <TextField value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    name="message" variant="outlined" label="message" fullWidth />
                <hr />
                <TextField value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    name="tags" variant="outlined" label="tags" fullWidth />
                <hr />
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> {curId ? "Update" : "Submit"}</Button>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
};

export default Form;