import React from 'react';

function App(){
    const date= new Date();
    const time = date.toLocaleTimeString();
    return  <div>
              <h1>Hi there! {time}</h1>
              <input style={{border: '3px solid red'}}/>
            </div>
}

export default App;