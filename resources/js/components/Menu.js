import React from "react";

export class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <a className="menu__btn" href="#">
          <hr className="menu__btn__line menu__btn__line-top"/>
          <hr className="menu__btn__line menu__btn__line-mid"/>
          <hr className="menu__btn__line menu__btn__line-bottom"/>
        </a>
      </div>
    );
  }
}
