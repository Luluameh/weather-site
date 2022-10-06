import React from "react";

export default function FormattedDate(props) {
    let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    ' Wednesday',
    'Thursday',
    ' Firday',
     'Saturday' ]
    let day = days[props.date.getDay()];

    let hours= props.date.gethours();
    if (hours <10) {
        hours= `0${hours}`;
        
    }
    let minutes= props.date.getminutes();
    if (minutes <10) {
        minutes= `0${minutes}`;
        
    }
    return (
        <div>
            {day} {hours} : {minutes}
        </div>
    )
    
}