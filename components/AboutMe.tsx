'use client'
import Card from "./Card";
import NavBar from "./NavBar";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import { useState } from "react";

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState('about');
  
  return (
    <div className="mb-12 w-fit lg:pb-16">
      <div className="relative">
        <div className="text-white bg-zinc-800 border border-zinc-500 rounded-3xl p-8">
          <div className="flex justify-between items-center">
            {/* Section Title */}
            <div className="font-bold text-3xl py-4  border-b-4 w-fit border-green-500">
              {activeSection === 'about' && "About Me"}
              {activeSection === 'resume' && "Resume"}
              {activeSection === 'contact' && "Contact"}
              {activeSection === 'projects' && "Projects"}
            </div>

            {/* NavBar for Large Screens */}
            <div className="hidden lg:block absolute top-0 right-0">
              <NavBar onNavigate={setActiveSection} />
            </div>
          </div>

          {/* Active Section Content */}
          {activeSection === "about" && (
            <>
              <div className=" text-lg text-zinc-300">
                <div className="py-4">
                  I&apos;m a Full Stack Web Developer with a passion for crafting robust and efficient backend systems. While adept in both front-end and back-end development, my true thrill lies in architecting the core functionalities that power a seamless user experience.
                </div>
                <div className="py-4">
                  A self-proclaimed tech enthusiast, I&apos;m constantly invigorated by the ever-evolving landscape of the industry. My curiosity extends to emerging technologies like Blockchain and Machine Learning, allowing me to stay informed and integrate these advancements into my solutions when appropriate.
                </div>
                <div className="py-4">
                  Beyond the back-end, I&apos;ve also gained valuable experience in UI/UX design. My freelance projects have garnered positive feedback, demonstrating my ability to bridge the gap between technical expertise and user-centric design principles.
                </div>
              </div>

              {/* What I'm Doing Section */}
              <div className="mt-6" >
                <div className="font-bold text-3xl pb-8">
                  What I&apos;m Doing
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <Card
                    imgSrc="/Images/icons8-code.gif"
                    title="Web Development"
                    description="Building the future by developing Web Applications using a blend of front-end and back-end technologies."
                  />
                  <Card
                    imgSrc="/Images/icons8-mind-map.gif"
                    title="Machine Learning/AI"
                    description="Utilizing Artificial Intelligence (AI) and Machine Learning (ML) to create intelligent and adaptive systems."
                  />
                  <Card
                    imgSrc="/Images/icons8-bitcoin.gif"
                    title="Web3"
                    description="Exploring the potential of Blockchain technology to revolutionize data security and transparency."
                  />
                  <Card
                    imgSrc="/Images/icons8-figma (1).gif"
                    title="UI/UX Design"
                    description="Crafting User Interfaces (UI) and User Experiences (UX) that are intuitive, visually appealing, and user-friendly."
                  />
                </div>
              </div>
            </>
          )}
          {activeSection === "resume" && <Resume />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "contact" && <Contact />}
        </div>
      </div>

      {/* Padding for Small Screens */}
      <div className="lg:hidden h-16"></div>
    </div>
  );
}
