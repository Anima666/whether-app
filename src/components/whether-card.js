import React from 'react'
import './wheather-card.css'

class WhetherCard extends React.Component {
    daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    constructor(props) {
        super(props);
        this.state = {
            weather: {
                consolidated_weather: this.props.consolidated_weather
            }
        };
    }

    getDayName(data) {
        return this.daysOfWeek[new Date(data).getDay()];
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ weather: nextProps });
    }

    isToday(otherDate) {
        var today = new Date();
        otherDate = new Date(otherDate);
        return (today.toDateString() == otherDate.toDateString());
    }

    todayHandle(date) {
        return this.isToday(date) ? 'Today' : this.getDayName(date);
    }

    render() {
        if (!this.state.weather.consolidated_weather) {
            return <h1>loading</h1>
        }

        return this.state.weather.consolidated_weather.map((day) => (
            <div class="col-sm-6 col-md-4 col-lg-2" key={day.id}>
                <div class="card">
                    <div class="card-header">{this.todayHandle(day.applicable_date)}, {day.applicable_date} </div>
                    <img class="card-img-top" src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} />
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