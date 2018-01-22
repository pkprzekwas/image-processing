import React, {Component} from 'react';

class Header extends Component {
  render() {
    const jupyterInstructions =
      'http://jupyter-notebook.readthedocs.io/en/latest/examples/Notebook/Running%20Code.html';
    const github = 'https://github.com/pkprzekwas/image-processing';
    const docs = 'https://docs.google.com/document/d/1mgcYdpmy09oxmj8oHkPr4XUNFTPU2rySgVA-Rq-7Zp4';

    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a className='nav-link'
                 target='_blank'
                 href={docs}>Dokumentacja</a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                target='_blank'
                href={jupyterInstructions}>
                Praca z Jupyter
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'
                 target='_blank'
                 href={github}>Kod źródłowy</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;