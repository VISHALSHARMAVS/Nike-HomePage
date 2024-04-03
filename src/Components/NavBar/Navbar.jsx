import Button from "../Button/Button"
import Home from "../Home/Home"

function Navbar() {
    return (
      
      <nav className="bg-white border-gray-200 px-2 sm:px-4 max-w-full  py-2.5 flex justify-between m-auto items-center ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <img src="/assets/brand_logo.png" alt="logo" className="mr-3 h-12 cursor-pointer " />
        </div>
        <div className="hidden justify-between items-center w-full sm:flex sm:w-auto mx-auto max-w-screen-xl">
        <ul className="flex flex-col mt-4 font-medium sm:flex-row sm:space-x-8 sm:mt-0">
            <li href = {Home} className=" cursor-pointer">
                Menu
            </li>
            <li href = "#"className=" cursor-pointer">
                Location
            </li>
            <li href = "#"className=" cursor-pointer">
                About
            </li>
            <li href = "#"className=" cursor-pointer">
                Contact
            </li>
            
        </ul>
        </div>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Button>Login</Button>
        </div>
      </nav>
      
    )
  }
  
  export default Navbar