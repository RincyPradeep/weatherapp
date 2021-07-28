import React,{useState,useEffect} from 'react'

const WeatherCard = ({searchResult}) => {
    const {
        temp,
        weathermood,
        name,
        speed,
        country,
        humidity,
        pressure,
        sunset
      } = searchResult;

    const [weatherState,setWeatherState] = useState("")
    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherState("wi-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear" : 
                    setWeatherState("wi-day-sunny");
                    break;
                case "Rain" : 
                    setWeatherState("wi-rain");
                    break;
                case "Mist" : 
                    setWeatherState("wi-dust");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    },[weathermood])

    //   converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

    return (
        <div>
            <div className="weather-icon">
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className="weather-info">
          <div className="temperature">{temp}&deg;</div>
          <div className="description">
            <div className="condition">{weathermood}</div>
            <div className="place">{name} , {country}</div>
          </div>
          <div className="date">{new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}, {new Date().toLocaleTimeString()}</div>
        </div>

        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p><i className="wi wi-sunset"></i></p>
            <div className="right">
              <p>{timeStr} PM</p>
              <p>Sunset</p>
            </div>           
          </div>

         <div className="two-sided-section">
            <p><i className="wi wi-humidity"></i></p>
            <div className="right">
              <p>{humidity}</p>
              <p>Humidity</p>
            </div>           
          </div>

          <div className="two-sided-section">
            <p><i className="wi wi-rain"></i></p>
            <div className="right">
              <p>{pressure}</p>
              <p>Pressure</p>
            </div>           
          </div>

          <div className="two-sided-section">
            <p><i className="wi wi-strong-wind"></i></p>
            <div className="right">
              <p>{speed}</p>
              <p>Speed</p>
            </div>           
          </div>
        </div>
        </div>
    )
}

export default WeatherCard
