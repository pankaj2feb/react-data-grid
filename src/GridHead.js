import React, {Component} from 'react';
import './Grid.css';

/******Below Code to include Jquery. Must be better way to do it */
import jQuery from 'jquery'
global.jQuery = jQuery
global.jquery = jQuery // jquery lowercase  was the solution
global.$ = jQuery
/******Below Code to include Jquery. Must be better way to do it */

class GridHead extends Component {
  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.displayAllChild = this.displayAllChild.bind(this);

    this.state = {
      childOpenStatus: false
    }

  }

  handleSort(e) {
    this.props.onHandleSort(e);

  }

  handleSelectAll(e) {
    this.props.onHandleSelectAll(e.target.checked);
  }

  displayAllChild(event) {
    this.setState({
      childOpenStatus: !this.state.childOpenStatus
    }, () => {
      this.props.onOpenAllChild(this.state.childOpenStatus, null);
    });
  }

  render() {
    const product = this.props.product;
    const columns = [];
    let headers = [];

    let childDisplayClass = this.state.childOpenStatus
      ? "childOpen"
      : "childClose";

    columns.push(
      <th key={'checkHead'}><input type="checkbox" onClick={this.handleSelectAll}/></th>
    );
    columns.push(
      <th key={'groupHead'} onClick={this.displayAllChild} className={childDisplayClass}></th>
    );
    headers = this.props.headers;
    for (var i = 0; i < headers.length; i++) {
      var sortIcon = null;

      if (headers[i].id === this.props.sortColumn) {
        if (this.props.sortOrder == true)
          sortIcon = "△";
        else if (this.props.sortOrder == false)
          sortIcon = "▽";
        }

      columns.push(
        <th key={i} onClick={this.handleSort} colid={headers[i].id} className={headers[i].id}>{headers[i].title}
          <span style={{
            position: 'relative'
          }}>{sortIcon}</span>
        </th>
      );

    };

    return (
      <tr>
        {columns}
      </tr>
    );
  }
}

export default GridHead;
