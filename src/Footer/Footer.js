import f from "./Footer.module.css";


function Footer() {
  return (
    <div className={f.footer}>
        <div className={f.content}>
            <img src="./image/logo.png"/>

            <div className={f.footerNav}>
                <div>
                    <p><a href="#services">Прайс</a></p>
                    <p><a href="#sneakers">До/После</a></p>
                </div>
                <div>
                    <p><a href="#reviews">Отзывы</a></p>
                    <p><a href="#map">Контакты</a></p>
                </div>
            </div>

            <a href="#order">Заказать курьера</a>
        </div>

        <div className={f.hr}>

        </div>

        <div className={f.bottom_content}>
            <p>© a_leekhan.designer | @tokenoff_a.developer | All rights reserved.</p>
            <div className="social-media">
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

export default Footer;