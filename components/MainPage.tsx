import AboutMe from "./AboutMe";
import Bio from "./Bio";

export default function MainPage() {
  return (
    <div className="flex  h-screen overflow-hidden lg:pb-12">
      {/* Main container for both sections */}
      <div className="flex w-full h-full overflow-y-auto overflow-x-hidden">
        {/* Bio Section */}
        <div className="xl:ml-[260px] p-4 w-full lg:max-w-[30%] xl:max-w-[25%] lg:ml-[40px]">
          <Bio />
        </div>

        {/* AboutMe Section */}
        <div className="p-4 flex-1 lg:mr-[40px] lg:ml-[-60px] lg:pb-8">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
