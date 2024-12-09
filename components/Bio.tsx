
import Image from "next/image";
import Mail from "../public/ion--mail-outline.svg"
import Doc from "../public/ion--document-text-outline.svg"
import Loc from "../public/ion--location-outline.svg" 
import Linkedin from "../public/ion--logo-linkedin.svg"
import Github from "../public/ion--logo-github.svg"

export default function Bio() {
    return (
        <div className="max-w-72">
            <div className="items-center text-white bg-zinc-800 border border-zinc-500 rounded-3xl"> 
                <div className="p-4 flex justify-center py-2 pt-16">
                    <div className="bg-zinc-600 rounded-lg p-4">

                        <Image src="/Images/uifaces-cartoon-image.jpg" width={100} height={100} alt="Picture of the author" />
                    </div>
                </div>

                <div className="p-6 text-center font-bold text-3xl ">
                    <h1>
                    Sameer Kamble
                    </h1>
                </div>
                <div className="border-b border-0 mb-2 mx-4">
                    <div className="text-center p-2 mx-8 mb-12 rounded-lg text-sm border border-zinc-100 bg-zinc-500 ">
                        <p>
                            Software Developer
                        </p>
                    </div>

                </div>
                <div className="p-4 ml-2 py-6">
                    <div className="text-center text-sm">
                        <div className="flex justify-start items-center space-x-2">
                            <div className="bg-zinc-600 rounded-lg p-2">
                                <Mail className="text-green-500 w-6 h-6" />
                            </div>
                            <div className="p-2 ">

                                <p className="flex items-center">EMAIL:</p>
                                <div className=" flex items-center">

                                    <a
                                        href="mailto:sameerkamble1130@gmail.com"
                                        className="text-lg text-zinc-300 underline truncate inline-block text-ellipsis"
                                        style={{ maxWidth: "calc(100% - 72px)" }}>
                                            sameerkamble1130@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 ml-2 py-2">
                    <div className="text-center text-sm">
                        <div className="flex justify-start items-center space-x-2">
                            <div className="bg-zinc-600 rounded-lg p-2">
                                <Doc className="text-green-500 w-6 h-6" />
                            </div>
                            <div className="p-2 ">

                                <p className="flex items-center">Resume:</p>
                                <div className=" flex items-center">

                                    <a
                                        href="https://www.dropbox.com/scl/fi/jcbn7rl9ybnqbkt5eeic4/Sameer_ind.pdf?rlkey=0z2w22xe3th4yqgraxmpwg53e&st=ml4lurpk&dl=0"
                                        className="text-lg text-zinc-300 truncate inline-block text-ellipsis"
                                        // style={{ maxWidth: "calc(100% - 72px)" }}
                                        >
                                            Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 ml-2 py-6">
                    <div className="text-center text-sm">
                        <div className="flex justify-start items-center space-x-2">
                            <div className="bg-zinc-600 rounded-lg p-2">
                                <Loc className="text-green-500 w-6 h-6" />
                            </div>
                            <div className="p-2 ">

                                <p className="flex items-center">Location:</p>
                                <div className=" flex items-center">

                                    <a
                                        href="https://www.dropbox.com/scl/fi/jcbn7rl9ybnqbkt5eeic4/Sameer_ind.pdf?rlkey=0z2w22xe3th4yqgraxmpwg53e&st=ml4lurpk&dl=0"
                                        className="text-lg text-zinc-300 truncate inline-block text-ellipsis"
                                        // style={{ maxWidth: "calc(100% - 72px)" }}
                                        >
                                            India & Canada
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-2 p-4">
                <a href="https://www.linkedin.com/in/sameer-kamble11/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-zinc-600 rounded-lg p-2">
                        <Linkedin className="w-4 h-4" />
                    </div>
                    </a>

                    <a href="https://github.com/sameer1130" target="_blank" rel="noopener noreferrer">
                    <div className="bg-zinc-600 rounded-lg p-2">
                        <Github className="w-4 h-4" />
                    </div>
                    </a>

                </div>

                
            </div>
        </div>
    )
}   