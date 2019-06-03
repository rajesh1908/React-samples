import React from "react";

class PracticeApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedin: !prevState.isLoggedin
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggedin ? "LOG OUT" : "LOG IN";
    let displayText = this.state.isLoggedin ? "Logged In " : "Logged Out";
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    );
  }
}

export default PracticeApp;
