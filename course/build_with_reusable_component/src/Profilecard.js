import React from 'react'

function Profilecard(props) {
  return (
    <div>
      <div>Title is {props.title}</div>
      <div>Handle is {props.handle}</div>
    </div>
  )
}

export default Profilecard