import React,{Component} from 'react'

class App extends Component {

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render(){
    return (
      <div></div> 
    )
  }

}

export default App