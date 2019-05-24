import React,{Component,Fragment} from 'react';
import Toast from '../../components/toast/toastCreate'
import { CSSTransition } from 'react-transition-group'
import '../../assets/commonSass/animate.sass'
import './toastView.sass'

export default class toastView extends Component {
  constructor(props) {
		super(props)
		this.state = {
			show: true
		}
  }
  
  showToast = () =>{
    Toast.info('这是一段很长很长的提示～，我游啊游～～游啊游～',30000)
  }

  componentDidMount = () =>{
     setTimeout(() => {
        Toast.info('这是一段很长很长的提示～，我游啊游～～游啊游～',3000)
     }, 1500);
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
        <div className='toast-view'>
          <h3 >这是toast组件示例～</h3>
          <div className="toast-btn" onClick={() => this.showToast()}>点我出现toast</div>
        </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

