import React, { useState } from 'react'; 
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';

import './app.css';

const App = () => {

    const [data, setData] = useState([
        {label: 'Going to learn react', important: true, like: false, id: '1'},
        {label: 'That is so good', important: false, like: false, id: '2'},
        {label: 'I need a break...', important: false, like: false, id: '3'},
    ]);

    const [maxID, setMaxID] = useState(4);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    // const data = [
    //     {label: 'Going to learn react', important: true, id: '1'},
    //     {label: 'That is so good', important: false, id: '2'},
    //     {label: 'I need a break...', important: false, id: '3'},
    // ];

    const onDelete = (id) => {
        const index = data.findIndex(elem => elem.id === id);
        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        const newArr = [...before, ...after];
        setData(newArr);
    }

    const onAdd = (body) => {
        console.log(body);

        setMaxID(maxID + 1);

        const newItem = {
            label: body,
            important: false,
            like: false,
            id: maxID,
        }

        const newArr = [...data, newItem];
        setData(newArr);
    }

    const onToggleImportant = (id) => {
        //console.log(`Important ${id}`);

        // id 2
        /*
        const [data, setData] = useState([
            {label: 'Going to learn react', important: true, like: false, id: '1'},
            {label: 'That is so good', important: false, like: false, id: '2'},
            {label: 'I need a break...', important: false, like: false, id: '3'},
        ]);
        */
       // find index of element with id 2,
       // index = 1,
       // ---- ERROR data[1] = new element
       // setData([data[0], new element, data[2]])
       // 333 sms, change 150, data[0.....149], new element, data[151 .... 333]
       // console.log(!true);
        // const apple = {};
        // apple.color = 'red';
        // apple.size = 'medium',
        // apple.color = 'green',

        // console.log(apple.color);
       //TODO 
       //find index
       const index = data.findIndex((elem) => elem.id === id);
       //change element with found index
       const old = data[index];
       // old = {label: 'That is so good', important: false, like: false, id: '2'}
       const newItem =  { ...old, important: !old.important  }
       //separete array data to before index and after index
    //    const before = [data[0], data[1], ... , data[55]]
    //    const after = [data[56], ..., data[555]];
        const before = data.slice(0, index);
        const after = data.slice(index + 1);

       //concat before, new item, after
       setData([...before, newItem, ...after]);
    }

    const onToggleLike = (id) => {
        //console.log(`Like ${id}`);

        const index = data.findIndex((elem) => elem.id === id);
        const old = data[index];
        // {label: 'That is so good', important: false, like: false, id: '2'}
        const newItem =  { ...old, like: !old.like  }
        const before = data.slice(0, index);
        const after = data.slice(index + 1);

        setData([...before, newItem, ...after]);
    }

    const searchPost = (items, term) => {
        if (term.length === 0) { // 'ASD'.length = 3, ''.length = 0;
            return items;
        }

        return items.filter((item) => item.label.indexOf(term) > -1)
    }

    const filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else if (filter === 'all') {
            return items;
        }
    }

    const allPosts = data.length;// count of item in data array
    const likes = data.filter(item => item.like).length;// data filter whene like is true, .length

    const foundPosts = searchPost(data, term);
    const visiblePosts = filterPost(foundPosts, filter);

    return (
        <div className="app">
            <AppHeader allPosts={allPosts} likes={likes}/>
            <div className="search-panel d-flex">
                <SearchPanel onUpdateSearch={setTerm}/>
                <PostStatusFilter filter={filter} onFilterselect={setFilter}/>
            </div>
            <PostList 
                posts={visiblePosts} 
                onDelete={onDelete} 
                onToggleImportant={onToggleImportant} 
                onToggleLike={onToggleLike}
            />
            <PostAddForm onAdd={onAdd}/>
        </div>
    );
}

export default App;