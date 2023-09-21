import { useState } from "react";


function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('slider');
    setSidebarOpen(!sidebarOpen);
  };

  const toggleRoutes = () => {
    console.log('routes');
    setRoutesOpen(!routesOpen);
  };

  return (

    <div className="">
      <div className="bg-gray-800 text-white">
        {/* Mobile Navbar */}
        <div className="flex justify-between">
          <div className="lg:hidden p-4">
            <button onClick={toggleSidebar} className="text-white focus:outline-none">
              ☰
            </button>
          </div>
          <div className="lg:hidden p-4">
            <button onClick={toggleRoutes} className="text-white focus:outline-none">
              ☰
            </button>
          </div>
        </div>

        {/* Sidebar Drawer (visible on small screens) */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden fixed top-0 left-0 h-screen bg-gray-900 text-white p-4 w-64 transform transition-transform ease-in-out duration-300`}>
          <button onClick={toggleSidebar} className="text-white absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <h2 className="text-2xl">Sidebar</h2>
          {/* Sidebar links */}

          <div className=" pt-10 flex flex-col space-y-2">
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">Profile</a>
            <div
              className="cursor-pointer hover:bg-cyan-700 p-2 rounded-md"
              onClick={toggleDropdown}
            >
              <div className="flex justify-between">
                <p>Services</p> <p>▼</p>
              </div>
            </div>
            {dropdownOpen && (
              <div className="flex flex-col items-center bg-gray-700 rounded-md">
                <a href="#" className="hover:bg-cyan-700 p-2 w-full rounded-md">Link 1</a>
                <a href="#" className="hover:bg-cyan-700 p-2 w-full rounded-md">Link 2</a>
                <a href="#" className="hover:bg-cyan-700 p-2 w-full rounded-md">Link 3</a>
              </div>
            )}
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">Task</a>
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">Chart</a>
          </div>
        </div>


        {/* Mobile Routes (visible on small screens) */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen bg-gray-900 text-white p-4 w-64 transform transition-transform ease-in-out duration-300 ${routesOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={toggleRoutes} className="text-white absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          {/* Sidebar links */}

          <div className=" pt-10 flex flex-col space-y-2">
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">Home</a>
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">About</a>
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">Contact</a>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex bg-gray-800 p-4 justify-between items-center">
          <div className="space-x-4 text-center w-full mx-auto">
            {/* Add your navigation links here */}
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

      </div>

      <div className="flex">
        <div className="hidden md:block lg:basis-3/12 h-screen bg-gray-900 text-white">
          <div className=" pt-10 flex flex-col space-y-2">
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">Profile</a>
            <div
              className="cursor-pointer hover:bg-cyan-700 p-2 rounded-md"
              onClick={toggleDropdown}
            >
              <div className="flex justify-between">
                <p>Services</p> <p>▼</p>
              </div>
            </div>
            {dropdownOpen && (
              <div className="flex flex-col items-center bg-gray-700 rounded-md">
                <a href="#" className="hover:bg-cyan-700 p-2 w-full rounded-md">Link 1</a>
                <a href="#" className="hover:bg-cyan-700 p-2 w-full rounded-md">Link 2</a>
                <a href="#" className="hover:bg-cyan-700 p-2 w-full rounded-md">Link 3</a>
              </div>
            )}
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">Task</a>
            <a href="#about" className="hover:bg-cyan-700 p-2 rounded-md">Chart</a>
          </div>
        </div>

        <div className="lg:basis-9/12 border p-5">
          <h1 className="text-4xl text-center mb-5">Main Content</h1>
          <div className="space-y-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero ullam quam tempore nulla obcaecati quos beatae, consectetur eum, quisquam quas esse aut dignissimos saepe veritatis, magnam labore omnis recusandae aliquid iste officiis molestiae facilis modi. Tempore sequi officia illum fugiat quod autem, possimus reiciendis laudantium? Odit excepturi temporibus distinctio debitis, in dolorum laborum esse optio eligendi tenetur fugiat sed, deserunt itaque eius totam earum minima vitae assumenda nihil quod quos. Quas soluta quam illo repudiandae autem, fuga aperiam quos vel provident quibusdam perspiciatis impedit eaque excepturi in accusamus aut, minus voluptatum ea numquam. Consequatur placeat ducimus est possimus dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero ullam quam tempore nulla obcaecati quos beatae, consectetur eum, quisquam quas esse aut dignissimos saepe veritatis, magnam labore omnis recusandae aliquid iste officiis molestiae facilis modi. Tempore sequi officia illum fugiat quod autem, possimus reiciendis laudantium? Odit excepturi temporibus distinctio debitis, in dolorum laborum esse optio eligendi tenetur fugiat sed, deserunt itaque eius totam earum minima vitae assumenda nihil quod quos. Quas soluta quam illo repudiandae autem, fuga aperiam quos vel provident quibusdam perspiciatis impedit eaque excepturi in accusamus aut, minus voluptatum ea numquam. Consequatur placeat ducimus est possimus dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero ullam quam tempore nulla obcaecati quos beatae, consectetur eum, quisquam quas esse aut dignissimos saepe veritatis, magnam labore omnis recusandae aliquid iste officiis molestiae facilis modi. Tempore sequi officia illum fugiat quod autem, possimus reiciendis laudantium? Odit excepturi temporibus distinctio debitis, in dolorum laborum esse optio eligendi tenetur fugiat sed, deserunt itaque eius totam earum minima vitae assumenda nihil quod quos. Quas soluta quam illo repudiandae autem, fuga aperiam quos vel provident quibusdam perspiciatis impedit eaque excepturi in accusamus aut, minus voluptatum ea numquam. Consequatur placeat ducimus est possimus dolorem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
