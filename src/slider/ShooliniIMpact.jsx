import React from 'react'

function ShooliniIMpact() {
    const data = [
        { img: "https://shooliniuniversity.com/media/1758017483-Marvel-Media-Fest-2025.jpeg", headinh: "Marvel Media fest 2025", pera: " september 26, 2025", text: "Creativity calls. register now,  Media enthusisats!" },
        { img: "https://shooliniuniversity.com/media/1757671622-Shoolini-Marathon-2025.jpeg", headinh: "Shoolini Marathon 2025", pera: "september 20,2025", text: "Join us as we take every step together to fight" },
        { img: "https://shooliniuniversity.com/media/1756198173-Bharat-Pitchathon-4.jpeg", headinh: "Bharat pitchathon 4.0", pera: "september 13,2025", text: "pitch your dream make it real. register before sept-3!" },

    ]
    return (
        <>

            <div className="w-full mb-10 ml-9 ">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="w-full h-auto flex shadow-md hover:shadow-xl translate-transistion duration-300 rounded-xl p-5 my-4 px-10 ml-5">
                            <div className="w-34 h-25">
                                <img src={item.img} alt="" className='object-contain w-34 h-30' />
                            </div>
                            <div className=" text-xl font-semibold  px-25 text-zinc-400 ">
                                <h1>{item.headinh}</h1>
                                <h2 className=' text-lg font-light'>{item.pera}</h2>
                                <p className=' text-lg'>{item.text}</p>
                            </div>

                        </div>
                    )

                })}

                <div className="w-full flex mt-7 justify-end">
                    <button className="bg-red-600 px-4 py-2 text-white font-semibold text-lg rounded-md hover:bg-red-700 transition">
                        Past Events
                    </button>
                </div>

            </div>


        </>
    )
}

export default ShooliniIMpact