import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import user from '../../assets/user.jpg';
import { FaLinkedin, FaFacebookF, FaTwitterSquare, FaDribbble, FaFolder } from "react-icons/fa";

function Contact (){
    return(
    <div className="contact w-[80%] lg:w-[80%] h-full flex justify-center items-center flex-wrap" id="contact">
        <div>
            <div className="flex justify-center py-3">
                <div className="contact-img" >
                    <img src={user} alt="user" />
                </div>
            </div>
            <div>
                <h2 className="text-2xl flex justify-center ">Wisdom John Ikoi</h2>
            </div>
            <div className="flex py-3">
                <div className="flex">
                    <span className="flex items-center px-2">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                     <p>Wikoiplus@gmail.com</p>
                </div>
                <div className="flex">
                <span className="flex items-center px-2">
                    <FontAwesomeIcon icon={faPhone}/>
                </span>
                <a href="tel:+234-906-814-0123"> 
                <p>+234 0906 814 0123</p>
                </a>
                </div> 
            </div>
            <div className="flex justify-center">
                <div className="grid gird-cols-6 grid-cols-4 gap-4">
                    <div className="hover:text-green-400"> <a href="https://www.linkedin.com/in/wisdom-john-ikoi-409567198/"><FaLinkedin/></a></div>
                    <div className="hover:text-green-400"> <a href="https://web.facebook.com/wisdom.johnikoi"><FaFacebookF/></a></div>
                    <div className="hover:text-green-400"> <a href="https://twitter.com/wisdom_ikoi"><FaTwitterSquare/></a></div>
                    <div className="hover:text-green-400"> <a href="https://dribbble.com/"><FaDribbble/></a></div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default Contact;