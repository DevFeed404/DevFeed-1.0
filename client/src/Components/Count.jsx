import React from 'react';
import "../CSS/Count.css"
import { useCountUp } from 'react-countup';

function Count() {
    useCountUp({
        ref: 'counter',
        end: 600,
        enableScrollSpy: true,
    
      });
      useCountUp({
        ref: 'counter1',
        end: 100,
        enableScrollSpy: true,

      });
      useCountUp({
        ref: 'counter2',
        end: 200,
        enableScrollSpy: true,

      });

   
    return (
        <div className='w-screen h-fit flex flex-col justify-between bg-white boxshadow'>
            <div className='items-center w-screen flex flex-col '>
                <h1 className='mt-[7vh] sm:text-4xl xsm:text-3xl xssm:text-xl text-5xl  font-bold text-black' style={{'fontFamily': "Poppins"}}>Let The Stats Speak</h1>

                <div className="hr" style={{"width": "27%","marginTop": "3vh"}}></div>
            </div>
            

            <div className='flex w-[80vw] self-center ml-[5vw]  mr-[1vw] pb-6 mb-[5vh] flex-row xmd:flex-col mt-[4vh] items-center justify-evenly flex-wrap ' data-aos-once = "true" data-aos = "fade-in">
                <div className='h-fit boxshadow xmd:w-[60%] xmd:h-auto rounded-3xl  mt-[5vh] w-[17vw] flex flex-col justify-center backdrop-blur-xl border-[2.5px] border-[#E7E7E7]	counter' >
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" fill="currentColor" viewBox="0 0 16 16" className='fill-black mt-[10%]'>
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>
                    </div>


                    <div className='mt-3 pb-5 flex flex-col items-center'>
                        <h1 className='text-3xl pb-3 font-medium  text-black'> <span id="counter" />+</h1>
                        <h1 className='text-2xl pb-2 font-medium content-center mr-4  text-black'>Users</h1>
                    </div>

                </div>

                <div className='h-fit boxshadow border-[2.5px] xmd:w-[60%] xmd:h-auto rounded-3xl mt-[5vh] w-[17vw] flex flex-col border-[#E7E7E7] justify-center counter backdrop-blur-xl '>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" className='fill-black  mt-[10%]' viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                        </svg>
                    </div>
                    <div className='mt-3 pb-5 flex flex-col items-center'>
                        <h1 className='text-3xl pb-3 font-medium  text-black'><span id="counter1" />+</h1>
                        <h1 className='text-2xl pb-2 font-medium content-center mr-4  text-black'>Colleges</h1>
                    </div>

                </div>

                


                <div className='h-fit boxshadow xmd:w-[60%] xmd:h-auto rounded-3xl mt-[5vh] w-[17vw]  border-[2.5px] border-[#E7E7E7] flex flex-col justify-center counter backdrop-blur-xl '>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className='fill-black  mt-[10%]' viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" />
                        </svg>
                    </div>
                    <div className='mt-3 pb-5 flex flex-col items-center'>
                        <h1 className='text-3xl pb-3 font-medium  text-black'><span id="counter2" />+</h1>
                        <h1 className='text-2xl pb-2 font-medium content-center mr-4  text-black'>Reviews</h1>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Count