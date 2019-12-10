import React, { Component } from 'react';
class InputNumber extends Component{
  constructor (props) {
    super(props)
    this.state = {
      type: -1
    }
  }
  handleChange = e => {
    const newValue = e.target.value
    this.props.onChange(newValue)
  }
  render () {
    return (
      <div>
      {
        this.state.type === 1
        ? <input value={this.props.value} onChange={ this.handleChange }></input>
        : this.state.type === 2
        ? <input defaultValue={this.props.defaultValue}></input>
        : ''
      }
      </div>
    )
  }
  componentDidMount () {
    let hasValue = this.props.hasOwnProperty ('value')
    let hasDefaultValue = this.props.hasOwnProperty ('defaultValue')
    if (hasValue && !hasDefaultValue) {
      this.setState({
        type: 1
      })
    } else if (hasDefaultValue && !hasValue) {
      this.setState({
        type: 2
      })
    } else {
      console.error('InputNumber 组件只能有一个value或一个defaultValue')
    }
  }
  componentDidUpdate () {
    console.log('update defaultValue', this.state.defaultValue)
  }
}
export default InputNumber
