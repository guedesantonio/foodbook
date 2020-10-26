import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class DescriptionBox extends Component {
  // saveDescription = this.props.saveDescription()
  // onSave = () => {
  //   console.log(saveDescription)
  // }

  render() {
    return (
      <EdiText
        type='textarea'
        inputProps={{
          className: 'textarea',
          placeholder: 'Type your content here',
          style: {
            outline: 'none',
            minWidth: 'auto'
          },
          rows: 5
        }}
        value='Not another flipping cooking show!'  
        onSave={this.onSave}
      />
    )
  }
}