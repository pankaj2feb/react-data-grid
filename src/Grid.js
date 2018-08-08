import React, {Component} from 'react';
import logo from './logo.svg';
import './Grid.css';
import GridTable from './GridTable';
import SearchBar from './SearchBar';

/******Below Code to include Jquery. Must be better way to do it */
import jQuery from 'jquery'
global.jQuery = jQuery
global.jquery = jQuery // jquery lowercase  was the solution
global.$ = jQuery
/******Below Code to include Jquery. Must be better way to do it */

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      rowData: this.props.rowData,
      sortOrder: 0,
      sortColumn: '',
      sortOrderLocal: 0
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({rowData: nextProps.rowData});
  }

  handleFilterTextChange(filterText) {
    this.setState({filterText: filterText});
  }

  handleInStockChange(inStockOnly) {
    this.setState({inStockOnly: inStockOnly});
  }

  handleSort(name) {

    this.state.sortOrder = !this.state.sortOrder;

    let sortOrderLocal = this.state.sortOrder;

    this.setState({sortColumn: name});
    this.setState({sortOrderLocal: sortOrderLocal});

    var ascSort = function(a, b) {
      var nameA = a[name].toUpperCase(); // ignore upper and lowercase
      var nameB = b[name].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    };

    var dscSort = function(a, b, name) {
      var nameA = a[name].toUpperCase(); // ignore upper and lowercase
      var nameB = b[name].toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    };

    let rowGridSort = this.state.rowData.sort(sortOrderLocal
      ? function(a, b) {
        var nameA = a[name].toUpperCase(); // ignore upper and lowercase
        var nameB = b[name].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }
      : function(a, b) {
        var nameA = a[name].toUpperCase(); // ignore upper and lowercase
        var nameB = b[name].toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    this.setState({rowData: rowGridSort});

    //this.setState({rowData:this.props.rowData});
  }

  render() {
    return (
      <div className="App">
        

        <div className="container">
          <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange}/>
          <GridTable rowData={this.state.rowData} headers={this.props.headers} onHandleSort={this.handleSort} filterText={this.state.filterText} sortOrder={this.state.sortOrderLocal} sortColumn={this.state.sortColumn} inStockOnly={this.state.inStockOnly}/>
        </div>

      </div>
    );
  }

}

export default Grid;
