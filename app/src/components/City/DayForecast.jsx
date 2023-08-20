import classes from './DayForecast.module.css'
import { UseSelector, useSelector } from 'react-redux';
function DayForecast(props)
{
    const todayForecast = props.forecast.forecastday[props.showDay].hour;
    const week = ["Sunday", "Monday", "Tuesday", 'Wednesday',"Thursday","Friday","Saturday"]
    return (
        <div className={classes.wrapperForecast}>
            <h1>Forecast for: {props.showDay==0?"Today": week[props.showDay]}</h1>
            <ul className={classes.hours}>
                {todayForecast.map(hour=>
                    { 
                        if(+hour.time.slice(11,13)%4==0)
                        {
                            return <li className={classes.hourElement} key={hour.time.slice(11,13)}>
                                <h3>{hour.time.slice(11,16)}</h3>
                                <img src={hour.condition.icon} alt="" />
                                <p>{hour.temp_c} °C</p>
                                </li>
                        }
                        
                    })}
            </ul>
        </div>
    )
}

export default DayForecast;