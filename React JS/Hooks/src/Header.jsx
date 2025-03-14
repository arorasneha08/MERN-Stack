import React from 'react'

function Header() {
    console.log("header rendered ");
    
  return (
    <div>
      <h3>Header </h3>
    </div>
  )
}

export default React.memo(Header); 
