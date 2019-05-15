import React,{ Component } from 'react'
import PropTypes from 'prop-types';
import './button.sass'

class ComButton extends Component {
    constructor(props){
        super(props)

        this.onClickButton = this.onClickButton.bind(this)
    }

    static defaultProps = {
        cancleText: '取消',
        cancelColor: '#fff',
        confirmText: '确定',
        confirmColor: '#fff',
        showCancel: true,
        showConfirm: true,
        isFixed: false
    }

    static propTypes = {
        cancleText: PropTypes.string,
        cancelColor: PropTypes.string,
        confirmText: PropTypes.string,
        confirmColor: PropTypes.string,
        showCancel: PropTypes.bool.isRequired,
        showConfirm: PropTypes.bool.isRequired,
        clickButton: PropTypes.func.isRequired
    }

    onClickButton = (e,type)=>{
        this.props.clickButton(e,type)
    }

    render(){
        const props = this.props
        return (
            <div className="com-btn">
                <div className={ props.isFixed ? `com-btn-flex isFixedBtn`: "com-btn-flex"}>
                    {props.showCancel && <button onClick={(e) => this.onClickButton(e,'cancle')} className="btn cancle" style={props.cancelColor ? {color: props.cancelColor} : ''}>{ props.cancleText}</button>}
                    {props.showConfirm && <button onClick={(e) => this.onClickButton(e,'confirm')} className="btn confirm" style={props.confirmColor ? {color: props.confirmColor} : ''}>{ props.confirmText }</button>}
                </div>
            </div>
        )
    }
}

export default ComButton

