import f from "./Footer.module.css";


function Footer() {
  return (
    <div className={f.footer}>
        <div className={f.content}>
            <img src="./image/logo.png"/>

            <div className={f.footerNav}>
                <div>
                    <p>Прайс</p>
                    <p>До/После</p>
                </div>
                <div>
                    <p>Отзывы</p>
                    <p>Контакты</p>
                </div>
            </div>

            <button>Заказать курьера</button>
        </div>

        <div className={f.hr}>

        </div>

        <div className={f.bottom_content}>
            <p>© a_leekhan.designer. All rights reserved.</p>
            <div className="social-media">
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

export default Footer;