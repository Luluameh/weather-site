import React, { useState } from 'react';
import WeatherInfor from './WeatherInfor';

import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';






export default function Weather(props) {
   const [city, setCity] = useState(props.defaultCity);

    const [weatherData, setWeatherData] = useState({load: false});
    function showData(response) {
        console.log(response.data);
        setWeatherData({
            load: true,
temperature: response.data.main.temp,
wind:response.data.wind.speed,
city: response.data.name,
Humidity: response.data.main.humidity,
iconUrl:' https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
description: response.data.weather[0].description,

date: new Date (response.data.dt * 1000),

        });
        

    }
    function handler(event) {
        event.preventDefault();
        
    }
function whenTyped(event) {
    setCity(event.target.value)
}

    if (weatherData.load) {
       return (
            <div className='weather'>
                <form onSubmit={handler}>

                    <div className='row'>
                        <div className='col-9'>
                            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"
                            onChange={whenTyped} />
                         </div>
                        <div className='col-3'>
                            <input type="submit" value="Search" className='btn btn-primary w-100' />
                        </div>
                    </div>
                </form>
                <WeatherInfor data={weatherData} />

            </div>
        );
    } else {
        const apiKey = "b9b6cfbec0afa9a98cf8533d0df776c8"
        
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=metric`;
        axios.get(apiUrl).then(showData)

        return "loadin din din"
    }
}

