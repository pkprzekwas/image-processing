import React, { Component } from 'react';

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
    console.log(e.target.value);
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    const style = {
      marginTop: '2%',
      marginBottom: '2%'
    };
    return(
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
          className='form-control form-control-lg'
          style={style}
        />
      </form>
    )
  }
}

export default SearchBar;