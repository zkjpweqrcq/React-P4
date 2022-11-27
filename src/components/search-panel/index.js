import React, { useState } from "react";

import './search-panel.css';

const SearchPanel = ({onUpdateSearch}) => {
    
    const [term, setTerm] = useState('');

    const onValueChange = (e) => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearch(term);
    } 

    return (
        <input value={term} onChange={onValueChange} type="text" placeholder="Поиск по записям" className="form-control search-input"/>
    );
}

export default SearchPanel;