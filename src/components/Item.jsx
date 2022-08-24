import React from 'react';
import ButtonGroup from "./Buttons/ButtonGroup";
import ButtonCart from "./Buttons/ButtonCart";

const Item = ({
    id,
    title,
    count1,
    setCount1,
    count2,
    setCount2,
    count3,
    setCount3,
    count4,
    setCount4,
    count5,
    setCount5,
    disabled
    }) => {

    const formatCount = () => {
        if (id === 0) {
            return count1 <= 0 ? 'empty' : count1;
        }
        if (id === 1) {
            return count2 <= 0 ? 'empty' : count2;
        }
        if (id === 2) {
            return count3 <= 0 ? 'empty' : count3;
        }
        if (id === 3) {
            return count4 <= 0 ? 'empty' : count4;
        }
        if (id === 4) {
            return count5 <= 0 ? 'empty' : count5;
        }
    }

    const getBadgeClassesCount = () => {
        let classes = 'badge m-2 ';
        if (id === 0) {
            classes += count1 <= 0 ? 'bg-warning' : 'bg-primary';
        }
        if (id === 1) {
            classes += count2 <= 0 ? 'bg-warning' : 'bg-primary';
        }
        if (id === 2) {
            classes += count3 <= 0 ? 'bg-warning' : 'bg-primary';
        }
        if (id === 3) {
            classes += count4 <= 0 ? 'bg-warning' : 'bg-primary';
        }
        if (id === 4) {
            classes += count5 <= 0 ? 'bg-warning' : 'bg-primary';
        }

        return classes;
    }

    return (
        <li className='list-unstyled mt-2'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-between w-50'>
                    <h5 className='text-secondary m-0 pt-1'>{title}</h5>
                    <span className={getBadgeClassesCount()}>{formatCount()}</span>
                </div>
                <div>
                    <ButtonGroup
                        id={id}
                        disabled={disabled}
                        count1={count1}
                        count2={count2}
                        count3={count3}
                        count4={count4}
                        count5={count5}
                        setCount1={setCount1}
                        setCount2={setCount2}
                        setCount3={setCount3}
                        setCount4={setCount4}
                        setCount5={setCount5}
                    />
                    <ButtonCart />
                </div>
            </div>
        </li>
    );
};

export default Item;