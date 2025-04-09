import { useState, useTransition } from 'react';
import './MyComponent2.css';

const MyComponent2 = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [text, setText] = useState("Hello Geek");
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        setIsVisible(!isVisible);
        startTransition(() => {
            setIsVisible(!isVisible);
        });
    };

    return (
        <div className='container'>

            <div className="btn-container">
                <button className='btn' onClick={handleClick}>
                    Toggle Visibility</button>
                <button className='btn' onClick={() =>
                    setText(text === "Hello Geek" ? "Goodbye Geek" : "Hello Geek")}>
                    Change Text</button>
            </div>

            <div style={isPending ?  { opacity: 0 } :  { opacity: isVisible ? 1 : 0 }}>
                <h1>{text}</h1>
            </div>

        </div>
    );
}

export default MyComponent2;