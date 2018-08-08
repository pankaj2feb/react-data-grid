import React, {Component} from 'react';
import './Grid.css';

/******Below Code to include Jquery. Must be better way to do it */
import jQuery from 'jquery'
global.jQuery = jQuery
global.jquery = jQuery // jquery lowercase  was the solution
global.$ = jQuery
/******Below Code to include Jquery. Must be better way to do it */

class GridRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isSelected:true
      isCheckboxSelected: this.props.isSelectAll,
      childOpenStatus: false

    }
    this.selectRow = this.selectRow.bind(this);
    this.preSelect = this.preSelect.bind(this);
    this.checkUpdate = this.checkUpdate.bind(this);
    this.displayChild = this.displayChild.bind(this);
    this.isSelected = false;
    //this.isCheckboxSelected = false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isSelectAll != nextProps.isSelectAll) {
      this.setState({isCheckboxSelected: nextProps.isSelectAll});
    }
  }

  selectRow(e) {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      var prevselected = this.props.prevselect;
      jQuery(e.target).parents('tbody').find('tr').eq(prevselected).removeClass('selected');
      e.currentTarget.classList.add('selected');
      this.preSelect(this.props.id);
      this.isSelected = !this.isSelected;
    } else {
      e.currentTarget.classList.remove('selected');
    }
  }

  preSelect(rowid) {
    this.props.onSelect(rowid);
  }

  checkUpdate(event) {
    this.setState({isCheckboxSelected: event.target.checked});
    console.log(event.target.checked);
  }

  displayChild(event, symbol) {
    this.setState({
      childOpenStatus: !this.state.childOpenStatus
    }, () => {
      this.props.onOpenChild(this.state.childOpenStatus, this.props.id);
    });
  }

  render() {

    const product = this.props.product;
    const rows = [];

    let childDisplayClass = this.state.childOpenStatus
      ? "childOpen"
      : "childClose";

    rows.push(
      <td key={'check'}><input type="checkbox" checked={this.state.isCheckboxSelected} onClick={this.checkUpdate}/></td>
    );
    (this.props.isParent)
      ? rows.push(
        <td key={'group'} className={childDisplayClass} onClick={this.displayChild}></td>
      )
      : rows.push(
        <td key={'group'}></td>
      );
    let headers = this.props.headers;
    for (var j = 0; j < headers.length; j++) {
      if (this.props.isChild) {
        for (var k = 0; k < product.length; k++) {
          rows.push(
            <td className={headers[j].id} key={j}>{product[k][headers[j].id]}</td>
          );
        }
      } else {
        rows.push(
          <td className={headers[j].id} key={j}>{product[headers[j].id]}</td>
        );
      }

    }
    let rowclass = this.props.id % 2
      ? "oddrow"
      : "evenrow";
    let visibleclass = this.props.isChild
      ? "hide"
      : "show";
    let visiblechildclass = this.props.isChild
      ? this.props.isChild && this.props.showChild && (this.props.id == 'c' + this.props.parentId || this.props.parentId == null)
        ? "show"
        : "hide"
      : '';
    rowclass = rowclass + ' ' + visiblechildclass;

    return (
      <tr onClick={this.selectRow} className={rowclass}>
        {rows}
      </tr>
    );
  }
}

export default GridRow;
