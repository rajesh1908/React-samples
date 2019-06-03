import React, { Component } from "react";
import Conditional from "./conditional";

class Condtionalrenderingparttwo extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: ["a", "b", "c", "d"]
    };
  }

  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        )}
      </div>
    );
  }
}

export default Condtionalrenderingparttwo;
