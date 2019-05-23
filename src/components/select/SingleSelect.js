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
        tags:[],
    }

    static propTypes = {
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
            <div className="tag" >
                {siteElements}
            </div>
        )
    }
}

export default SingleSelect

