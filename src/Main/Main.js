import m from "./Main.module.css";


function Main() {
  return (
    <div className={m.Main}>
        <img src="./image/mainShoes.png" alt="Shoes" className={m.mainShoes}/>
        <img src="./image/underMainShoes.png" alt="Shoes" className={m.underMainShoes}/>
        <p className={m.h1}>Чистая обувь<br/><span className={m.underH1}>за 3 дня</span></p>
        <p className={m.underTitle}>Профессиональная химчистка и реставрация обуви в центре Алматы. Бесплатный курьер. Заберем и доставим.</p>

        <div className={m.mainForm}>
            <p>Когда забрать обувь?</p>
            <input type="date"/>
            <button>Заказать курьера</button>
        </div>

        <div className="social-media">
            <a href="#"><div className="social-media-circle">
                <img src="./image/whatsApp.png" alt="whatsApp"/>
            </div></a>
            <a href="#"><div className="social-media-circle">
                <img src="./image/instagram.png" alt="instagram"/>
            </div></a>
        </div>
        
        
    </div>
  );
}

export default Main;