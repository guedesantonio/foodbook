import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class DescriptionBox extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render () {
    return (
      <EdiText
        type='text'
        value='What is real? How do you define real?'
        onSave={this.onSave}
      />
    )
  }
}