// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {EatenMango: 0, EatenBanana: 0}

  EatMango = () => {
    this.setState(prevState => {
      return {EatenMango: prevState.EatenMango + 1}
    })
  }

  EatBanana = () => {
    this.setState(prevState => {
      return {EatenBanana: prevState.EatenBanana + 1}
    })
  }

  render() {
    const {EatenMango, EatenBanana} = this.state
    return (
      <div className="bg-container">
        <div className="card-div">
          <h1 className="heading">
            Bob ate <span className="counting">0</span> mangoes{' '}
            <span className="counting">0</span> bananas
          </h1>
          <div className="alignment">
            <div className="each-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image-style"
                alt="mango"
              />
              <button className="btn-style" onClick={this.EatMango}>
                Eat Mango
              </button>
            </div>
            <div className="each-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="image-style"
                alt="banana"
              />
              <button className="btn-style" onClick={this.EatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
