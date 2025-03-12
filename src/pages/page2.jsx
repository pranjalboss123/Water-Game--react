import "../App.css" 
import React from 'react'
import { Link } from "react-router-dom";

const page2 = () => {
  return (
    <div className='w-screen scr h-screen'>
        <div className='conatiner relative background flex justify-center items-center justify-self-center w-[330px] h-[650px] m-2'>

        <div className='absolute w-[180px] mt-2.5 logo top-2'>
        <img src="src\assets\image\Title.png" alt="logo"  />
        </div>
        
        <div className="images  top-[-15px] w-[250px] h-[395px] relative">  
        <img className='absolute  img1 align-middle  w-[250px] h-[395px] ' src="src\assets\image\bigshape.png" alt="outer" />

        <img className='absolute page2img  img2 align-middle w-[230px] h-[375px] realtive ' src="src\assets\image\smallshape.png" alt="inner" />

        <div className="textbox flex flex-col justify-center  items-center pt-8 z-20 relative">
            <Link to="/page3">
            <button className="w-[139px] h-[90px] relative">
                <img className="relative top-[35px] left-[5px]" src="src\assets\image\shine.png" alt="shine" />
                <img src="src\assets\image\choice rectangle.png" alt="Push" />
                <h3 className="text-xl relative top-[-40px] text-white font-bold font-serif">Push</h3>
            </button>
            </Link>
            <div className="relative  w-[80px]  text">
                <img className="relative top-[1px] left-[10px] w-[60px] h-[70px]" src="src\assets\image\Arrow 1.png" alt="" />
               
            </div>
            <br />
            <br />
            
            <p className="h-[200px] w-[190px] text-center text-white font-semibold text-sm flex flex-wrap">
                Keep pushing until tubes rise under pressure and then get stuck on a plant.
                </p>
            
        </div>
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
  )
}
export default page2
