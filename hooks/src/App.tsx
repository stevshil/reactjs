import React, { useRef, useEffect } from 'react';
export default function UseRefComponent() {
const inputfield = useRef(null);
const textvalue = useRef('Initial value...');
const handleBtnClick = () => {
inputfield.current.value = "Some other content for the textarea ...";
console.log(inputfield.current)
};
useEffect(
() => {
let element = inputfield.current;
element.value = textvalue.current;
element.style.color = 'red';
element.style.width = '230px';
}
)
return (
<div className={'App'}>
<h4>useRef Example</h4>
<div className={'indent'}>
<input ref={inputfield} type={'text'} />
<br />
<button onClick={handleBtnClick}>Replace text</button>
</div>
</div>
);
};