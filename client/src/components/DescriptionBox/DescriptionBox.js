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
        value="How do you define real? If you're talking about what you can feel, what you can smell,\
        what you can taste and see, then real is simply electrical signals interpreted by your brain"
        onSave={this.onSave}
      />
    )
  }
}