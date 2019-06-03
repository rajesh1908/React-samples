import React from "react";

class Statepractice extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "Rajesh",
      age: "35 years Old"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.Name}</h1>
        <h1>{this.state.age}</h1>
      </div>
    );
  }
}

export default Statepractice;
