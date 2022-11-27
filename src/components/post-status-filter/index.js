import React from "react";

import './post-status-filter.css';

const PostStatusFilter = ({filter, onFilterselect}) => {

    const buttonsInfo = [
        {name: 'all', label: 'Все'},
        {name:'like', label: 'Понравилось'}
    ];

    const buttons = buttonsInfo.map(({name, label}) => {
        const isActive = filter === name;
        const activityClass = isActive ? 'btn-info' : 'btn-outline-secondary';
        
        return (
            <button 
                key={name} 
                className={`btn ${activityClass}`}
                onClick={() => onFilterselect(name)}
            >
                {label}
            </button>
        )
    });

    // const letters = ['A', 'B', 'C', 'E'];

    // const smallLetters = letters.map((a) => {
    //     return a.toLowerCase();
    // }) ///toLowerCase();
    // console.log(smallLetters);

    return (
        <div className="btn-group">
            {buttons}
            {/* <button type="button" className="btn btn-info">Все</button>
            <button type="button" className="btn">Понравилось</button> */}
        </div>
    );
}

export default PostStatusFilter;