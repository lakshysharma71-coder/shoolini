import React, { useEffect, useState } from 'react'

function RankingSection() {
    const [count, setCount] = useState(0);
    const [val, setval] = useState(0);
    const [item, setitem] = useState(0);

    const duration = 2000; // 5 seconds
    const start = Date.now();

    useEffect(() => {
        const timer = setInterval(() => {
            const timePassed = Date.now() - start;
            const progress = Math.min(timePassed / duration, 1); // 0 → 1

            setCount(Math.floor(5000 * progress));
            setval(Math.floor(250 * progress));
            setitem(Math.floor(1700 * progress));

            if (progress === 1) clearInterval(timer);
        }, 16); // ~60 FPS

        return () => clearInterval(timer);
    }, []);







    return (
        <>
            <h1 className='text-center text-5xl py-5 font-bold text-red-600'>Join Shoolini — A Top Private University in India!</h1>
            <div className="items-center justify-center my-2 flex w-full">
                <div className="container flex w-full  py-5">
                    <div className="  flex  w-full h-full">
                        <img src="https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fassets%2Fimages%2Fthe-ranking.png&w=384&q=75" alt="" className='w-50 h-15' />
                        <div className=" flex  flex-col pl-5">
                            <h1 className='text-xl font-semibold'>
                                THE World Rankings 2025 </h1>
                            <h3 className='font=semibold'>Overall Global Rank: 401-500</h3>
                        </div>
                    </div>
                    <div className="   flex  w-full h-full pl-8">
                        <img src="https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fassets%2Fimages%2Fqs-rankingNew.png&w=384&q=75" alt="" className='w-40 h-15' />
                        <div className=" flex  flex-col pl-5">
                            <h1 className='text-xl font-semibold'>QS World Rankings 2026</h1>
                            <h3 className='font=semibold'>Overall Global Rank: 503</h3>
                        </div>
                    </div>

                </div>
            </div>

            <div className=" w-full flex my-8 mb-10 justify-center ">
                <div className="container flex  ">
                    <div className="flex w-full p-3 m-3 shadow-xl items-center ">
                        <div className=" flex  flex-col   "> <h1 className='text-3xl font-bold'>{count} + </h1>
                            <h4 className=' font-bold'> Placements</h4>

                        </div>
                        <div className="ml-auto"> <h4>100% in MBA | BTECH | HM</h4></div>

                    </div>


                    <div className="flex w-full p-3 m-3 shadow-xl items-center ">
                        <div className=" flex  flex-col   "> <h1 className='text-3xl font-bold'>{val} + </h1>
                            <h4 className=' font-bold'> Placements</h4>

                        </div>
                        <div className="ml-auto"> <h4>with top universities</h4></div>

                    </div>


                    <div className="flex w-full p-3 m-3 shadow-xl items-center  ">
                        <div className=" flex  flex-col   "> <h1 className='text-3xl font-bold'>{item} + </h1>
                            <h4 className=' font-bold'> Placements</h4>

                        </div>
                        <div className="ml-auto"> <h4>100% in MBA | BTECH | HM</h4></div>

                    </div>




                </div>

            </div>







        </>
    )
}

export default RankingSection