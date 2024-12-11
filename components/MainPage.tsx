import AboutMe from "./AboutMe";
import Bio from "./Bio";



export default function MainPage(){
    return(
        <div className="flex h-screen  overflow-hidden">
            <div className="ml-[260px] p-4 sticky top-0 h-screen">
                <Bio />
            </div>
            <div className="ml-[60px] p-4 flex-1 overflow-y-auto">
                <AboutMe />
            </div>
        </div>
    )
}