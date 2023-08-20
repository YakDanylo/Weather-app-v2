import classes from './CurrentWeather.module.css'
import sun from '../../media/sun.png'
function CurrentWeather(props)
{
    const city = props.city
    return(
        <div className={classes.wrapperCurrent}>
            <div>
                <h1>{city.location.name}</h1>
                <div className={classes.mainConditions}>
                    <h2 className={classes.element}>Current Temperature: {city.current.temp_c} °C</h2>
                    <h2 className={classes.element}>{city.current.condition.text}</h2>
                    <img src={city.current.condition.icon} alt="" className={classes.element} height='80px'/>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather