import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom"
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
      }
     
      handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        
      };
    render() {
        return (
            <div>
                   <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <Link to='/review'><span>{suggestion.description}</span></Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
            </div>
        )
    }
}
