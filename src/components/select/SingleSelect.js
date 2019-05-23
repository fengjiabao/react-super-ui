import React,{ Component } from 'react'
import PropTypes from 'prop-types';
import './SingleSelect.sass'

class SingleSelect extends Component {
    constructor(props){
        super(props)
        this.state={
            isChoose:""
        }
        this.onClickButton = this.onClickButton.bind(this)
    }

    static defaultProps = {
        cancleText: '取消',
        cancelColor: '#fff',
        confirmText: '确定',
        confirmColor: '#fff',
        showCancel: true,
        showConfirm: true,
        isFixed: false,
        tags:[],
    }

    static propTypes = {
        cancleText: PropTypes.string,
        cancelColor: PropTypes.string,
        confirmText: PropTypes.string,
        confirmColor: PropTypes.string,
        showCancel: PropTypes.bool.isRequired,
        showConfirm: PropTypes.bool.isRequired,
        clickButton: PropTypes.func.isRequired,
        tags:PropTypes.array
    }

    onClickButton = (index,item)=>{
        this.setState({
            isChoose:index
        })
        this.props.clickButton(item);
    }

    render(){
        const props = this.props;
        const state = this.state;
        // 定义数组，将元素放到该数组中
        var siteElements=[];
        props.tags.forEach((item,index)=>{
            siteElements.push(
                <div key={index} className ={state.isChoose === index ? 'active' : 'unActive' }   onClick={()=>this.onClickButton(index,item)} >
                   {item}
                </div>
            )
        })
        return (
            // <div className="com-btn">
            //     <div className={ props.isFixed ? `com-btn-flex isFixedBtn`: "com-btn-flex"}>
            //         {props.showCancel && <button onClick={(e) => this.onClickButton(e,'cancle')} className="btn cancle" style={props.cancelColor ? {color: props.cancelColor} : ''}>{ props.cancleText}</button>}
            //         {props.showConfirm && <button onClick={(e) => this.onClickButton(e,'confirm')} className="btn confirm" style={props.confirmColor ? {color: props.confirmColor} : ''}>{ props.confirmText }</button>}
            //     </div>
            // </div>
            
            <div className="tag" >
                {siteElements}
            </div>
        )
    }
}

export default SingleSelect

