import AboutMe from "./AboutMe";
import Bio from "./Bio";

export default function MainPage() {
  return (
    <div className="flex h-screen overflow-hidden lg:pb-12">
      {/* Main container for both sections */}
      <div className="flex lg:px-20 lg:pt-12 w-full h-full overflow-y-auto ">
        {/* Bio Section */}
        <div className=" lg:ml-8 p-4 w-full xl:max-w-[25%] lg:ml-0">
          <Bio />
        </div>

        {/* AboutMe Section */}
        <div className="p-4 flex-1 lg:mr-[40px] lg:ml-[-40px] lg:pb-8">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
