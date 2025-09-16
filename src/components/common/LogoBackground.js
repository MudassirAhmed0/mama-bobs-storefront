import React from 'react'

const LogoBackground = () => {
  return (
    <div style={{
        backgroundImage: "url(/images/icons/bg-logo.png)",
        backgroundSize: "40vw",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        
      }} className="fixed top-0 left-0 w-full h-full bg-black opacity-20"></div>
  )
}

export default LogoBackground
