import classes from './Form.module.css'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getData } from '../store/index';
function Form()
{
    const dispatch = useDispatch()
    const [city,setCity] = useState('')
    function getCity(e)
    {
        e.preventDefault();
        dispatch(getData(city))
    }
    return (
        <form action="" className={classes.form}>
            <div className={classes.wrapper}>
                <label htmlFor="city" className={classes.element}>Enter a city</label>
                <input type="text" className={classes.element+" "+classes.input} onChange={e=>setCity(e.target.value)} />
                <button onClick ={getCity} className={classes.element+" "+classes.button} >See the weather</button>
            </div>
            
        </form>
    )
}

export default Form;