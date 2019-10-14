import React, {Component} from 'react'

export default class Login extends Component {
  constructor(){
    super()

    this.state = {
      user: '',
      pass: ''
    }
  }

  userUpdate = name => {
    this.setState({user: name})
  }

  passUpdate = pass => {
    this.setState({pass: pass})
  }

  handleAlert = () => {
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
  }

  render () {
    return (
      <div>
        <input onChange={e => this.userUpdate(e.target.value)} type="text"></input>
        <input onChange={e => this.passUpdate(e.target.value)} type="text"></input>
        <button onClick={this.handleAlert}>login</button>
      </div>
    )
  }
}