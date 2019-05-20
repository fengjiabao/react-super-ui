import React,{Component,Fragment} from 'react';
import ComButton from '../../components/button/button.js'
import { CSSTransition } from 'react-transition-group'
import '../../assets/commonSass/animate.sass'

export default class ButtonView extends Component {
  constructor(props) {
		super(props)
		this.state = {
			show: true
		}
  }
  
  clickButton = (e,type) =>{
    console.log(e,type)
  }


	// handleToggole() {
	// 	this.setState({
	// 		show: this.state.show ? false : true
	// 	})
	// }
  render(){
    return (
      <Fragment>
        <CSSTransition
          in={ this.state.show }
          timeout={ 1000 }
          classNames='fade'
          unmountOnExit
          // onEntered={el => {el.style.color = 'blue'}}
          appear={true}
        >
        <div>
          <h3>这是button组件示例～</h3>
          <ComButton isFixed={true} clickButton={this.clickButton}/>
        </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

