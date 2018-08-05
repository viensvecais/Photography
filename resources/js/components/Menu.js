import React from "react";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.state = {
      showMenu: false,
      menuBtnClassName: "menu__btn",
      menuOverlayClass: "menu__overlay",
      menuOverlayBrand: "menu__overlay__brand",
      menuOverlayNav: "menu__overlay__navigation"
    };
  }

  toggleOverlay(e) {
    e.preventDefault();
    if (!this.state.showMenu) {
      this.setState({
        showMenu: true,
        menuBtnClassName: "menu__btn-x",
        menuOverlayClass: "menu__overlay-visible",
        menuOverlayBrand: "menu__overlay-visible__brand",
        menuOverlayNav: "menu__overlay-visible__navigation"
      });
    } else {
      this.setState({
        showMenu: false,
        menuBtnClassName: "menu__btn",
        menuOverlayClass: "menu__overlay",
        menuOverlayBrand: "menu__overlay__brand",
        menuOverlayNav: "menu__overlay__navigation"
      });
    }
  }
  render() {
    return (
      <div className="menu">
        <a
          className={this.state.menuBtnClassName}
          href="#"
          onClick={this.toggleOverlay}
        >
          <div className="menu__btn__line menu__btn__line-top" />
          <div className="menu__btn__line menu__btn__line-mid" />
          <div className="menu__btn__line menu__btn__line-bottom" />
        </a>
        <nav className={this.state.menuOverlayClass}>
          <div className={this.state.menuOverlayBrand}>
            <img
              src={require("../../img/brand.jpg")}
              alt="Jolanta Līva"
              className="menu__overlay__brand__image"
            />
          </div>
          <ul className={this.state.menuOverlayNav}>
            <li className="menu__overlay__navigation__item">
              <a className="menu__overlay__navigation__item__link" href="/">
                Sākums
              </a>
            </li>
            <li className="menu__overlay__navigation__item">
              <a className="menu__overlay__navigation__item__link" href="/">
                Par mani
              </a>
            </li>
            <li className="menu__overlay__navigation__item">
              <a className="menu__overlay__navigation__item__link" href="/">
                Galerijas
              </a>
            </li>
            <li className="menu__overlay__navigation__item">
              <a className="menu__overlay__navigation__item__link" href="/">
                Atsauksmes
              </a>
            </li>
            <li className="menu__overlay__navigation__item">
              <a className="menu__overlay__navigation__item__link" href="/">
                Kontakti
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
