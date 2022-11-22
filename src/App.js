import React from 'react'
import Body from './Components/Body/Body'
import Logo from './Components/SiteLogo/Logo'


function App() {
  return (
    <div style={{
      
        backgroundImage: "linear-gradient(to bottom right, #68E6CE, #3342FF)",
        width: "100vw",
        height: "100vh"
      
    }}>
      <Logo/>
      <Body/>
    </div>
  )
}

export default App