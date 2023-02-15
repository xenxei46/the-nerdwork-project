import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-green-500 text-md items-center cursor-pointer fixed right-10 top-2 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#1E9E1E"
          viewBox="0 0 100 80"
          width="20"
          height="20"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}
      <div
        className={`top-0 right-0 w-[70vw] bg-zinc-900  p-10 pl-20 text-green-4=500 text-md fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-2xl font-semibold text-white">
          <ul className="py-2 -px-8">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">My-work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </h3>
      </div>
    </>
  );
};

export default Sidebar;
// const Sidebar = () => {
//     return (
//         // <div id="menu" class="sidebar absolute z-50 bg-red-400  w-[70%] h-[100%] ">
//         //         <ul className="">
//         //                 <li>Home</li>
//         //                 <li>About</li>
//         //                 <li>Contact</li>
//         //                 <li>Work</li>      
//         //         </ul>    
//         //      <a href="http" className="closebtn text-xl" onclick="closeFunction()">&times;</a>
//         // </div>
//     )
//   }
  
//   export default Sidebar
  