import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickApplyBreakButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: this.prevState.speed + 10}))
    }
  }
  render() {
    const {speed} = this.state

    return <div className="speedometer-app-container"></div>
  }
}

export default Speedometer
