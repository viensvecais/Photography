import React from "react";

import { AlbumForm } from "./AlbumForm";

export class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: true
    };
  }

  render() {
    return (
      <div className="work">
        <h1>Galerijas</h1>
        {this.state.auth ? <AlbumForm /> : null}
      </div>
    );
  }
}
