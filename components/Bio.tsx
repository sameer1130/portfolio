'use client';
import { useState } from "react";
import Image from "next/image";
import Mail from "../public/ion--mail-outline.svg";
import Doc from "../public/ion--document-text-outline.svg";
import Loc from "../public/ion--location-outline.svg";
import Linkedin from "../public/ion--logo-linkedin.svg";
import Github from "../public/ion--logo-github.svg";

export default function Bio() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="lg:min-w-3xl  xl:ml-1  sm:overflow-auto sm:overflow-x-hidden xl:sticky xl:top-0 mb-12">
      <div
        className={`flex flex-col lg:flex-col text-white bg-zinc-800 border border-zinc-500 rounded-3xl ${
          showDetails ? "w-full" : "lg:w-[270px] lg:mr-8 "
        }`}
        // style={{ maxWidth: "calc(100% - 72px)" }} // Ensure it uses full width but reduces by 72px (margin/padding)
      >
        {/* Top Section */}
        <div
          className={`lg:p-4 flex ${
            showDetails
              ? "flex-row items-center justify-between w-full"
              : "flex-col items-center"
          } lg:flex-col lg:items-center lg:justify-center`}
        >
          {/* Profile Image */}
          <div className="bg-zinc-600 rounded-lg p-4 mt-8">
            <Image
              src="/Images/3d-face1.jpg"
              className="rounded-full"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>

          {/* Name and Title */}
          <div className={`${showDetails ? "text-left" : "text-center"} p-4`}>
            <div className="items-center">
                <h1 className="font-bold text-3xl p-2 mb-6">Sameer Kamble</h1>
                <div className="flex justify-center items-center">

                    <p className="bg-zinc-500 text-zinc-200 w-fit rounded-lg py-1 px-3 text-sm ">
                    Software Developer
                    </p>
                </div>
            </div>

            {/* Border after the Software Developer text */}
            <div className="flex justify-center mt-12">
                <div className="w-4/5 border-b border-zinc-700" />
            </div>
        </div>


          {/* Button to Toggle Details (Visible on Small Screens Only) */}
          <div className="lg:hidden">
            <button
              className="bg-green-600 text-white rounded-lg py-2 px-4"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
          </div>
        </div>

        {/* Detailed Section */}
        <div
          className={`transition-all duration-300 ${
            showDetails ? "block" : "hidden"
          } lg:block w-full`}
        >
          {/* Email */}
          
          <div className="p-4 ml-2 py-2">
  <div className="text-center text-sm">
    {/* Email Field */}
    <div className="flex justify-start items-center">
      <div className="bg-zinc-600 rounded-lg p-2">
        <Mail className="text-green-500 w-6 h-6" />
      </div>
      <div className="p-2">
        <p className="flex items-center">EMAIL:</p>
        <div className="flex items-center">
          <a
            href="mailto:sameerkamble1130@gmail.com"
            className="text-lg text-zinc-300 underline truncate inline-block w-full max-w-[calc(100%-92px)]"
          >
            sameerkamble1130@gmail.com
          </a>
        </div>
      </div>
    </div>

    {/* Resume Field */}
    <div className="flex justify-start items-center space-x-2 mt-4">
      <div className="bg-zinc-600 rounded-lg p-2">
        <Doc className="text-green-500 w-6 h-6" />
      </div>
      <div className="p-2">
        <p className="flex items-center">RESUME:</p>
        <div className="flex items-center">
          <a
            href="https://www.dropbox.com/scl/fi/jcbn7rl9ybnqbkt5eeic4/Sameer_ind.pdf?rlkey=0z2w22xe3th4yqgraxmpwg53e&st=ml4lurpk&dl=0"
            className="text-lg text-zinc-300  truncate inline-block w-full "
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>

    {/* Location Field */}
    <div className="flex justify-start items-center space-x-2 mt-4">
      <div className="bg-zinc-600 rounded-lg p-2">
        <Loc className="text-green-500 w-6 h-6" />
      </div>
      <div className="p-2">
        <p className="flex items-center">LOCATION:</p>
        <div className="flex items-center">
          <a
            href="#"
            className="text-lg text-zinc-300 truncate inline-block w-full "
          >
            India & Canada
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 p-4">
            <a
              href="https://www.linkedin.com/in/sameer-kamble11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-zinc-600 rounded-lg p-2">
                <Linkedin className="w-4 h-4" />
              </div>
            </a>
            <a
              href="https://github.com/sameer1130"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-zinc-600 rounded-lg p-2">
                <Github className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
