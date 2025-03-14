import React, { useState } from 'react'
import Header from '../Header';

function Usememo2() {
    const [count, setCount] = useState(0); 
  return (
    <div>
        <Header/>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
    </div>
  )
}

export default Usememo2;

// clicking on the button is rendering the header component again and again where it is not even changing .. 
// use React.memo(Header);  to avoid re rendering 

 
