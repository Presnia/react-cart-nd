import ItemBlock from "./components/ItemBlock";
import Navbar from "./components/Navbar";
import { createContext, useEffect, useState } from "react";
import ButtonRefresh from "./components/Buttons/ButtonRefresh";
import { Items } from "./components/data/Items";
import ButtonClear from "./components/Buttons/ButtonClear";

export const AppContext = createContext(null);

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [mainCount, setMainCount] = useState(0);
    const [row, setRow] = useState(Items);

    const clearCounts = () => {
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setCount4(0);
        setCount5(0);
    }

    useEffect(() => {
        setMainCount(() => count1 + count2 + count3 + count4 + count5);
    }, [count1, count2, count3, count4, count5]);

    return (
        <div className='container w-50'>
            <AppContext.Provider
                value={{
                    mainCount,
                    setMainCount,
                    row,
                    setRow,
                    clearCounts,
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
                }}
            >
                <Navbar />
                <ItemBlock />
                <div className='d-flex flex-row-reverse'>
                    <ButtonRefresh />
                    <ButtonClear />
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
