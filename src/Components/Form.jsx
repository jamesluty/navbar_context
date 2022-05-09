import MyContext from '../Context/MyContext';
import {useContext} from 'react';

const Form = () => {
    const {name, setName} = useContext(MyContext);

    return (
        <div>
            <p>Your Name: </p>
            <input onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
    )
}

export default Form