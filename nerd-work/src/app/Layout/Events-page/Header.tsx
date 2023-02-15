import React from 'react';
import Navbar from '../../components/Navbar';
import COMICON from '../Events-page/img/comiccon.png';
import { motion } from "framer-motion";
import image1 from '../../../assets/img/img-1.jpg';
import image2 from '../../../assets/img/img-2.jpg';
import image3 from '../../../assets/img/img-3.jpg';
import community from '../../../assets/Events-img/community.png';
import ticket from '../../../assets/Events-img/ticket.png';
import logo from '../../../assets/Events-img/logo.png';

function Header() {

    return (<div className="event-container w-full md:h-[100vh] lg:h-[100vh]">
      <div>
          <Navbar></Navbar>
      </div>
      <div className="flex w-[20%] h-full md:w-full lg:w-full">
        <div className="bg-transparent flex flex-col justify-center items-center w-[40%]">
          <div className="bg-transparent w-[80%] h-[60%]">
            <motion.div className="hidden md:block lg:block xl:block"
              initial={{opacity: 0.5}}
              animate={{opacity: 1,x:0, y:-30,}}
              transition={{ delay: 0.5, duration: 0.5 }}
              >
              <img src={COMICON} className="comico-logo w-[0px] lg:w-[150px]" />
            </motion.div>
            <div>
                <img src={COMICON} className="comico-logo w-[0px] lg:w-[150px] md:hidden lg:hidden xl:hidden" />
            </div>
            <div className="comic-con py-4 absolute z-50">
                <motion.p 
                  initial={{opacity: 0}} 
                  animate={{opacity: 1, x:0, y:-25,}}
                  transition={{ delay: 0.6, duration: 0.6}}
                  className="sub-title nerd-p">Nigeria's Biggest Comic Con
                </motion.p>
              <div className="title md:pb-4 lg:pb-4 xl:pb-4">
                <motion.h1
                   initial={{opacity: 0}} 
                   animate={{opacity: 1, x:0, y:-25}}
                   transition={{delay: 0.9, duration: 0.2}}
                   >
                   Nerdwork
                </motion.h1>
                <motion.h1 
                   initial={{opacity: 0}} 
                   animate={{opacity: 1, x:0, y:-25}}
                   transition={{delay: 1, duration: 0.2}}
                   >
                  Comic-con
                  </motion.h1>
                <motion.h1 
                  initial={{opacity: 0}} 
                  animate={{opacity: 1, x:0, y:-25}}
                  transition={{delay: 1.1, duration: 0.2}}
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
              <div className="height w-full flex justify-center items-center">
                <button className=" w-[70px] h-[70px] rounded-md px-2 m-2">
                  <span className="flex justify-center items-center flex-col">
                    <img src={community} className="w-8 -pb-2 "/>
                    <p>Community</p>
                  </span>
                </button>
                <button className="w-[70px] h-[70px] rounded-md px-2 m-2">      
                  <span className="flex justify-center items-center flex-col">
                    <img src={logo} className="w-8"/>
                    <p>Nerdwork</p>
                  </span> 
                </button>
                <button className="w-[70px] h-[70px] rounded-md px-2 m-2">
                <span className="flex justify-center items-center flex-col">
                    <img src={ticket}  className="w-8"/>
                    <p>Buy tickets</p>
                  </span>   
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[20%] h-full hidden md:block lg:block xl:block">
          <div className="pic-box h-[100%] bg-black object-cover">
            <img src={image1} className="object-cover "/>
          </div>
        </div>
        <div className=" w-[20%] h-full hidden md:block lg:block xl:block">
          <div className="pic-box h-[100%] bg-black  object-cover">
            <img src={image2} className="object-cover" />
          </div>
        </div>
        <div className=" w-[20%] h-full hidden md:block lg:block xl:block">
          <div className="pic-box h-[100%] bg-black  object-cover">
            <img src={image3} className="object-cover" />
          </div>
        </div>
      </div>
    </div>  
    )
  }

export default Header;