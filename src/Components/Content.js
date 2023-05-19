import React, { Component } from "react";

import HoverRating from "./HoverRating";
export class Content extends Component {
  render() {
    return (
      <div>
        {" "}
        Rate Us
        <HoverRating />
      </div>
    );
  }
}

export default Content;
