import React from 'react'
import ProfileCard from "./Profilecard"
import Alexa from "./images/alexa.png"
import Cortana from "./images/cortana.png"
import Siri from "./images/siri.png"
import 'bulma/css/bulma.css'
function App() {
  return (
    <div>
      <div>Peronal Digital Assitant</div>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title="Alexa" handle="@alexa99" image={Alexa}/>
            </div>
            <div className='column is-4'>
              <ProfileCard title="Cortana" handle="@cortana32" image={Cortana}/>
            </div>
            <div className='column is-4'>
              <ProfileCard title="Siri" handle="@siri01" image={Siri}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
