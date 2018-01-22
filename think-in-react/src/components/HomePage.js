import React, { Component } from 'react';
import FilterableProductTable from './FilterableProductTable';

class HomePage extends Component {
  render() {
    const style = {
      marginTop: '5%',
    };

    const api = 'http://localhost:8888/notebooks/work/resources/';

    const title =
      'System prezentujący poglądowo różne metody przetwarzania i analizy obrazów';


    const products = [
      {
        name: 'Canny edge detector',
        url: api + 'Canny%20edge%20detector.ipynb',
        simple: true,
        img: '/img/canny.png',
        description: 'The Canny filter is a multi-stage edge detector. It uses a filter based on the derivative of a ' +
        'Gaussian in order to compute the intensity of the gradients.The Gaussian reduces the effect of noise ' +
        'present in the image. Then, potential edges are thinned down to 1-pixel curves by removing non-maximum ' +
        'pixels of the gradient magnitude. Finally, edge pixels are kept or removed using hysteresis thresholding' +
        ' on the gradient magnitude.'
      },
      {
        name: 'Corner detection',
        url: api + 'Corner%20detection.ipynb',
        simple: true,
        img: '/img/corner_detection.png',
        description: 'Detect corner points using the Harris corner detector and determine the subpixel position of corners',
      },
      {
        name: 'Geometric transformations',
        url: api + 'Geometric%20transformations.ipynb',
        simple: false,
        img: '/img/transformations.png',
        description: 'In this example, we will see how to use geometric transformations in the context of image processing.',
      },
    ];

    return(
      <div className='container' style={style}>
        <h1 className='display-2 text-center'>MKDG</h1>
        <p className='lead text-center'>{title}</p>
        <hr/>
        <FilterableProductTable products={products}/>
      </div>
    )
  }
}

export default HomePage;