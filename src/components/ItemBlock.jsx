import React, { useContext } from 'react';
import Item from "./Item";
import { AppContext } from "../App";

const ItemBlock = () => {
    const { row } = useContext(AppContext);

    return (
        <ul className='ps-0'>
            {
                row.map(item =>
                    <Item key={item.id} {...item} />
                )
            }
        </ul>
    );
};

export default ItemBlock;