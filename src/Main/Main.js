import m from "./Main.module.css";


function Main(props) {
  return (
    <div className={m.Main}>
        
        <img src="./image/underMainShoes.png" alt="Shoes" className={m.underMainShoes}/>
        <img src="./image/mainShoes.png" alt="Shoes" className={m.mainShoes}/>
        <p className={m.h1}>Чистая обувь<br/><span className={m.underH1}>за 3 дня</span></p>
        <p className={m.underTitle}>Профессиональная химчистка и реставрация обуви в центре Алматы. Бесплатный курьер. Заберем и доставим.</p>

        <div className={m.mainForm}>
            <p>Когда забрать обувь?</p>
            <input type="date" value={props.date} onChange={(e)=>props.setDate(e.target.value)}/>
            <a href="#order">Заказать курьера</a>
        </div>

        <div className="social-media">
            <a href="#" target="_blank"><div className="social-media-circle">
                <img src="./image/whatsApp.png" alt="whatsApp"/>
            </div></a>
            <a href="https://www.instagram.com/puresteps.kz/" target="_blank"><div className="social-media-circle">
                <img src="./image/instagram.png" alt="instagram"/>
            </div></a>
        </div>
        
        
    </div>
  );
}

export default Main;