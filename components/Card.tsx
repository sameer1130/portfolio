

export default function Card({imgSrc, title, description}:
    {
        imgSrc: string,
        title: string,
        description: string,
        
    }
){
    return(
        <div>
            <div className=  "flex justify-center items-center p-2 border border-zinc-500 bg-zinc-900 rounded-3xl shadow-lg shadow-white/50 hover:shadow-green-500/50 w-96 h-48">
                <div className="mb-[48px] ml-[20px]">
                <img src={imgSrc} alt={title} className="w-44 h-20 bg-white  rounded-lg p-2 " />
                </div>
                <div className="p-2 px-4">
                    <div className="font-bold text-lg py-4 ">
                        {title}
                    </div>
                    <div className="pb-4">
                        {description}
                    </div>
                </div>
                


            </div>
        </div>
    )
}