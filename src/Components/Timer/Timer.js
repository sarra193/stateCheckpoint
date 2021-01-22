import React from 'react'
import './Timer.css'

class Timer extends React.Component{

                  state = {
                        timer: 0,
                        intervall:null
      }

                  componentDidMount() {
                  console.log("componentDidMount ()");
                  this.setState({
                  intervall: setInterval(
                  () => this.setState({ timer: this.state.timer + 1 }),
                  1000
                  ),
                  });
      }
      

      render() {
            

            

            return(
      
            <div id="counter">
                  <div id="counter-number">{this.state.timer}       
                  </div>
                  <svg>
                  <circle r="18" cx="20" cy="20"></circle>
                  </svg>
            </div>
            )
      
      }


}

export default Timer