import classes from './CityCard.module.css'
import CurrentWeather from './CurrentWeather'
import DayForecast from './DayForecast'
import FewDaysForecast from './FewDaysForecast'
import { useDispatch, useSelector } from 'react-redux';
import {cityActions} from '../store/index'
import {getData} from '../store/index'
import { Fragment } from 'react';
import { useState } from 'react';
function CityCard()
{
    const dispatch = useDispatch()
    const cityInfo = useSelector(state=>state.city)
    const showCity = useSelector(state=>state.showCity)
    const isLoading = useSelector(state=>state.loading)
    const [dayChoosement, setDayChoosement] = useState(0)
    const [dayOfWeek,setDayOfWeek] = useState('')

    function changeDay(e)
    {
        setDayChoosement(e);
    }

    function changeCity(e)
    {
        dispatch(getData(e.target.value))
        e.target.value=''
    }

    function getDayOfWeek(day)
    {
        const temp = new Date(day)
        setDayOfWeek(temp.getDay())
    }
    return(
        <div className={classes.wrapper} >
            <input style={{
                padding:'5px',
                paddingTop:'8px',
                width:'1000px',
                marginLeft:'11px',
                backgroundColor:'#E0F2F1',
                border:'none',
                borderRadius:'8px'
            }} type='text' placeholder='Enter city' onBlur={changeCity}/>

            <div className={classes.card}>
                <div className={classes.dayInfo}>
                    <CurrentWeather city={cityInfo}/>
                    <DayForecast forecast={cityInfo.forecast} showDay={dayChoosement} dayOfWeek={dayOfWeek} />
                </div>
                <FewDaysForecast weather={cityInfo.forecast} selectDay={changeDay} getDay={getDayOfWeek}/>
            </div>
        </div>
    )
}

export default CityCard;