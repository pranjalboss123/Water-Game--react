import "../App.css"
import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
const App = () => {
    const [answer, setAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const ringRef1 = useRef(null);
    const ringRef2 = useRef(null);
    const truebtn= useRef(null);
    const falsebtn= useRef(null);
    const mkt = false
    const congratulationTextRef = useRef(null);
    const wrongAnswerTextRef = useRef(null);
    const question = useRef(null);
    const [isDisabledF, setIsDisabledF] = useState(false);
    const [isDisabledT, setIsDisabledT] = useState(false);
    const handleAnswer = async (isTrue) => {
        
        setAnswer(isTrue);
        setIsCorrect(isTrue);
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
          
          if (isTrue) {
            setIsDisabledF(true);
            setIsDisabledT(true);
            falsebtn.current.classList.add('bgred');
            ringRef2.current.classList.add('ring-animation-up');

            setTimeout(() => {
                if (ringRef2.current) {
                  ringRef2.current.src = "/src/assets/image/green rings mid.png";
                }
              }, 300);
              
              // Change image at 80% (800ms)
              setTimeout(() => {
                if (ringRef2.current) {
                  ringRef2.current.src = "/src/assets/image/green rings top.png";
                }
              }, 800);
            
              // Wait for upward animation to finish



            await delay(1000);
            ringRef2.current.classList.add('ring-animation-down-true');
            setTimeout(() => {
                if (ringRef2.current) {
                  ringRef2.current.src = "/src/assets/image/green rings mid.png";
                }
              }, 300);
              setTimeout(() => {
                if (ringRef2.current) {
                  ringRef2.current.src = "/src/assets/image/green rings.png";
                }
              }, 500);
            question.current.classList.add('texthide');
            congratulationTextRef.current.classList.add('congratulation-text');
            await delay(1000);
            ringRef2.current.classList.add('truering');
            await delay(500);
            setIsDisabledF(false);
            ringRef2.current.classList.remove('ring-animation-down-true');
            ringRef2.current.classList.remove('ring-animation-up');
            question.current.classList.remove('texthide');
            congratulationTextRef.current.classList.remove('congratulation-text');
            falsebtn.current.classList.remove('bgred');
            truebtn.current.classList.add('bgred');
          } 
          else {
            if(!isDisabledT)
              mkt =true
            
            setIsDisabledF(true);
            truebtn.current.classList.add('bgred');
            ringRef1.current.classList.add('ring-animation-up');
            setTimeout(() => {
                if (ringRef1.current) {
                  ringRef1.current.src = "/src/assets/image/Red rings mid.png";
                }
              }, 300);
              
              // Change image at 80% (800ms)
              setTimeout(() => {
                if (ringRef1.current) {
                  ringRef1.current.src = "/src/assets/image/Red rings top.png";
                }
              }, 800);
            await delay(1000);
            ringRef1.current.classList.add('ring-animation-down');
            setTimeout(() => {
                if (ringRef1.current) {
                  ringRef1.current.src = "/src/assets/image/Red rings mid.png";
                }
              }, 300);
              setTimeout(() => {
                if (ringRef1.current) {
                  ringRef1.current.src = "/src/assets/image/Red rings.png";
                }
              }, 500);
            question.current.classList.add('texthide');
            wrongAnswerTextRef.current.classList.add('wrong-answer-text');
            await delay(2000);
            ringRef1.current.classList.remove('ring-animation-up');
            ringRef1.current.classList.remove('ring-animation-down');
            question.current.classList.remove('texthide');
            wrongAnswerTextRef.current.classList.remove('wrong-answer-text');
            setIsDisabledF(false);
            if(mkt)
              setIsDisabledT(false)
          }
    };
    return (
        <div className='w-screen h-screen scr'>
            <div className="bg-blue-700 rounded-4xl conatiner relative flex justify-center items-center justify-self-center w-[330px] h-[650px] m-2">
                <div className='conatiner rounded-4xl absolute self-baseline m-0 background2 flex justify-center items-center justify-self-center w-[330px] h-[650px] '>
                </div>

                <div className="content relative flex text-center flex-col justify-center items-center ">

                    <div ref={question} className="text  question text-center">
                        <h3 className="text-yellow-500 font-extrabold  text-xl font-serif">1. Question</h3>
                        <p className="text-white  w-4/5 font-extrabold quest text-2xl font-serif">The Sun is the closest star to Earth?</p>
                    </div>

                    <div className="plants items-center gap-10 flex">
                        <div className="plnt1">
                            <img className="w-[120px]" src="src\assets\image\Plant (1).png" alt="plant1" />
                        </div>
                        <div className="plnt2">
                            <img className="w-[110px]" src="src\assets\image\Plant.png" alt="plant2" />
                        </div>
                    </div>


                    <div className="rings items-center w-full h-[110px] z-50  gap-0 flex">
                        <div className="ring1 w-full h-full relative">
                            <img className="w-[140px]  h-full z-50 absolute"  src="src\assets\image\Red rings.png" alt="ring1" ref={ringRef1} />
                        </div>
                        <div className="ring2 w-full h-full relative">
                            <img className="z-50 absolute  h-full w-[140px]" src="src\assets\image\green rings.png" alt="ring2" ref={ringRef2} />
                        </div>
                    </div>
                    <div className="buttons  items-center gap-8 flex">
                        <button  disabled={isDisabledF} className="relative" onClick={() => handleAnswer(false)}>
                            <img className="relative top-[30px] left-[5px]" src="src\assets\image\shine.png" alt="shine" />
                            <p className="absolute font-extrabold text-white quest font-serif text-xl  top-[35px] left-[30px] option">False</p>
                            <img ref={falsebtn} className="w-[120px]" src="src\assets\image\choice rectangle.png" alt="False" />
                        </button>
                        <button disabled={isDisabledT} className="relative" onClick={() => handleAnswer(true)}>
                            <img className="relative top-[30px] left-[5px]" src="src\assets\image\shine.png" alt="shine" />
                            <p className="option absolute font-extrabold text-white quest font-serif text-xl  top-[35px] left-[30px]">True</p>
                            <img  ref={truebtn} className="w-[120px]" src="src\assets\image\choice rectangle.png" alt="True" />
                        </button>
                    </div>

                    <div className=" flex flex-col txtst"  ref={congratulationTextRef}>
                        <div className="text-sm text-yellow-400 font-bold font-serif">You got 1 coin</div>
                        <div>Congratulations!</div>
                        
                        </div>
                    <div className=" flex flex-col txtst"  ref={wrongAnswerTextRef}>                        
                        <div className="text-sm text-yellow-400 font-bold font-serif">You got 0 coin</div>
                        <div>Noo!</div>
                        </div>

                </div>



            </div>
        </div>
    )
}
export default App
