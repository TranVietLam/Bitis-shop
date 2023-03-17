import React, { useState } from "react";
import "./style.css";

const SocialConnect = () => {
    //scroll to open
    const [social, setSocial] = useState(false)
    const changeSocial = () => {
        if (window.scrollY >= 700) {
            setSocial(true);
          } else {
            setSocial(false);
          }
    }
    window.addEventListener("scroll", changeSocial);

    //scroll to top
        const handleScrollTop = () => {
            window.scrollTo(0,0)
        }
  return (
    <>
      <div className={social ? "social-container active" : "social-container"}>
        <button title="Lên đầu trang" className="goTop" onClick={()=> handleScrollTop()}>

        </button>
        <a className="icon-facebook" href="https://www.facebook.com/bitisthustore" target="_blank" rel="noopener noreferrer">
            
        </a>
        <a title="Chat với chúng tôi" className="icon-messenger" href="https://www.messenger.com/t/100044646572165" target="_blank" rel="noopener noreferrer">
            
        </a>
        <a className="icon-zalo" href="https://zalo.me/0879259755" target="_blank" rel="noopener noreferrer">
            
        </a>
      </div>
    </>
  );
};

export default SocialConnect;
