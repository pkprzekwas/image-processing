import React, {Component} from 'react';

class HeaderLink extends Component {
  render() {
    return (
      <li className='nav-item'>
        <a className='nav-link'
           target='_blank'
           href={this.props.linkUrl}>{this.props.labelName}</a>
      </li>
    )
  }
}

export default HeaderLink