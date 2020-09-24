import React from 'react'
import SearchBar from './search-bar';
import Spinner from './spinner';
import WhetherCard from './whether-card';

class Whether extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            whether: {},
            isCityFound: true,
            woeid: {}
        }

        this.location = props.match.params.location;
        this.handleSearchFunction = this.handleSearchFunction.bind(this);
    }

    async componentDidMount() {
        this.getWheather(this.location);
    }

    async getWheather(location) {
        await this.getWoeid(location);
        this.getWheatherByWoeid(this.state.woeid);
    }

    getWheatherByWoeid(woeid) {
        fetch(`https://www.metaweather.com/api/location/${woeid}/`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ whether: data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getWoeid(location) {
        let url = `https://www.metaweather.com/api/location/search/?query=${location}`;
        return fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.state.woeid = data[0].woeid;
                this.setState({ isCityFound: true });
            })
            .catch((error) => {
                this.setState({ isCityFound: false })
            });
    }

    handleSearchFunction(value) {
        this.getWheather(value);
    }

    render() {
        if (!this.state.whether.consolidated_weather) {
            return <Spinner></Spinner>
        }
        return <div class="p-4">

            <div class="row">
                <div class="col-sm">
                    <h1>{this.state.whether.title}</h1>
                </div>
                <div class="col-lg-2 col-sm-6 mb-2">
                    <SearchBar handleSearchFunction={this.handleSearchFunction} ></SearchBar>
                </div>
            </div>

            <div class="row" >
                <WhetherCard consolidated_weather={this.state.whether.consolidated_weather}></WhetherCard>
            </div>

            {this.state.isCityFound != true &&
                <div class="alert alert-danger" role="alert">
                    City not found
                </div>
            }
        </div>
    }
}

export default Whether; 