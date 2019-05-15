import React,{Component} from 'react';
import ComButton from '../../components/button/button.js'

export default class ButtonView extends Component {
  clickButton = (e,type) =>{
    console.log(e,type)
  }
  render(){
    return (
      <div >
        <h3>这是button组件示例～</h3>
        <ComButton isFixed={true} clickButton={this.clickButton}/>
      </div>
    );
  }
}

