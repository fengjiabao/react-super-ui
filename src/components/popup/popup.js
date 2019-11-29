
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './popup.sass'


class Popup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popupClassName: 'popup-bottom'
    }
  }

  static defaultProps = {
    isShow: false
  }

  static propTypes = {
    isShow: PropTypes.bool
  }

  clickCover = () => {
    this.props.clickCover()
  }

  render () {
    return (
      <div className='popup-cont'>
        {/* {this.props.isShow ? ( */}
        <div className={`cover ${this.props.isShow ? 'fadeShow' : 'fadeHide'} `} onClick={() => this.clickCover()}>
          <div className={['popup-cont-detail', this.state.popupClassName]}>{this.props.children}</div>
        </div>
        {/* ) : null} */}
      </div>
    )
  }

}

export default Popup