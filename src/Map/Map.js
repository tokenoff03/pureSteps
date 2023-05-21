import m from "./Map.module.css";


function Map() {
  return (
    <div className={m.Map} id="map">
        <a href="https://2gis.kz/almaty/search/%D0%A2%D0%A6%20Colibri%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A3%D0%B0%D0%BB%D0%B8%D1%85%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%2C%20170/firm/70000001022247355/76.955374%2C43.239667?m=76.925405%2C43.239342%2F13.54%2Fp%2F5.49%2Fr%2F3.17" target="_blank"><img src="./image/Location.png" alt="map"/></a> 
        <div className={m.box}>
            <p>Удобное расположение</p>
            <p>Наш приемный пункт расположен около станции метро Абая</p>
            <a href="https://2gis.kz/almaty/search/%D0%A2%D0%A6%20Colibri%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A3%D0%B0%D0%BB%D0%B8%D1%85%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%2C%20170/firm/70000001022247355/76.955374%2C43.239667?m=76.925405%2C43.239342%2F13.54%2Fp%2F5.49%2Fr%2F3.17" target="_blank">Построить маршрут</a>
        </div>
        <div className={m.info}>
            <p>Каждый день с 10:00 до 21:00</p>
            <p>ТЦ Colibri, улица Уалиханова, 170</p>
            <p>+7 706 423 00 97</p>
            <div className="social-media map-social-media">
              <a href="#" target="_blank"><div className="social-media-circle">
                  <img src="./image/whatsApp.png" alt="whatsApp"/>
              </div></a>
              <a href="https://www.instagram.com/puresteps.kz/" target="_blank"><div className="social-media-circle">
                  <img src="./image/instagram.png" alt="instagram"/>
              </div></a>
            </div>
        </div>
    </div>
  );
}

export default Map;