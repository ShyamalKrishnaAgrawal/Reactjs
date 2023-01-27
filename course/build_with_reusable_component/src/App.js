import React from 'react'
import ProfileCard from "./Profilecard"

function App() {
  return (
    <div>
      <div>Peronal Digital Assitant</div>
      <ProfileCard title="Alexa" handle="@alexa99"/>
      <ProfileCard title="Cortana" handle="@cortana32"/>
      <ProfileCard title="Siri" handle="@siri01"/>
    </div>
  );
}

export default App;
