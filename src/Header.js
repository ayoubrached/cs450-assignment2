import React, { Component } from 'react';
class Header extends Component {
  
  render() {
    return (
        <div class="heading">
        <div class="name"><strong>{this.props.personInfo.name}</strong><br /> {this.props.personInfo.occupation}</div>
        <div class="info">
            {this.props.contactInfo.email}<br />
            {this.props.contactInfo.web}<br />
            {this.props.contactInfo.mobile}
        </div>
    </div>
    )
  }
}

export default Header;