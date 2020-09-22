import React from 'react'

const cardStyle = {
    "marginBottom": "10px"
}

const imgStyle = {
    padding: "30px"
}

class WhetherCard extends React.Component {

    weather = [];
    constructor(props) {
        super(props);
        this.wheather = props.consolidated_weather;
    }

    render() {
        return this.wheather.map((day) => (
            <div class="col-sm-6 col-md-4 col-lg-2" key={day.id}>
                <div class="card" style={cardStyle}>
                    <div class="card-header">{day.applicable_date}</div>
                    <img class="card-img-top" style={imgStyle} src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} />
                    <div class="card-body">
                        <h5 class="card-title">{day.weather_state_name}</h5>
                        <p class="card-text">
                            <b>{Math.round(day.min_temp)} - {Math.round(day.max_temp)} °C</b>
                        </p>
                    </div>
                </div>
            </div>
        ))
    }
}

export default WhetherCard; 