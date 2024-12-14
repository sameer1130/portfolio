

export default function Card({imgSrc, title, description}:
    {
        imgSrc: string,
        title: string,
        description: string,
        
    }
){
    return(
        <div>
            <div className=  "flex  justify-center items-center  p-2 border border-zinc-500 bg-zinc-900 rounded-3xl shadow-lg shadow-white/50 hover:shadow-green-500/50 ">
                <div className="ml-2 mb-4">
                <img src={imgSrc} alt={title} className="w-52 h-20 bg-white  rounded-lg p-2 " />
                </div>
                <div className="p-2 px-4">
                    <div className="font-bold text-lg py-2 ">
                        {title}
                    </div>
                    <div className="pb-4 text-sm text-zinc-300">
                        {description}
                    </div>
                </div>
                


            </div>
        </div>
    )
}