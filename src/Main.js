import React, {Component} from "react";
import './Main.css';
import Circle from "./Circle";
import Button from "./Button";

class Main extends Component {

  state = {
    score:0
  }

  addFiveHandler = () => {
    this.setState({
      score: this.state.score + 5
    })
  }

  addOneHandler = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  resetHandler = () => {
    this.setState({
      score: 0
    })
  }

  removeOneHandler = () => {
    if (this.state.score >= 1) {
      this.setState({
        score: this.state.score - 1
      })
    }
  }

  removeFiveHandler = () => {
    if (this.state.score >= 5) {
      this.setState({
        score: this.state.score - 5
      })
    }
  }

  render() {

    return <main>
      <Circle score={this.state.score}/>
      <div>
        <Button click={this.addFiveHandler} name="Add five" />
        <Button click={this.addOneHandler} name="Add one" />
        <Button click={this.resetHandler} name="Reset"/>
        <Button click={this.removeOneHandler} name="Remove one" />
        <Button click={this.removeFiveHandler} name="Remove five" />
      </div>
    </main>
  }
}

export default Main;