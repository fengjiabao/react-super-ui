import React,{Component,Fragment} from 'react';
import MessageBox from '../../components/messageBox/messageBox.js'
import { CSSTransition } from 'react-transition-group'
import '../../assets/commonSass/animate.sass'
import './messageBoxView.sass'


export default class ButtonView extends Component {
  constructor(props) {
        super(props)
        this.state = {
            show: false,
            animateShow: false,
            msg: {
                title: '这是messageBox标题',
                content: '这是一段很长很长的文字～这是一段很长很长的文字～这是一段很长很长的文字～这是一段很长很长的文字～'
            }
        }
  }
  
  showMessageBox = () => {
    this.setState({show: true,animateShow: true})
  }

  clickButton = (e,type) =>{
    console.log(e,type)
    return type === 'cancle' ? this.setState({animateShow: false}) : this.setState({animateShow: false})
  }

  render(){
    return (
      <Fragment>
        <CSSTransition
          in={ true }
          timeout={ 1000 }
          classNames='fade'
          unmountOnExit
          appear={true}
        >
        <div className="messageBox-view">
          <h3>这是messageBoxView组件示例～</h3>
          <div className="messageBox-btn" onClick={() => this.showMessageBox()}>点我出现MessageBox</div>
          <MessageBox show={this.state.show} animateShow={this.state.animateShow} msg={this.state.msg} clickButton={this.clickButton}/>
        </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

