import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const product = this.props.product;

    const style = {
      marginBottom: '2%',
    };

    const sampleImg = <img
      className='card-img-top'
      style={{width: '348px'}}
      src={product.img}
      alt="Card image cap"
    />;

    return(
      <div className='card text-center'
           style={style}>
        <div className='card-header'>
          {product.name}
        </div>
        <div className='card-body'>

          {sampleImg}
          <p className='card-text'>
            {product.description}
          </p>
          <a
            href={product.url}
            target='_blank'
            className="btn btn-primary">
            Sprawdz
          </a>
        </div>
      </div>
    )
  }
}

export default ProductRow;