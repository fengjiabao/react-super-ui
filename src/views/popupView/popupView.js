import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import '../../assets/commonSass/animate.sass'
import ComButton from '../../components/button/button.js'
import Popup from '../../components/popup/popup.js'
import './popupView.sass'
export default class PopupView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      bottomPopupShow: false,
      bottomDirection: 'bottom',
      topPopupShow: false,
      topDirection: 'top',
      leftPopupShow: false,
      leftDirection: 'left',
      rightPopupShow: false,
      rightDirection: 'right'
    }
  }

  clickButton = (e, type) => {
    let text = e.props.confirmText
    let direction = '', state = {}
    switch (text) {
      case 'top':
        direction = 'top'
        state = { topPopupShow: true, direction: direction }
        break
      case 'bottom':
        direction = 'bottom'
        state = { bottomPopupShow: true, direction: direction }
        break
      case 'left':
        direction = 'left'
        state = { leftPopupShow: true, direction: direction }
        break
      case 'right':
        direction = 'right'
        state = { rightPopupShow: true, direction: direction }
        break
      default:
        break
    }
    console.log('direction', direction)
    this.setState(state)
  }

  clickTopCover = () => {
    this.setState({
      topPopupShow: false
    })
  }

  clickBottomCover = () => {
    this.setState({
      bottomPopupShow: false
    })
  }


  clickLeftCover = () => {
    this.setState({
      leftPopupShow: false
    })
  }

  clickRightCover = () => {
    this.setState({
      rightPopupShow: false
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
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='top' />
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='bottom' />
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='left' />
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='right' />

            <Popup isShow={this.state.topPopupShow} clickCover={this.clickTopCover} direction={this.state.topDirection}>
              <div className="demo-popup-content demo-popup-content-top">
                {this.state.topDirection}
              </div>
            </Popup>

            <Popup isShow={this.state.bottomPopupShow} clickCover={this.clickBottomCover} direction={this.state.bottomDirection}>
              <div className="demo-popup-content demo-popup-content-bottom">
                {this.state.bottomDirection}
              </div>
            </Popup>

            <Popup isShow={this.state.leftPopupShow} clickCover={this.clickLeftCover} direction={this.state.leftDirection}>
              <div className="demo-popup-content demo-popup-content-left">
                {this.state.leftDirection}
              </div>
            </Popup>

            <Popup isShow={this.state.rightPopupShow} clickCover={this.clickRightCover} direction={this.state.rightDirection}>
              <div className="demo-popup-content demo-popup-content-right">
                {this.state.rightDirection}
              </div>
            </Popup>
          </div>
        </CSSTransition>
      </Fragment>
    );
  }
}