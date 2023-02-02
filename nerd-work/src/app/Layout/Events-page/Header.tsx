import React from 'react';
import Navbar from '../../components/Navbar';
import COMICON from '../Events-page/img/comiccon.png'

class Header extends React.Component {
  render() {
    return <><div className="event-container w-full md:h-[130vh] lg:h-[130vh]">
      <div className="nav absolute w-full p-2">
        <div>
          <Navbar></Navbar>
        </div>
      </div>
      <div className="flex h-full">
        <div className="bg-transparent flex flex-col justify-center items-center w-[40%]">
          <div className="bg-transparent w-[80%] h-[70%]">
            <img src={COMICON} width="200px" className="comico-logo" />
            <div className="comic-con py-4 absolute z-50">
              <p className="sub-title nerd-p">Nigeria's Biggest Comic Con</p>
              <h1 className="title pb-4">
                NerdWork<br></br>
                Comic-con<br></br>
                2023
              </h1>
              {/* <h1 className="title pb-4 md:hidden lg:hidden">
      NerdWork<br></br>
      Comic-con
      2023
    </h1> */}
              <button className="ticket-Drops rounded-md">
                Ticket Drops
              </button>
            </div>
            <div className="event-bottom bg-black h-[10%] w-full md:hidden lg:hidden">
              <div className=" w-full flex justify-center">
                <button className="w-[60px] h-[60px] rounded-md px-2 m-2">

                </button>
                <button className="w-[60px] h-[60px] rounded-md px-2 m-2">

                </button>
                <button className="w-[60px] h-[60px] rounded-md px-2 m-2">

                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="img-1 w-[20%] "></div>
        <div className="img-2 w-[20%] "></div>
        <div className="img-3 w-[20%] "></div>
      </div>
    </div>
    </>
  }
}

export default Header;