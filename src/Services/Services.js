import ss from "./Services.module.css";


function Services() {
  return (
    <div className={ss.Services}>
        
        <h3>Прайс и услуги </h3>
        <div className={ss.content}>
            <div className={ss.cleaning}>
                <img src="./image/serviceSneakers.png" alt="sneakers"/>
                <p className="h4">Химчистка</p>
                <p className={ss.underH4}>Чистим за 3 дней</p>

                <div className={ss.price}>
                    <div className={ss.price_content}>
                        <p className={ss.service}>Текстиль</p>
                        <p className={ss.cost}>5990 kzt</p>
                    </div>
                    <div className={ss.price_content}>
                        <p className={ss.service}>Искусственная кожа</p>
                        <p className={ss.cost}>5990 kzt</p>
                    </div>
                    <div className={ss.price_content}>
                        <p className={ss.service}>Сетка</p>
                        <p className={ss.cost}>5990 kzt</p>
                    </div>
                    <div className={ss.price_content}>
                        <p className={ss.service}>Резина</p>
                        <p className={ss.cost}>6990 kzt</p>
                    </div>
                    <div className={ss.price_content}>
                        <p className={ss.service}>Кожа</p>
                        <p className={ss.cost}>6990 kzt</p>
                    </div>
                    <div className={ss.price_content}>
                        <p className={ss.service}>Нубук</p>
                        <p className={ss.cost}>6990 kzt</p>
                    </div>
                    <div className={ss.price_content}>
                        <p className={ss.service}>Timberland, UGG</p>
                        <p className={ss.cost}>7990 kzt</p>
                    </div>
                    <div className={ss.price_content}>
                        <p className={ss.service}>Зимняя обувь</p>
                        <p className={ss.cost}>7990 kzt</p>
                    </div>
                </div>
            </div>
            <div className={ss.additional}>
                <div className={ss.additional_price}>
                    <div className={ss.additional_price_content}>
                        <p>Доп. услуги</p>
                        <p>Водоотталкивающая<br/>пропитка</p>
                        <img src="./image/spray.png" alt="spray"/>
                        <p>2000 kzt</p>
                    </div>
                    <div className={ss.additional_price_content}>
                        <p>Доп. услуги</p>
                        <p>Устранение царапин<br/>на обуви</p>
                        <img src="./image/brush.png" alt="brush"/>
                        <p>4500 kzt</p>
                    </div>
                </div>
                <div className={ss.additional_price}>
                    <div className={ss.additional_price_content}>
                        <p>Доп. услуги</p>
                        <p>Частичная покраска</p>
                        <img src="./image/spray.png" alt="spray"/>
                        <p>4500 kzt</p>
                    </div>
                    <div className={ss.additional_price_content}>
                        <p>Доп. услуги</p>
                        <p>Восстановление<br/>цвета замши, чубук,<br/>кожа</p>
                        <img src="./image/spray.png" alt="spray"/>
                        <p>4500 kzt</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;