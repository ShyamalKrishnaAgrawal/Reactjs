import React from 'react'

function Profilecard(props) {
  return (
    <div>
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-bly'>
                <img src={props.image} alt="pda logo"/>
                </figure>
            </div>
        </div>
        <div className='card-conten'>
            <div className='media-content'>
                <p className='tittle is 4'>Title is {props.title}</p>
                <p className='subtitle is-6'>Handle is {props.handle}</p>
            </div>
        </div>
    </div>
  )
}

export default Profilecard