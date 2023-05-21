import h from "./Header.module.css";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import React, { useState } from 'react';

function Header() {

  const [nav,setNav] = useState(false);
  return (
    <div className={h.header}>
      <header>
          <div className={h.head}>
            <img src="./image/LogoPure.svg" alt="Logo" className={h.img}/>
            
            <nav className={nav ? h.active : ""}>
               <ul>
                  <li>
                    <a href="#services"><p onClick={()=>setNav(false)}>Прайс</p></a>
                  </li>
                  <li>
                    <a href="#sneakers"><p onClick={()=>setNav(false)}>До/после</p></a> 
                  </li>
                  <li>
                    <a href="#reviews"><p onClick={()=>setNav(false)}>Отзывы</p></a> 
                  </li>
                  <li>
                    <a href="#map"><p onClick={()=>setNav(false)}>Контакты</p></a> 
                  </li>
               </ul>
               <a href="#order"><p onClick={()=>setNav(false)}>Заказать курьера</p></a>
            </nav>
            <div onClick={() => setNav(!nav)} className={h.mobile_btn}>
              {
                nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> 
              }
              
            </div>
          </div>
        
      </header>
    </div>
  );
}

export default Header;