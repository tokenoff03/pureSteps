import { useEffect } from "react";
import p from "./Preloader.module.css";



function Preloader() {

    

  return (
    <div className={p.Preloader}>
        <div class={p.pl}>
            <div class={p.pl__outer_ring}></div>
            <div class={p.pl__inner_ring}></div>
            <div class={p.pl__track_cover}></div>
            <div class={p.pl__ball}>
                <div class={p.pl__ball_texture}></div>
                <div class={p.pl__ball_outer_shadow}></div>
                <div class={p.pl__ball_inner_shadow}></div>
                <div class={p.pl__ball_side_shadows}></div>
            </div>
        </div>
    </div>
  );
}

export default Preloader;