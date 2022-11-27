import React from "react";
import PostListItem from "../post-list-item";

import './post-list.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {

    // const onDelete = () => {
    //     console.log('delete');
    // }

    const elements = posts.map((item) => {
        const {id, ...otherProps} = item;

         return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    onDelete={() => onDelete(id)} 
                    {...otherProps} 
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)}
                />
                {/* <PostListItem label={item.label} important={item.important} /> */}
            </li>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
            {/* <PostListItem label={posts[0].label} important={posts[0].important} />
            <PostListItem label={posts[1].label} important={posts[1].important} />
            <PostListItem label={posts[2].label} important={posts[2].important} /> */}
        </ul>
    )
}

export default PostList;