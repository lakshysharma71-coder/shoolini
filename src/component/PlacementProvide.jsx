import React from 'react'
import Sliders from '../slider/Sliders'
import Impact from '../slider/Imapct'
import ShooliniIMpact from '../slider/ShooliniIMpact'

function PlacementProvide() {
    return (
        <>
            <div className="my-5 bg-zinc-100 flex justify-center">

                <div className="container">
                    <h1 className='text-red-600 py-10 text-6xl font-bold '>THINK PLACEMENTS  </h1>
                    <div className=" max-w-[auto] mx-auto  pb-8 ">
                        <Sliders/>
                       
                    </div>
                    
                    </div>

                    

            </div>
    <div className="w-full flex py-5 mt-10 justify-center">
             <div className="container ">
                <h1 className="text-red-600 py-10 text-6xl font-bold  ">Shoolini Impact</h1>
             <div className="flex items-center">
                  <div className=" w-180 h-150   object-fit rounded-md ">
                 <Impact/>
            </div>
            <ShooliniIMpact/>

             </div>
         </div>
    </div>
        </>
    )
}

export default PlacementProvide