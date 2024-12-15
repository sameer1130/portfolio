// import Image from "next/image"


export default function SkillCard({image, title}:{
    image: string,
    title: string
}){
    return(
        <div>
            <button className="flex justify-center items-center max-w-fit bg-zinc-600 border-zinc-100 rounded-xl hover:shadow-xl hover:shadow-black  ">
                <div className="pl-1 max-w-fit">
                    <img src={image} alt={title} className="w-8 h-8  rounded-lg p-1 max-w-fit" />
                </div>
                <div className="font-bold text-lg px-1 pr-4 max-w-fit">
                    {title}
                </div>
            </button>
        </div>
    )
}