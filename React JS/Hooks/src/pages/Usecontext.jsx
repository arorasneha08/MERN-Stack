import React from 'react'
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function Usecontext() {
  return (
    <div>
      <Profile/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Usecontext ; 

// it allows you to access data from any compoennt without explicitly passing it down through props a every level 
// manage global data in react app 



// step 1 : create context : AppContext.jsx file refer  
// step 2 : provide context : main.jsx main wrap kar do 
// step 3 : consuming the context 

// for creating context : createContext() ;
// for using context : useContext(); 