


export default function NavBar() {
    return (
        <div>
  <div>
    <div 
      className="hidden w-full md:block md:w-auto p-4 bg-zinc-600 border-4 border-gray-400 rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none" 
      id="navbar-default"
    >
      <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
        <li>
          <a 
            href="#" 
            className="block py-2 px-3 text-white rounded  hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
          >
            Resume
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

    )
}