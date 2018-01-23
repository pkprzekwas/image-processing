import React, {Component} from 'react';
import HeaderLink from "./HeaderLink";
import { docs, github, jupyterInstructions } from "../config";

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <HeaderLink
              linkUrl={docs}
              labelName='Dokumentacja'
            />
            <HeaderLink
              linkUrl={jupyterInstructions}
              labelName='Praca z Jupyter'
            />
            <HeaderLink
              linkUrl={github}
              labelName='Kod źródłowy'
            />
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;