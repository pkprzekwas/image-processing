import React, {Component} from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return
      }
      if (inStockOnly && !product.simple) {
        return
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
    });

    return (
      <div>
       {rows}
      </div>
    )
  }
}

export default ProductTable;