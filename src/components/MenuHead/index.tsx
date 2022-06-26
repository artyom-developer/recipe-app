import React from 'react'; 
import './style.scss';

export interface Props { }

export const MenuHead: React.FunctionComponent<Props> = ({}) => {
  return (
    <div id="menuHead2" className="menuHeads"> 
        <div className="tarjetMenu"> 
            <img className="imgMenu" src="./assets/icons/ic_vegetarian.svg"/>
            <span className="foodMenu">Vegetarianos</span>
        </div>
        <div className="tarjetMenu"> 
            <img className="imgMenu" src="./assets/icons/ic_main.svg"/>
            <span className="foodMenu">Principales</span>
        </div>
        <div className="tarjetMenu"> 
            <img className="imgMenu" src="./assets/icons/ic_cake.svg"/>
            <span className="foodMenu">Tortas</span>
        </div>
        <div className="tarjetMenu"> 
            <img className="imgMenu" src="./assets/icons/ic_fast-food.svg"/>
            <span className="foodMenu">Rápida</span>
        </div>
        <div className="tarjetMenu"> 
            <img className="imgMenu" src="./assets/icons/ic_kids.svg"/>
            <span className="foodMenu">Menú Niños</span>
        </div>
        <div className="tarjetMenu"> 
            <img className="imgMenu" src="../../assets/icons/ic_soup.svg"/>
            <span className="foodMenu">Sopas</span>
        </div>
    </div>
  );
} 