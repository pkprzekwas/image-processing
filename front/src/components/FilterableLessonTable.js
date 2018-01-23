import React, { Component } from 'react';
import LessonTable from "./LessonTable";
import SearchBar from "./SearchBar";

class FilterableLessonTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return(
      <div className='container' style={{marginTop: '2%'}}>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onInStockChange={this.handleInStockChange}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <LessonTable
          lessons={this.props.lessons}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

export default FilterableLessonTable;
