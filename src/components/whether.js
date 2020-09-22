import React from 'react'
import WhetherCard from './whether-card';

const mainStyle = {
    padding: "30px"
};

class Whether extends React.Component {

    state = {
        whether: {}
    }
    location = "Minsk";

    constructor(props) {
        super(props);
        this.location = props.match.params.location;
    }

    componentDidMount() {
        fetch(`https://localhost:44387/weatherforecast?location=${this.location}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ whether: data })
            })
            .catch(console.log)
    }

    render() {
        if (!this.state.whether.consolidated_weather) {
            return <span>Loading...</span>;
        }
        return <div style={mainStyle}>
            <h1>{this.state.whether.title}</h1>
            <div class="row" >
                <WhetherCard consolidated_weather={this.state.whether.consolidated_weather}></WhetherCard>
            </div>
        </div>
    }
}

export default Whether; 