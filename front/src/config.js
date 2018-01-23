const API = 'http://localhost:8888/notebooks/work/resources/';

const lessons = [
  {
    name: 'Canny edge detector',
    url: API + 'Canny%20edge%20detector.ipynb',
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
    url: API + 'Corner%20detection.ipynb',
    simple: true,
    img: '/img/corner_detection.png',
    description: 'Detect corner points using the Harris corner detector and determine the subpixel position of corners',
  },
  {
    name: 'Geometric transformations',
    url: API + 'Geometric%20transformations.ipynb',
    simple: false,
    img: '/img/transformations.png',
    description: 'In this example, we will see how to use geometric transformations in the context of image processing.',
  },
  {
    name: 'Histogram Equalization',
    url: API + 'Histogram%20Equalization.ipynb',
    simple: false,
    img: '/img/hist.png',
    description: 'This examples enhances an image with low contrast, using a method called histogram equalization, ' +
    'which “spreads out the most frequent intensity values” in an image [1]. The equalized image has a roughly ' +
    'linear cumulative distribution function.',
  }
];

const jupyterInstructions = 'http://jupyter-notebook.readthedocs.io/en/latest/examples/Notebook/Running%20Code.html';
const github = 'https://github.com/pkprzekwas/image-processing';
const docs = 'https://docs.google.com/document/d/1mgcYdpmy09oxmj8oHkPr4XUNFTPU2rySgVA-Rq-7Zp4';
const course = 'Metody klasyfikacji danych geoinformatycznych';
const topic = 'System prezentujący poglądowo różne metody przetwarzania i analizy obrazów';

export {
  lessons,
  jupyterInstructions,
  github,
  docs,
  topic,
  course,
};