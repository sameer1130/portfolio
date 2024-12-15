import AboutMe from "./AboutMe";
import Bio from "./Bio";

export default function MainPage() {
  return (
    <div className="flex h-screen overflow-hidden lg:pb-12">
      {/* Main container for both sections */}
      <div className="flex lg:px-8 lg:pt-12 xl:px-20 xl:pt-12 w-full h-full overflow-y-auto ">
        {/* Bio Section */}
        <div className="lg:py-4 xl:ml-8  xl:p-4 xl:w-full xl:max-w-[25%] xl:ml-0">
          <Bio />
        </div>

        {/* AboutMe Section */}
        <div className="lg:py-4 xl:p-4 xl:mr-[40px] xl:ml-[-40px] xl:pb-8">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
