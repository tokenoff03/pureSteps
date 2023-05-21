import { useEffect } from "react";
import p from "./Preloader.module.css";



function Preloader() {

    

  return (
    <div className={p.Preloader}>
        <div className={p.pl}>
            <div className={p.pl__outer_ring}></div>
            <div className={p.pl__inner_ring}></div>
            <div className={p.pl__track_cover}></div>
            <div className={p.pl__ball}>
                <div className={p.pl__ball_texture}></div>
                <div className={p.pl__ball_outer_shadow}></div>
                <div className={p.pl__ball_inner_shadow}></div>
                <div className={p.pl__ball_side_shadows}></div>
            </div>
        </div>
    </div>
  );
}

export default Preloader;