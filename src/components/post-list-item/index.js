import React, { useState } from "react";

import './post-list-item.css';

const PostListItem = ({ 
    label, 
    important, 
    like, 
    onDelete, 
    onToggleImportant, 
    onToggleLike 
}) => {

    // const [like, setLike] = useState(false);
    // const [important, setImportant] = useState(false);
    //const label = props.label;
    //const { label } = props;

    let className = "app-list-item d-flex justify-content-between";
    if (important) {
        className += " important";
    }
    if (like) {
        className += " like";
    }

    // const onDelete = () => {
    //     console.log('delete');
    // }

    return (
        <div className={className}>
            <span onClick={onToggleLike} className="app-list-item-label">
                {/* {props.label} */}
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={onToggleImportant} className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button onClick={onDelete} className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    );
}

export default PostListItem;