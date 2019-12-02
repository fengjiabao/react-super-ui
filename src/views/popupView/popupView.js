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
      popupShow: false,
      direction: 'bottom'
    }
  }

  clickButton = (e, type) => {
    let text = e.props.confirmText
    let direction = ''
    switch (text) {
      case 'top':
        direction = 'top'
        break
      case 'bottom':
        direction = 'bottom'
        break
      case 'left':
        direction = 'left'
        break
      case 'right':
        direction = 'right'
        break
      default:
        break
    }
    console.log('direction', direction)

    this.setState({
      popupShow: true,
      direction: direction
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
            {/* <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='top' /> */}
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='bottom' />
            {/* <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='left' />
            <ComButton isFixed={false} showCancel={false} clickButton={this.clickButton} confirmText='right' /> */}

            <Popup isShow={this.state.popupShow} clickCover={this.clickCover} direction={this.state.direction}>
              <div className="demo-popup-content">
                {this.state.direction}
                <div>112122</div>
              </div>
            </Popup>
          </div>
        </CSSTransition>
      </Fragment>
    );
  }
}