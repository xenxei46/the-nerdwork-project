import React from 'react';
// import '..../App.css'

class Navbar extends React.Component {
  render() {
    return <div className="navbar w-[100%] px-8 flex justify-center">
        <nav className="w-full flex justify-center">
            <div className=" w-[50%]">
                <button className="w-8 h-8 rounded-md px-2 m-1">
                    1
                </button>
                <button className="w-8 h-8 rounded-md px-2 m-1">
                    2
                </button>   
                <button className="w-8 h-8 rounded-md px-2 m-1">
                    3
                </button>   
                <button className="w-30 h-8 rounded-md px-2 m-2">
                    Join our community
                </button>   
              
            </div>
            <div className=" w-[50%] flex justify-end">
                <button className="w-16 h-8 rounded-md px-2 m-2">
                    Nerdwork
                </button> 
                <button className="w-16 h-8 rounded-md px-2 m-2">
                    Buy tickets
                </button> 
            </div>
        </nav>
    </div>
  }
}
export default Navbar;