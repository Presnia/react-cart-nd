import React, { useContext } from 'react';
import Item from "./Item";
import { AppContext } from "../App";

const ItemBlock = () => {
    const { row } = useContext(AppContext);

    return (
        <ul className='ps-0'>
            {
                row.map(item =>
                    <Item
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        count={item.count}
                        disabled={item.disabled}
                    />
                )
            }
        </ul>
    );
};

export default ItemBlock;