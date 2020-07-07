import React, {Component} from 'react';
import './search-pannel.css'

export default class SearchPannel extends Component{

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term= e.target.value;
        this.setState({term});
        this.props.onSearchChange(term)
        }

    render() {
        return <input className="search-panel"
         placeholder="Search"
         value={this.state.term}
        onChange={this.onSearchChange} />
    }
}
