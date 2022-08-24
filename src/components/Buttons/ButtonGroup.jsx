import React from 'react';

const ButtonGroup = ({
    id,
    setCount1,
    setCount2,
    setCount3,
    setCount4,
    setCount5,
    count1,
    count2,
    count3,
    count4,
    count5,
    disabled
    }) => {

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

    if (count1 === 0 && id === 0) {
        disabled = true;
    }
    if (count2 === 0 && id === 1) {
        disabled = true;
    }
    if (count3 === 0 && id === 2) {
        disabled = true;
    }
    if (count4 === 0 && id === 3) {
        disabled = true;
    }
    if (count5 === 0 && id === 4) {
        disabled = true;
    }

    return (
        <div className='btn-group me-2'>
            <button
                className='btn btn-primary'
                onClick={handleDecrement}
                style={{outline: 'transparent'}}
                disabled={disabled}
            >-</button>
            <button
                className='btn btn-primary'
                onClick={handleIncrement}
            >+</button>
        </div>
    );
};

export default ButtonGroup;