import React from 'react'

function Count() {
    return (
        <div className='w-screen h-[80vh] flex flex-col bg-black justify-between'>
            <h1 className='mt-[14vh]  w-screen text-5xl ml-[33%] mr-[40%]  font-bold text-white'>Checkout the Numbers</h1>
            <div className='flex ml-[5vw] pb-6  justify-evenly flex-wrap '>
                <div className='h-[35vh] rounded-3xl  mt-[5vh] w-[19vw] flex flex-col justify-center backdrop-blur-xl border border-indigo-600	'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16" className='fill-white ml-[35%] mt-[10%]'>
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>


                    <div className='mt-3 pb-5 flex flex-col items-center'>
                        <h1 className='text-5xl pb-3 font-medium  text-white'>600+</h1>
                        <h1 className='text-3xl pb-2 font-medium content-center mr-4  text-white'>Users</h1>
                    </div>

                </div>
                <div className='h-[35vh] rounded-3xl mt-[5vh] w-[19vw] flex flex-col justify-center  backdrop-blur-xl border border-indigo-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" className='fill-white ml-[35%] mt-[10%]' viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg>
                    <div className='mt-3 pb-5 flex flex-col items-center'>
                        <h1 className='text-5xl pb-3 font-medium  text-white'>100+</h1>
                        <h1 className='text-3xl pb-2 font-medium content-center mr-4  text-white'>Colleges</h1>
                    </div>

                </div>
           
                {/* <div className='h-[35vh] rounded-3xl mt-[5vh] w-[19vw] flex flex-col justify-center  backdrop-blur-xl border border-indigo-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16" className='fill-white ml-[37%] mt-[10%]'>
                        <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
                        <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
                    </svg>
                    <div className='mt-3 pb-5 flex flex-col items-center'>
                        <h1 className='text-5xl pb-3 font-medium  text-white'>100+</h1>
                        <h1 className='text-3xl pb-2 font-medium content-center mr-4  text-white'>Reviews</h1>
                    </div>


                </div> */}
                <div className='h-[35vh] rounded-3xl mt-[5vh] w-[19vw]  flex flex-col justify-center  mr-14  backdrop-blur-xl border border-indigo-600'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" className='fill-white ml-[35%] mt-[10%]' viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" />
                    </svg>
                    <div className='mt-3 pb-5 flex flex-col items-center'>
                        <h1 className='text-5xl pb-3 font-medium  text-white'>100+</h1>
                        <h1 className='text-3xl pb-2 font-medium content-center mr-4  text-white'>Reviews</h1>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Count