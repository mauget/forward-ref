import {forwardRef} from "react";
import './App.css';

const Input = forwardRef((props, ref) => {
    return (
        <input className="Input" ref={ref} {...props} />
    );
});

Input.displayName = 'Input';
export default Input;
