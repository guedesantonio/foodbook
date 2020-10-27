import React, { useState, useEffect } from 'react'
import EdiText from 'react-editext'
import axios from "axios";

const DescriptionBox = (props) => {
  const [userDescription, setUserDescription] = useState("");

  const getUserDescription = () => {
    axios.get("/api/users/description/" + props.userId).then( (res) => {
      setUserDescription(res.data)
    }
    )
  }

  useEffect( () => {
    getUserDescription()
  },[]);

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
        value={userDescription}
        onSave={onSave}
      />
    )
}

export default DescriptionBox 