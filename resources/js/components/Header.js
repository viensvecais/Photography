import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          className="header__background"
          src={require("../../img/hero.png")}
          alt="Hero background"
        />
        <div className="header__content">
          <h3 className="header__content__brand">
            Jolanta Līva<br />photography
          </h3>
          <h2 className="header__content__title">Pasaule caur manu lēcu</h2>
          <div className="header__content__horizontal-line" />
          <h5 className="header__content__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            repellendus.
          </h5>
        </div>
      </div>
    );
  }
}
