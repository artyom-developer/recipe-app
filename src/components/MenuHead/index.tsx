import React from "react";
import menu from "../../data/menu.json";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { getRecipes } from "../../features/recipeSlice";
import "./style.scss";

export interface Props {}

export const MenuHead: React.FunctionComponent<Props> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div id="menuHead2" className="menuHeads">
      {menu.map((item, i) => {
        return (
          <div
            className="tarjetMenu"
            key={i}
            onClick={() => dispatch(getRecipes(item.query))}
          >
            <img className="imgMenu" src={item.icon} />
            <span className="foodMenu">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};
