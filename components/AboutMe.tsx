import NavBar from "./NavBar";



export default function AboutMe() {
    return(
        <div className="w-3/4 ">

        
            <div className="relative ">
                <div className="items-center text-white bg-zinc-800 border border-zinc-500 rounded-3xl p-8">
                    <div className="justify-between items-center">

                        <div className="font-bold text-3xl p-4 border-b-4 w-fit border-green-500 border-rounded">
                        
                            About Me
                        </div>
                        <div className="absolute top-0.5 right-0.5">
                            <NavBar />
                        </div>
                    </div>
                    <div className="items-center p-4 text-xl">
                            <div className="flex justify-center items-center p-4 ">Im a Full Stack Web Developer with a passion for crafting robust and efficient backend systems.
                                While adept in both front-end and back-end development, my true thrill lies in architecting the core 
                                functionalities that power a seamless user experience.</div>

                            <div className="flex justify-center items-center p-4 ">A self-proclaimed tech enthusiast, Im constantly invigorated by the ever-evolving landscape of the industry.
                                My curiosity extends to emerging technologies like Blockchain and Machine Learning, allowing me to stay 
                                informed and integrate these advancements into my solutions when appropriate.</div>

                            <div className="flex justify-center items-center p-4 ">Beyond the back-end, Ive also gained valuable experience in UI/UX design.
                                My freelance projects have garnered positive feedback,demonstrating my ability to bridge the gap between
                                technical expertise and user-centric design principles.</div>
                                
                            
                    </div>
            
                    <div>
                        <div className="font-bold text-3xl p-4">
                            What I&apos;m Doing
                        </div>
                    </div>
                </div>
            </div>
            
                

        </div>

        
    )
}