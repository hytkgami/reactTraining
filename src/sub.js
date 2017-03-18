import React from 'react'
import {render} from 'react-dom'

export class Sub extends React.Component {
  render() {
    return(
      <p>{this.props.text}</p>
    )
  }
}
