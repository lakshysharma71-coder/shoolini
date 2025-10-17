import React from 'react'


function EventSection() {
    const data = [
        { year: "2024", img: "https://shooliniuniversity.com/_next/image?url=%2Fassets%2Fimages%2Fshoolini-NAAC.jpg&w=640&q=75"  ,heading:"NAAC 2024" , subheading:"Accredited A+" ,text:"See More"},
        { year: "2025", img: "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fassets%2Fimages%2Fthe-ranking.png&w=384&q=75"  ,heading:"THE World Rankings 2025" , subheading:"Overall Global Rank: 401-500" ,text:"See More"},
        { year: "2026", img: "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fassets%2Fimages%2Fqs-rankingNew.png&w=384&q=75" ,heading:"QS World Rankings 2026" , subheading:"Overall Global Rank: 503"  ,text:"See More"},
        { year: "2025", img: "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fassets%2Fimages%2Fthe.png&w=384&q=75"  ,heading:"THE Impact Rankings 2025" , subheading:"Top 100 Global University" ,text:"See More"},
        { year: "2025", img: "https://shooliniuniversity.com/assets/images/nirf.png"  ,heading:"NIRF 2025" , subheading:"11-50 Band" ,text:"See More"},

    ]






    return (
        <>  

        <div className="w-full flex justify-center mt-3 pt-3">
            <div className="container flex justify-between">
             <div className="w-full">
                  {
                data.map((item , index)=>{
                return (
                     <div key={index} className=" flex justify-between w-auto border-b p-3 pt-5  ">
                    <div className="flex">
                        <h1 > {item.year}</h1>
                    <img src={item.img} alt="" className='ml-2  w-35 h-15 object-cover' />
                    </div>
                    <div className=" flex flex-col">
                        <h1 className='text-xl font-bold py-2 hover:text-red-600'>{item.heading}</h1>
                        <h3>{item.subheading}</h3>

                    </div>
                    <div className=" py-2">{item.text}</div>
                </div>
                
                )

                })
               }
             </div>
              
               <div className="  ">
                <img src="https://shooliniuniversity.com/_next/image?url=%2Fassets%2Fimages%2FResearch-Future5.png&w=1920&q=75" alt="" className='w-200 mx-7 h-130 object-'  />
               </div>


            </div>



        </div>


        </>
    )
}

export default EventSection