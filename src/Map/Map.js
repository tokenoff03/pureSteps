import m from "./Map.module.css";


function Map() {
  return (
    <div className={m.Map}>
        <img src="./image/Location.png" alt="map"/>
        <div className={m.box}>
            <p>Удобное расположение</p>
            <p>Наш приемный пункт расположен около станции метро Абая</p>
            <button>Построить маршрут</button>
        </div>
        <div className={m.info}>
            <p>Каждый день с 10:00 до 21:00</p>
            <p>ТЦ Colibri, улица Уалиханова, 170</p>
            <p>+7 706 423 00 97</p>
            <div className="social-media map-social-media">
              <a href="#"><div className="social-media-circle">
                  <img src="./image/whatsApp.png" alt="whatsApp"/>
              </div></a>
              <a href="#"><div className="social-media-circle">
                  <img src="./image/instagram.png" alt="instagram"/>
              </div></a>
            </div>
        </div>
    </div>
  );
}

export default Map;