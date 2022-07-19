import React,{ useState, useRef } from 'react';


const Select = (props) => {
    // default size
    const [size, setSize] = useState(props.size); 
    const currSize = useRef(size);

    React.useEffect(() => {
        setSize(props.size)
    },[props.size])

    const handleChange = (e)=>{
        currSize.current = size;
        setSize(e.target.value);
        props.handleChange(currSize.current, e.target.value, props.image);
    }
    
    return (
        <>
            <select name="" id="" onChange={handleChange}>
                <option value={props.size} >{size}</option>
                {props.childSize.map((m, index) => {
                    if (m.image_color === props.image) {
                        return (<option key={index + m.image_color} value={m.size}>{m.size}</option>)
                    }
                })}
            </select>
        </>
    )
}

export default Select;