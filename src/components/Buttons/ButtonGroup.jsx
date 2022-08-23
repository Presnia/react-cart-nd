import React from 'react';

const ButtonGroup = ({ id, setCount1, setCount2, setCount3, setCount4, setCount5 }) => {
    const handleIncrement = () => {
        if (id === 0) {
            setCount1(prevState => prevState + 1);
        }
        if (id === 1) {
            setCount2(prevState => prevState + 1);
        }
        if (id === 2) {
            setCount3(prevState => prevState + 1);
        }
        if (id === 3) {
            setCount4(prevState => prevState + 1);
        }
        if (id === 4) {
            setCount5(prevState => prevState + 1);
        }

    }

    const handleDecrement = () => {
        if (id === 0) {
            setCount1(prevState => prevState - 1);
        }
        if (id === 1) {
            setCount2(prevState => prevState - 1);
        }
        if (id === 2) {
            setCount3(prevState => prevState - 1);
        }
        if (id === 3) {
            setCount4(prevState => prevState - 1);
        }
        if (id === 4) {
            setCount5(prevState => prevState - 1);
        }
    }

    return (
        <div className='btn-group me-2'>
            <button
                className='btn btn-primary'
                onClick={handleDecrement}
                style={{outline: 'transparent'}}
            >-</button>
            <button
                className='btn btn-primary'
                onClick={handleIncrement}
            >+</button>
        </div>
    );
};

export default ButtonGroup;