import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            avatar: '/images/avatares/avatar_1.png'
        },
        title: "Criando um app do zero utilizando React.js",
        date: 'April 7 2020',
        description: 'Adipisicing cupidatat officia enim laboris fugiat incididunt voluptate laborum eiusmod.',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image: "/images/posts/post9.jpeg"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            avatar: '/images/avatares/avatar_1.png'
        },
        title: "Comparativo entre React.js e Vue.js - Performance",
        date: 'April 1 2020',
        description: 'Enim ipsum qui nisi ex mollit sint tempor nostrud ad laborum fugiat.',
        hashtags: '#framework, #javascript, #reactjs, #vue',
        image: "/images/posts/post8.png"
    }

]

function Feed() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    )
};

export default Feed;