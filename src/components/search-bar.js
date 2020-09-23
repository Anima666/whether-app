import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.handleSearchFunction(this.state.value);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return <form onSubmit={this.handleClick}>
                    <input value={this.state.value} onChange={this.handleChange} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
    }
}

export default SearchBar;