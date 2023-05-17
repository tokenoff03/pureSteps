import s from "./Sneakers.module.css";


function Sneakers() {
  return (
    <div className={s.Sneakers}>
        <h3>До/После</h3>
        <div className={s.images}>
            <img src="./image/sneakers1.png" alt="shoes"/>
            <img src="./image/sneakers2.png" alt="shoes"/>
            <img src="./image/sneakers3.png" alt="shoes"/>
            <img src="./image/sneakers4.png" alt="shoes"/>
        </div>
        <a href="#">Больше работ <img src="./image/instagram.png" alt="instagram"/></a>
    </div>
  );
}

export default Sneakers;