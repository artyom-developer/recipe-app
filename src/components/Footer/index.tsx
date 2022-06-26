import React, { useEffect } from "react";
import "./style.scss";

export interface Props {}

export const Footer: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className="footer">
      <div className="textfooter">
        {" "}
        <span>Con el patrocinio de</span>
      </div>
      <img className="imgFooter" src="assets/Grupo 7610.png" />
    </div>
  );
};
