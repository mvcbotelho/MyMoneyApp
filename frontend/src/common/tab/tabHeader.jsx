import React, { Component } from 'react'

class Tabheader extends Component {
  render () {
    return (
      <li>
        <a href='javascript:;'
          data-toggle='tab'
          data-target={this.props.target}>
          <i className={`fa fa-${this.props.icon}`}>{this.props.label}</i> 
        </a>
      </li>
    )
  }
}

export default Tabheader