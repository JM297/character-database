import React from 'react';
import { Button, Container, AppBar, Typography, Grow } from '@material-ui/core';
import useStyles from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { getPosts } from '../../redux/actions/posts';

const CharacterPage = (props) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    const returnPost = p => {
        return p._id === props.match.params.id;
    }

    const p = posts.find(returnPost);

    return (
        <Container Container maxidth="lg" align="center">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">{p.name}</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <img src={p.referencePicture} alt="Character Reference" width="250" />
                    <Typography style={{ color: "white" }} variant="body1" align="center">Age: {p.age}</Typography><br />
                    <Button color="primary" size="small" component={RouterLink} to={"/"}>Return</Button>
                </Container>
            </Grow>
        </Container>
    );
}

export default CharacterPage;