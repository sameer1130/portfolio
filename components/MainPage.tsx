import AboutMe from "./AboutMe";
import Bio from "./Bio";



export default function MainPage(){
    return(
        <div className="flex justify-around p-12 ">
            <div className=" ">
                <Bio />
            </div>
            <div className="">
                <AboutMe />
            </div>
        </div>
    )
}