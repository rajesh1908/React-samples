import React from "react";

class Practicetwo extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: false
    };
  }
  render() {
    let wordtodiaplay;
    if (this.state.isLoggedin) {
      wordtodiaplay = "in";
    } else {
      wordtodiaplay = "out";
    }
    return (
      <div>
        <h1>You are currently Logged (in/out) :{wordtodiaplay} </h1>
      </div>
    );
  }
}

export default Practicetwo;
