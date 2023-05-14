import h from "./Header.module.css";


function Header() {
  return (
    <div className={h.header}>
      <header>
        <div className="container">
          <div className={h.head}>

            
            <div className={h.img}>
              s
            </div>
            
            <nav>
               <ul>
                  <li>
                    <p>Прайс</p>
                  </li>
                  <li>
                    <p>До/после</p>
                  </li>
                  <li>
                    <p>Отзывы</p>
                  </li>
                  <li>
                    <p>Контакты</p>
                  </li>
               </ul>
               <button><p>Заказать курьера</p></button>
            </nav>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;