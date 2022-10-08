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
humidity: response.data.main.humidity,

icon: response.data.weather[0].icon,
description: response.data.weather[0].description,

date: new Date (response.data.dt * 1000),

        });
        

    }
    function search() {
        const apiKey = "b9b6cfbec0afa9a98cf8533d0df776c8"

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showData);
       }
    function handler(event) {
        event.preventDefault();
        search(city)
        
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
        search()

        return "loadin din din"
    }
}

