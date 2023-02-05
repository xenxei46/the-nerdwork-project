import React from 'react';
import Navbar from '../../components/Navbar';
import COMICON from '../Events-page/img/comiccon.png';
import { motion } from "framer-motion";

class Header extends React.Component {
  render() {
    return (<div className="event-container w-full md:h-[100vh] lg:h-[100vh]">
      <div>
          <Navbar></Navbar>
      </div>
      <div className="flex w-[20%] h-full md:w-full lg:w-full">
        <div className="bg-transparent flex flex-col justify-center items-center w-[40%]">
          <div className="bg-transparent w-[80%] h-[75%]">
            <img src={COMICON} width="150px" className="comico-logo" />
            <div className="comic-con py-4 absolute z-50">
              
              <p className="sub-title nerd-p">Nigeria's Biggest Comic Con</p>
              <div className="title pb-4">
                <motion.h1 animate={{ fontSize: 50}}>
                   Nerdwork
                </motion.h1>
                <h1 className="event-name">Comic-con</h1>
                <h1 className="year">2023</h1>
              </div>
              <button className="ticket-Drops rounded-md">
                Ticket Drops
              </button>
            </div>
            <div className="event-bottom bg-black md:hidden lg:hidden">
              <div className="height w-full flex justify-center">
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
    )
  }
}

export default Header;