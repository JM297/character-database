import React from 'react';
import { Card, CardActions, CardMedia, Button, Typography, } from '@material-ui/core';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import MorHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../../../redux/actions/posts';

const CharacterCard = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.referencePicture} title={post.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">
                    <Link to={`/character/${post._id}`} onClick={() => { setCurrentId(post._id) }}>
                        {post.name}
                    </Link>
                </Typography>
                <Typography variant="body2">{post.age}</Typography>
            </div>

            <div className={classes.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={() => { setCurrentId(post._id) }}>
                    <MorHorizIcon fontSize="default" />
                </Button>
            </div>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default CharacterCard;