import React, { useEffect } from "react";
import "./style.scss";
import menu from "../../data/menu.json";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { getRecipes } from "../../features/recipeSlice";

export interface Props {}

export const Header: React.FunctionComponent<Props> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="headform">
      <div className="header">
        <div className="title">
          <span className="text1">
            Recipe<span className="text2">App</span>
          </span>
        </div>
        <div className="menuHead">
          <ul>
            <li className="selected">Home</li>
            {menu.map((item, i) => {
              return (
                <li key={i} onClick={() => dispatch(getRecipes(item.query))}>
                  {item.name}
                </li>
              );
            })}
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
};
