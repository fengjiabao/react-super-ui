import React,{Component,Fragment} from 'react';
import SingleSelect from '../../components/select/SingleSelect'
import { CSSTransition } from 'react-transition-group'
import '../../assets/commonSass/animate.sass'

export default class SingleView extends Component {
  constructor(props) {
		super(props)
		this.state = {
      show: true,
      tag:["男","女"]
		}
  }
  
  clickButton = (singleName) =>{
    console.log(singleName);
  }

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
          <h3>这是singleSelect组件示例～</h3>
          <SingleSelect tags={this.state.tag} clickButton={this.clickButton}/>
        </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

