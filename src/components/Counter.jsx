import React, { useState } from 'react';
import ButtonGroup from "../Buttons/ButtonGroup";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

    const formatCount = () => {
        return count === 0 ? 'empty' : count;
    }

    const getBadgeClassesCount = () => {
        let classes = 'badge m-2 ';
        classes += count === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    }

    const handleTagChange = (id) => {
        setTags(prevState => prevState.filter(tag => tag !== id));
    }

    const renderTags = () => {
        return tags.length !== 0
            ? tags.map(tag =>
            <li
                key={tag}
                className='btn btn-primary m-2'
                onClick={() => handleTagChange(tag)}
            >
                {tag}
            </li>
        ) : 'No Tags'
    }

    // if (tags.length !== 0) {
    //     return <ul>{renderTags()}</ul>
    // }

    return (
        <div className='container'>
            <ul>{renderTags()}</ul>
            <ButtonGroup setCount={setCount} />
            <span className={getBadgeClassesCount()}>{formatCount()}</span>
        </div>
    );
};

export default Counter;