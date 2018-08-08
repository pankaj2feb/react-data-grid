import React, {Component} from 'react';
import './Grid.css';

/******Below Code to include Jquery. Must be better way to do it */
import jQuery from 'jquery'
global.jQuery = jQuery
global.jquery = jQuery // jquery lowercase  was the solution
global.$ = jQuery
/******Below Code to include Jquery. Must be better way to do it */

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);

  }

  render() {
    return (<input type="text" className="search-input" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange}/>);
  }
}

export default SearchBar;
