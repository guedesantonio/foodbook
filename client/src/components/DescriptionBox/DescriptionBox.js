import React, { Component } from 'react'
import EdiText from 'react-editext'
import axios from "axios";

const DescriptionBox = (props) => {
  const onSave = val => {
    console.log('Edited Value -> ', val);
    axios.put("/api/users/description/" + props.userId, {description: val}).then(() => {
      console.log("Description inserted")
    })
  }
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
        value="How do you define real? If you're talking about what you can feel, what you can smell,
        what you can taste and see, then real is simply electrical signals interpreted by your brain"
        onSave={onSave}
      />
    )
}

export default DescriptionBox 