interface NavBarProps {
  onNavigate: (section: string) => void;
}

export default function NavBar({ onNavigate }: NavBarProps) {
  return (
    <div>
      {/* NavBar for Large Screens */}
      <div className="hidden lg:block w-full md:w-auto p-4 bg-zinc-600 border-4 border-gray-400 rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
          <li>
            <a
              href="#"
              onClick={() => onNavigate("about")}
              className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => onNavigate("resume")}
              className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => onNavigate("projects")}
              className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => onNavigate("contact")}
              className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* NavBar for Small Screens */}
      <div className="lg:hidden rounded-tl-3xl rounded-tr-3xl fixed bottom-0 left-0 right-0 bg-zinc-600 text-white shadow-lg z-50">
        <ul className="flex justify-around items-center p-4">
          <li>
            <a
              href="#"
              onClick={() => onNavigate("about")}
              className="py-2 px-4 text-white hover:bg-green-500 rounded transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => onNavigate("resume")}
              className="py-2 px-4 text-white hover:bg-green-500 rounded transition"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => onNavigate("projects")}
              className="py-2 px-4 text-white hover:bg-green-500 rounded transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => onNavigate("contact")}
              className="py-2 px-4 text-white hover:bg-green-500 rounded transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
