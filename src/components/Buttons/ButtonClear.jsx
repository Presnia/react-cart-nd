import React, { useContext } from 'react';
import { AppContext } from "../../App";

const ButtonClear = () => {
    const { clearCounts } = useContext(AppContext);

    return (
        <button className='btn btn-primary p-2' onClick={clearCounts}>
            Clear
        </button>
    );
};

export default ButtonClear;