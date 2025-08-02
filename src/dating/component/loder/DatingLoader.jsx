import React from 'react'

const DatingLoader = () => {
  return (
    <div style={{
        position:"absolute",
        top:"48%",
        left:"48%"
    }}> 
        <div className="dating-loader">
  <div className="dating-loader-text" style={{}}>Loading...</div>
  <div className="dating-loader-bar" ></div>
</div>

    </div>
  )
}

export default DatingLoader;