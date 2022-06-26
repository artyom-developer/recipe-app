import React, { useEffect } from 'react'; 
import './style.scss';

const prueba = [
  {},{},{},{},{},{},{},{},{}
]

export interface Props { }

export const Middle: React.FunctionComponent<Props> = ({  }) => {
  console.log("Wow libre de errores")
  return (
    <div className="middle">
        <div className="middleTitle">Nuevas Recetas</div>
          <div className="contCarrusel">
            <ul id="carruselfin" className="carrusel">
              {
                prueba.map((item,i)=>{
                  return( 
                    <li className="tarjet" key={i}>
                      <div className="plate" style={{ backgroundImage: require('../../assets/Ojingeo-muchim-5.png') }}></div>
                      <div id="normal1" className="normalTarjet">
                        <div className="textFood">
                          <span className="food">Ojingeo</span>
                          <span className="foodDesc">Muchim</span>
                        </div>
                        <div className="score">
                          <img className="star" src="./assets/icons/ic_star.svg"/>
                          <span>5.0</span>
                          <img className="heart" src="./assets/icons/ic-favorite.svg"/>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
              
          </div>
    </div>
  );
} 