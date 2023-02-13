import React from 'react';
import fb from '../../assets/socials/Fbfavicon.ico.png';
// import twitter from '../../assets/socials/twitterfavicon.ico.png';
import ig from '../../assets/socials/IGfavicon.ico.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
// import '..../App.css'

class Navbar extends React.Component {
  render() {
    return <div className="nav absolute w-[100%] px-8 flex items-center justify-center">
        <nav className="w-full flex justify-center">
            <div className=" w-[50%]">
                <button className="w-8 h-8 rounded-md mt-2 px-2 m-1">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="w-8 h-8 rounded-md px-2 m-1">
                   <FontAwesomeIcon icon={faFacebook}/>
                </button>   
                <button className="w-8 h-8 rounded-md px-2 m-1">
                    <FontAwesomeIcon icon={faInstagram }/>
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