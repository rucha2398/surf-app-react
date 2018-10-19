import React from 'react';
import logo from '../surftube.png';  

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <div className="search-bar">
                <div className="navbar navbar-light bg-light">
                    <div className="navbar-brand" href="#">
                     <img src={logo} width="120" height="50" />
                    </div>
                    <input                
                    value={this.state.term}
                    onChange={this.onInputChange}  /> 
                </div>            
            </div>

        );        
    }

}

export default SearchBar;