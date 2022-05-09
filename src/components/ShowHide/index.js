import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onShowAndHideFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onShowAndHideLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="show-hide-app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.onShowAndHideFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.onShowAndHideLastName}
            >
              Show/Hide LastName
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
