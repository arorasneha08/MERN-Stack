import './App.css'
import SyntheticEvent from './Events Handling/O1_SyntheticEvents'
import { OnChangeInput } from './Events Handling/O2_OnChangeInput';
import PassingFunctionViaProps from './Events Handling/O3_PassingDataFromChildToParent';

function App() {
  const handleClick = () =>{
    
  }

  return (
    <>
      {/* <SyntheticEvent/> */}
      {/* <OnChangeInput/> */}
      <PassingFunctionViaProps/>
    </>
  )
}

export default App ; 
