import React,{Component,Fragment} from 'react';
import Toast from '../../components/toast/toastCreate'
import { CSSTransition } from 'react-transition-group'
import '../../assets/commonSass/animate.sass'

export default class toastView extends Component {
  constructor(props) {
		super(props)
		this.state = {
			show: true
		}
  }
  
  showToast = () =>{
      console.log(1111)
    Toast.info('点了我',5000)
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
          <h3 onClick={() => this.showToast()}>这是toast组件示例～</h3>
           <div >点我</div>
        </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

