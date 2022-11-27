import React from "react";

import './app-header.css';

const AppHeader = ({ allPosts, likes }) => {

    // const apple = {
    //     colorqweqwrew: 'kek',
    //     size: 'lol',
    // }

    // //const color = apple.color;
    // const { colorqweqwrew: color } = apple; 

    return (
        <div className="app-header d-flex">
            <h1>Alexander Fox</h1>
            <h2>{allPosts} записей, из них понравилось {likes}</h2>
        </div>
    );
}

export default AppHeader;