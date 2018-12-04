import React from "react"
import PropTypes from "prop-types"
import Timestamp from "react-timestamp"
import {SketchPicker} from "react-color"

class Colorpicker extends React.Component{
  constructor(props){
    super(props)
    this.handleChange= this.handleChange.bind(this)

    // console.log(props.selector)
    this.state = {selector : props.selector}
    // this.setState(()=>({selector : props.selector}) )
  }
  handleChange =(color)=> {
    // console.log(color.hex)
    console.log(this.state.selector)
    document.body.style.background = color.hex;
    let elem = document.querySelector('#'+this.state.selector) // .querySelector('#user_color') // idが、userフォームのcolor
    elem.value = color.hex
  }
  render(){
    return (<React.Fragment>
      <SketchPicker color={this.props.color} 
                    onChange={this.handleChange}
      />
    </React.Fragment>)
  }
}

Colorpicker.propTypes = {}
export default Colorpicker