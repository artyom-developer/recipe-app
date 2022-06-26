import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../../store"; 
import "./style.scss";

export interface Props {}

export const Middle: React.FunctionComponent<Props> = ({}) => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const data = useAppSelector((state) => state.recipe);
  return (
    <div className="middle">
      <div className="middleTitle">Nuevas Recetas</div>
      <div className="contCarrusel">
        <ul id="carruselfin" className="carrusel">
          {data.loading ? (
            <div className="middleTitle">Cargando...</div>
          ) : (
            data.recipes.map((item, i) => {
              return (
                <li className="tarjet" key={i}>
                  <div
                    className="plate"
                    style={{
                      backgroundImage: `url("${item.image}")`,
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div id="normal1" className="normalTarjet">
                    <div className="textFood">
                      <span className="foodDesc">{item.title}</span>
                    </div>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
