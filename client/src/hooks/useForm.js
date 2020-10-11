import { useState } from 'react';


const UseForm = () => {
    const [ state, setState ] = useState();

    const handleChange = (event) => {
        event.persist()
        setState((state) => (
            { ...state, [event.target.name] : event.target.value }
        ))
    }
    // console.log(state);
    return [ state, handleChange ]
}

export default UseForm;