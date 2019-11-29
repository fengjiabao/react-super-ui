import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import '../../assets/commonSass/animate.sass'
import ComButton from '../../components/button/button.js'
import Popup from '../../components/popup/popup.js'


export default class PopupView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      popupShow: false,
      direction: ''
    }
  }

  clickButton = () => {
    this.setState({
      popupShow: true
    })
  }

  clickCover = () => {
    this.setState({
      popupShow: false
    })
  }

  render () {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          appear={true}
        >
          <div>
            <h3>这是popup组件示例～</h3>
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='上popup' />
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='下popup' />
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='左popup' />
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='右popup' />

            <Popup isShow={this.state.popupShow} clickCover={this.clickCover} direction={this.state.direction}>
              {this.state.popupShow + '111'}
              <div>112122</div>
            </Popup>
          </div>
        </CSSTransition>
      </Fragment>
    );
  }
}