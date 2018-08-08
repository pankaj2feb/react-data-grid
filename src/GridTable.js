import React, {Component} from 'react';
import './Grid.css';
import GridRow from './GridRow';
import GridHead from './GridHead';
/******Below Code to include Jquery. Must be better way to do it */
import jQuery from 'jquery'
global.jQuery = jQuery
global.jquery = jQuery // jquery lowercase  was the solution
global.$ = jQuery
/******Below Code to include Jquery. Must be better way to do it */

class GridTable extends Component {

  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
    this.preSelect = this.preSelect.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleChild = this.handleChild.bind(this);
    this.state = {
      selectedRow: null,
      isSelectAll: false,
      openChild: false,
      parentId: null
    }

  }

  handleSort(e) {
    this.props.onHandleSort(jQuery(e.target).attr('colid'));
  }

  preSelect(rowid) {
    //console.log(e);
    this.setState({selectedRow: rowid})
    //e.classList.remove('selected')
  }

  handleSelectAll(selectAllState) {
    this.setState({isSelectAll: selectAllState});
  }

  handleChild(displaystatus, parId) {
    this.setState({openChild: displaystatus});
    this.setState({parentId: parId});
  }

  render() {
    const rows = [];
    const columns = [];
    let lastCategory = null;
    let inStockOnly = this.props.inStockOnly;
    let colHeaders = this.props.headers;
    let self = this;
    this.props.rowData.forEach((product, index) => {
      if (index == 1) {
        columns.push(<GridHead product={product} headers={this.props.headers} key={index} onHandleSort={this.handleSort} sortOrder={this.props.sortOrder} sortColumn={this.props.sortColumn} onOpenAllChild={this.handleChild} onHandleSelectAll={this.handleSelectAll} id={index}/>);
      }

      // if (product.productId.indexOf(this.props.filterText) === -1 ) {
      //   return;
      // }
      let searchIndex = -1;
      colHeaders.some((header)=>{
       if(product[header.id].indexOf(self.props.filterText) != -1){
        searchIndex = 0;
        return product[header.id].indexOf(self.props.filterText) != -1;
      }
           
      });

      if (searchIndex === -1 ) {
        return;
      }



      rows.push(<GridRow product={product} key={index} id={index} onSelect={this.preSelect} isCheckBox={true} isSelectAll={this.state.isSelectAll} headers={this.props.headers} onOpenChild={this.handleChild} isParent={product.children && product.children.length
        ? true
        : false} prevselect={this.state.selectedRow}/>);

      if (product.children && product.children.length) {
        rows.push(<GridRow product={product.children} key={'c' + index} id={'c' + index} onSelect={this.preSelect} isCheckBox={true} isSelectAll={this.state.isSelectAll} headers={this.props.headers} isChild={true} showChild={this.state.openChild} parentId={this.state.parentId} prevselect={this.state.selectedRow}/>);
      }

      lastCategory = product.category;

    });

    return (
      <div className="grid-container">
        <table className="grid-table">
          <thead>{columns}</thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default GridTable;
