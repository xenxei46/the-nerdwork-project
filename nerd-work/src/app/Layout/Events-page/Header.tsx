import React from 'react';
import Navbar from '../../components/Navbar';
import COMICON from '../Events-page/img/comiccon.png';
import { motion } from "framer-motion";

function Header() {

    return (<div className="event-container w-full md:h-[100vh] lg:h-[100vh]">
      <div>
          <Navbar></Navbar>
      </div>
      <div className="flex w-[20%] h-full md:w-full lg:w-full">
        <div className="bg-transparent flex flex-col justify-center items-center w-[40%]">
          <div className="bg-transparent w-[80%] h-[75%]">
            <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1,x:0, y:-20,}}
              transition={{ delay: 0.5, duration: 0.5 }}
              >
              <img src={COMICON} width="150px" className="comico-logo" />
            </motion.div>
           
            <div className="comic-con py-4 absolute z-50">
                <motion.p 
                  initial={{opacity: 0}} 
                  animate={{opacity: 1, x:0, y:-20,}}
                  transition={{ delay: 0.6, duration: 0.6}}
                  className="sub-title nerd-p">Nigeria's Biggest Comic Con
                </motion.p>
              <div className="title pb-4">
                <motion.h1
                   initial={{opacity: 0}} 
                   animate={{opacity: 1, x:0, y:-20}}
                   transition={{delay: 0.8, duration: 0.2}}
                   >
                   Nerdwork
                </motion.h1>
                <motion.h1 
                   initial={{opacity: 0}} 
                   animate={{opacity: 1, x:0, y:-20}}
                   transition={{delay: 0.9, duration: 0.2}}
                   >
                  Comic-con
                  </motion.h1>
                <motion.h1 
                  initial={{opacity: 0}} 
                  animate={{opacity: 1, x:0, y:-20}}
                  transition={{delay: 1, duration: 0.2}}
                  >
                  2023
                  </motion.h1>
              </div>
              <motion.button 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1, duration: 1}}
                className="ticket-Drops rounded-md">
                Ticket Drops
              </motion.button>
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
        <div className="img-1 w-[20%]"></div>
        <div className="img-2 w-[20%] "></div>
        <div className="img-3 w-[20%] "></div>
      </div>
    </div>
    )
  }

export default Header;