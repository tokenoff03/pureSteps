import h from "./Header.module.css";


function Header() {
  return (
    <div className={h.header}>
      <header>
          <div className={h.head}>
            <img src="./image/logo.png" alt="Logo" className={h.img}/>
            
            <nav>
               <ul>
                  <li>
                    <a href="#"><p>Прайс</p></a> 
                  </li>
                  <li>
                    <a href="#"><p>До/после</p></a> 
                  </li>
                  <li>
                    <a href="#"><p>Отзывы</p></a> 
                  </li>
                  <li>
                    <a href="#"><p>Контакты</p></a> 
                  </li>
               </ul>
               <button><p>Заказать курьера</p></button>
            </nav>
            
          </div>
        
      </header>
    </div>
  );
}

export default Header;