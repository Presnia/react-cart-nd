import React from 'react';
import Item from "./Item";
import { Items } from './data/Items';

const ItemBlock = ({
    mainCount,
    count1,
    setCount1,
    count2,
    setCount2,
    count3,
    setCount3,
    count4,
    setCount4,
    count5,
    setCount5
    }) => {

    return (
        <ul className='ps-0'>
            {
                Items.map(item =>
                    <Item
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        count={item.count}
                        disabled={item.disabled}
                        mainCount={mainCount}
                        count1={count1}
                        setCount1={setCount1}
                        count2={count2}
                        setCount2={setCount2}
                        count3={count3}
                        setCount3={setCount3}
                        count4={count4}
                        setCount4={setCount4}
                        count5={count5}
                        setCount5={setCount5}
                    />
                )
            }
        </ul>
    );
};

export default ItemBlock;