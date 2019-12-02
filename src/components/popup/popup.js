
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './popup.sass'


class Popup extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)
    // console.log('111', `popup-${this.props.direction}`)
    // this.state = {
    //   popupClassName: `popup-${props.direction}`
    // }
  }

  static defaultProps = {
    isShow: false,
    direction: ''
  }

  static propTypes = {
    isShow: PropTypes.bool,
    direction: PropTypes.string
  }

  clickCover = () => {
    this.props.clickCover()
  }

  render () {
    return (
      <div className='popup-cont'>
        <div className={`cover ${this.props.isShow ? 'fadeShow' : 'fadeHide'} `} onClick={() => this.clickCover()}>
          <div className={`popup-cont-detail popup-${this.props.direction} ${this.props.isShow ? 'active' : ''} `}>{this.props.children}</div>
        </div>
      </div>
    )
  }

}

export default Popup