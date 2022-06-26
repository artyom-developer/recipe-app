import React, { useEffect } from 'react'; 
import './style.scss';
export interface Props {}
 
export const Header: React.FunctionComponent<Props> = ({}) => { 
  return (
    <div className="headform">
        <div className="header">
            <div className="title">
                <span className="text1">Recipe<span className="text2">App</span></span>
            </div>
            <div className="menuHead">
                <ul>
                    <li className="selected">Home</li>
                    <li>Vegetarianos</li>
                    <li>Platos Principales</li>
                    <li>Tortas</li>
                    <li>Comida Rápida</li>
                    <li>Menú Niños</li>
                    <li>Sopas</li>
                </ul>
            </div>
            <div className="icoHome"></div>
        </div>

        <div className="imgHead">
            <div className="floatText">
                <div className="text1">Recetas</div>
                <div className="text2">para todos</div>
            </div>

        </div>
    </div>
  );
}
 