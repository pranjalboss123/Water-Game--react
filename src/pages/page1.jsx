import '../App.css'
import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Page2 from './page2';
import { Link } from "react-router-dom";

const App = () => {
  const handleplay = () =>{
   
  }

  return (
    <BrowserRouter>
    <div className='w-screen scr h-screen'>
    <div className='conatiner relative background flex justify-center items-center justify-self-center w-[330px] h-[650px] m-2'>
      <div className="main h-[359px] w-[280px] relative  my-auto">
        <img className='absolute img1 align-middle  h-[300px] w-[250px] ' src="src\assets\image\shape big.png" alt="outer" />
        <img className='absolute img2 align-middle h-[290px] w-[240px]' src="src\assets\image\shape small.png" alt="inner" />
       <div className="logo">
        <img src="src\assets\image\Title.png" alt="logo" className='z-20  justify-self-center items-center p-[40px] relative' />
        </div>  
        <Link to="/page2">
        <button  className="justify-self-center ml-2 bottom-[60px] p-12 absolute justify-center items-center align-middle"><img src="src\assets\image\playbutton.png" className='z-20 relative ' alt="play" /></button>
        </Link>
        <Routes>
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
      <div className="footer absolute bottom-2 flex w-full justify-between px-5 ">
      <div className="help">
        <button className='w-[70px] relative' >
        <img src="src\assets\image\setting.png" alt="help" /> 
      <img className='absolute top-1 left-2.5 w-[50px]'  src="src\assets\image\helpicn.png" alt="helpicn" />
      </button>
      </div>
      
      
      <div className="setting">
        <button className='relative w-[70px]' >
          <img src="src\assets\image\setting.png" alt="setting" />
          <img className='absolute top-0.5 left-1.5  w-[60px]' src="src\assets\image\settingicn.png" alt="setticn" />
          </button>
          </div>
    </div>
    </div>
  
    </div>
    </BrowserRouter>
  )
}
export default App
