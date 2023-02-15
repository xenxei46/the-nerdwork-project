import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faBriefcase,faEnvelopeSquare,faMessage } from '@fortawesome/free-solid-svg-icons'

import user from '../assets/user.jpg';


import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact';
import Work from '../Components/Work/Work'
import Sidebar from "../Components/Sidebar";

function Home() {
  const card = [
    {
      id: 1,
      body: 'Home',
      icon: faHome,
      link:'#home'
    },
    {
      id: 2,
      body: 'About',
      icon: faUser,
      link:'#about'
    },
    {
      id: 3,
      body: 'my-work',
      icon: faBriefcase,
      link:'#work'
    },
    {
      id: 4,
      body: 'Contact',
      icon: faEnvelopeSquare,
      link:'#contact'
    },
  ]
  return (
    <div className="home w-full h-full ">
      {/* Header and Navigator for sm to md */}
        <header className="header">
          <div className="mobile-menu lg:hidden">        
                  <div className="mobile-nav bg-zinc-800 flex w-full h-16 md:h-20 items-center">
                        <a href="#home" className="text-green-500 text-md flex-1 pl-6">XENXEI46</a>
                        <Sidebar />  
                  </div>   
           </div>
        </header>
      {/* Navigator for lg to Xl */}
        <div className="Nav-lg h-full flex justify-start items-center">
              <div className="nav fixed">
                <div className='template ml-[50%]'> 
                    {card.map((card) => (
                      <div className='blog-preview flex items-center h-full w-full' key={card.id}>
                        <a href={card.link}>
                          <div className='box flex justify-center items-center card bg-zinc-900 w-44 h-34 mt-4 hover:bg-green-400'>
                            <div>
                              <span className="flex justify-center text-lg"><FontAwesomeIcon icon={card.icon}/></span>
                              <span className="text-sm">{card.body}</span> 
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
              {/* content area for all */}
              <div className="content h-full w-full flex flex-wrap justify-center">
                <div className="home w-[80%] lg:w-[80%] h-full  flex flex-wrap" id="home">
                   <div className="text w-[100%] lg:w-[50%] xl:w-[50%] order-2 lg:order-1 flex justify-center lg:justify-end lg:items-center  ">
                     <div className="home-grid lg:w-[80%] p-6 flex">
                       <div className="all-text">
                          <div className="name hover:text-green-400">
                            <p>I'm Wisdom Ikoi</p>
                          </div> 
                          <div className="stack hover:text-green-400">
                            <p>Web Developer | UI/UX Designer | Technical Writter</p>
                          </div>
                          <div className="location hover:text-green-400">
                          <p>Front-End Developer based in Port Harcourt City</p>
                          </div>   
                          <section className="hire-btn flex py-6">
                            <a href="tel:+234-906-814-0123">
                            <button className="call-btn hover:text-green-400 hover:border-green-400" id="button"><FontAwesomeIcon icon={faMessage}/>  Reach Me</button></a>
                          </section>
                       </div>
                     </div>
                   </div>
                   <div className="image  w-[100%] lg:w-[50%] order-1 lg:order-2 flex justify-center items-center ">
                    <div className="user-img" >
                      <img src={user} alt="user" />
                    </div>
                   </div>
                </div>
                <About/>
                <Work/>
                <Contact/>
              </div>     
        </div>  
    </div>
  );
}

export default Home;
