import ItemBlock from "./components/ItemBlock";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import ButtonRefresh from "./components/Buttons/ButtonRefresh";

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [mainCount, setMainCount] = useState(0);

    useEffect(() => {
        setMainCount(count1 + count2 + count3 + count4 + count5);
    }, [count1, count2, count3, count4, count5]);

    return (
        <div className='container w-50'>
            <Navbar mainCount={mainCount} />
            <ItemBlock
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
            <ButtonRefresh
                setCount1={setCount1}
                setCount2={setCount2}
                setCount3={setCount3}
                setCount4={setCount4}
                setCount5={setCount5}
            />
        </div>
    );
}

export default App;
