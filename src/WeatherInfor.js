import React from "react";
import FormattedDate from "./FormattedData";
//import WeatherIcon from "./WeatherIcon";
//import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfor(props) {
    return(
        <div className="weatherInfor">

<h1>{props.data.city}</h1>
                <ul>
                    <li>
                    <FormattedDate  date={props.data.date} />
                    </li>
                    <li className='text-capitalize'>{props.data.description}</li>
                </ul>
                <div className='row'>
                    <div className='col-6'>
                        <img
                            src={props.data.iconUrl} alt={props.data.description} />
                        <span className='num'> {Math.round(props.data.temperature)}°C</span>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>
                                Precipitation :15%
                            </li>
                            <li>
                                Humidity:{props.data.humidity}%
                            </li>
                            <li>
                                Wind:{props.data.wind} Km/h
                            </li>
                        </ul>

                    </div>
                </div>



        </div>
    )
    
}