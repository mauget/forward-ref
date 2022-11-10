import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import './App.css';
import Input from "./Input";

function App() {
    const [firstValue, setFirstValue] = useState('Last');
    const [lastValue, setLastValue] = useState('First');

    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const [focusIndex, setFocusIndex] = useState(0);
    const elementRefs = useMemo(()=>([firstRef, lastRef]), [firstRef, lastRef]);

    const onInputChangeFirst = (e) => {
        e.preventDefault();
        setFirstValue(e.target.value);
    };

    const onInputChangeLast = (e) => {
        e.preventDefault();
        setLastValue(e.target.value);
    };

    useEffect(()=>{
        elementRefs[focusIndex].current.focus();
    }, [focusIndex, elementRefs]);

    const toggleFocus = useCallback(() => {
        setFocusIndex((focusIndex+1) & 1);
    }, [focusIndex]);

    return (
    <div className="App">
      <header className="App-header">
          <Input value={firstValue} onChange={onInputChangeFirst} ref={firstRef} />
          <Input value={lastValue} onChange={onInputChangeLast} ref={lastRef} />
          <button onClick={toggleFocus}>Toggle Focus</button>
      </header>
    </div>
  );
}

export default App;
