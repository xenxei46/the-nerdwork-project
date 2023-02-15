import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, } from '@fortawesome/free-solid-svg-icons'

function About (){
    return(
     <div className="about w-[80%] lg:w-[80%] h-full flex flex-wrap justify-center" id="about">
        <div className=" lg:w-[75%] md:w-[75%] w-[100%] lg:ml-20 mt-10">
           <div className="title mt-10"> Biography </div>
           <div className="mt-28 flex  w-[100%] ">
            <div className="abt-Card flex justify-center flex-wrap items-center h-80 w-[50%]">
                    <div className="card-1 bg-green-400 rounded-lg lg:w-[90%] md:w-[90%] w-[90%] h-[70%] lg:h-60 md:h-60">
                       <h4 className="p-4">About me</h4>
                       <div className="px-4 user-profile text-sm">
                         <p>I'm wisdom John Ikoi, i'm a Web developer 
                            I studied Computer Science at Kensarowiwa Polytechnic.
                         </p>
                         <p className="py-2">
                           I'm Passionate about Technology, it is the only thing i have had
                            interest in my whole life so i just find my self doing this anyway.
                            I love to consume API's and solve real life problems using code.
                         </p>
                       </div>
                    </div>       
            </div>
            <div className="skill-rate lg:h-90 lg:w-[50%] md:h-90 md:w-[50%] w-[50%] h-80 rounded-md">
                  <h4 className="p-4">My Skils</h4>
                  <div className="skills lg:px-4 md:px-4">
                     <div className="front-end border-b-2 border-green-400 flex px-4">
                        <span className=" flex-1"><span className="">Front-end</span><br></br> Development</span>
                        <span className=" flex-1 flex justify-end items-center"><span><a href="#work">70%<FontAwesomeIcon icon={faCaretRight}/></a></span></span>
                     </div>
                     <div className="front-end border-b-2 border-green-400 flex px-4">
                        <span className=" flex-1"><span className="">Back-end</span><br></br> Development</span>
                        <span className=" flex-1 flex justify-end items-center"><span><a href="#work">10%<FontAwesomeIcon icon={faCaretRight}/></a></span></span>
                     </div>
                     <div className="front-end border-b-2 border-green-400 flex px-4">
                        <span className=" flex-1"><span className="">UI/UX</span><br></br> Design</span>
                        <span className=" flex-1 flex justify-end items-center"><span><a href="https://dribbble.com/">40%<FontAwesomeIcon icon={faCaretRight}/></a></span></span>
                     </div>
                     <div className="front-end border-b-2 border-green-400 flex px-4">
                        <span className=" flex-1"><span className="">Technical</span><br></br> Writting</span>
                        <span className=" flex-1 flex justify-end items-center"><span><a href="https://medium.com/@wisdomjohnikoi">60%<FontAwesomeIcon icon={faCaretRight}/><br></br></a><a href="https://dev.to/xenxei46/installing-angular-cli-locally-globally-3lei"><FontAwesomeIcon icon={faCaretRight}/></a></span></span>
                     </div>
                  </div>

            </div>
           </div>
        </div>
     </div>
    )
}


export default About;