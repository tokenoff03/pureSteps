import s from "./Sneakers.module.css";


function Sneakers() {
  return (
    <div className={s.Sneakers} id="sneakers">
        <h3>До/После</h3>
        <div className={s.images}>
            <img src="./image/sneakers1.png" alt="shoes"/>
            <img src="./image/sneakers2.png" alt="shoes"/>
            <img src="./image/sneakers3.png" alt="shoes"/>
            <img src="./image/sneakers4.png" alt="shoes"/>
        </div>
        <a href="https://www.instagram.com/puresteps.kz/" target="_blank">Больше работ <img src="./image/instagram.png" alt="instagram"/></a>
    </div>
  );
}

export default Sneakers;