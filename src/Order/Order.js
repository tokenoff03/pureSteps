import o from "./Order.module.css";
import React, { useState } from 'react';

function Order(props) {
    const [counter,setCounter] = useState(1);
    function minusCounter(){
        if(counter>1){
            setCounter(counter-1);
        }
    }

    function plusCounter() {
        setCounter(counter+1)
    }

    
    
  return (
    <div className={o.Order} id="order">
       <h3 className={o.h3}>Сэкономим Ваше время</h3>
       <p>Заберем и доставим по любому удобному адресу</p>

       <form >
            <div className={o.formContent}>
                <input type="text" placeholder="Ваше имя"/>
                <input type="number" placeholder="Телефон"/>
                <div className={o.counter_block}>
                    <p>Количество пар обуви:</p>
                    <div className={o.counter}>
                        <span className={`${counter > 1 ? o.blue : ""} ${o.minus}`} onClick={minusCounter}>
                            -
                        </span>
                        
                        <input type="number" value={counter} onChange={(e) => setCounter(e.target.value)}/>
                        <span className={o.plus} onClick={plusCounter}>
                            +
                        </span>
                    </div>
                </div>
            </div>

            <div className={o.formContent}>
                <input type="text" placeholder="Адрес"/>
                <input type="date" value={props.date} onChange={(e)=>props.setDate(e.target.value)}/>
                <button>Заказать курьера</button>
            </div>
       </form>
    </div>
  );
}

export default Order;