import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.keyDownHandler = this.keyDownHandler.bind(this);
    };

    buttonClickHandler() {
        this.setState({
          renderBall:true,
          posi : 0,
          ballPosition: { left: "0px" }
        });
   
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }

    keyDownHandler(e){
        if(event.key === "ArrowLeft" || e.keyCode === 37){
            this.setState((prevState)=>{
                return  {
                    posi : prevState.posi - 5,
                    ballPosition: { left: prevState.posi-5 + "px" }
                }
                // posi : this.state.posi - 5,
                // ballPosition: { left: this.state.posi + "px" }
              });
            // console.log("37",this.state.posi);
        } else if(event.key === "ArrowRight" || e.keyCode === 39){
            this.setState((prevState)=>{
                return  {
                    posi : prevState.posi + 5,
                    ballPosition: { left: prevState.posi+5 + "px" }
                }
                // posi : this.state.posi + 5,
                // ballPosition: { left: this.state.posi + 5 + "px" }
              });
        }
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler); 
      
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDownHandler);
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
