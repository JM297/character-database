import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import CharacterCard from './CharacterCard/CharacterCard';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const Characters = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post, idx) => (
                    <Grid key={idx} item xs={12} sm={6}>
                        <CharacterCard post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Characters;