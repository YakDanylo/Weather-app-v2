import classes from './FewDaysForecast.module.css'

function FewDaysForecast(props)
{
    const weather = props.weather.forecastday;

    function handleDayChange(index,day)
    {
        props.selectDay(index)
        props.getDay(day.date)
    }

    return(
        <div className={classes.wrapper}>
            <ul className={classes.list} >
                {weather.map((day,index)=>
                    {
                        let dayOfWeek = new Date(day.date)
                        const arr = ["Sunday", "Monday", "Tuesday", 'Wednesday',"Thursday","Friday","Saturday"]
                       return <li className={classes.element} key={index} onClick={e=>handleDayChange(index,day)}>
                        <p className={classes.item}>{index==0?"Today":arr[dayOfWeek.getDay()]}</p>
                        <p className={classes.item}>{day.day.avgtemp_c}°C</p>
                        <img src={day.day.condition.icon} alt="" className={classes.item} />
                        <p className={classes.item}> {day.day.condition.text}</p>
                       </li>
                    })}
            </ul>
        </div>
    )
}

export default FewDaysForecast