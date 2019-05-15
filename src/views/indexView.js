import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './indexView.sass'
import imgArrow from '../assets/img/arrow.png'

export default class IndexView extends Component {
    constructor(props){
        super(props)

        this.onClickList = this.onClickList.bind(this)
    }

    onClickList = ()=>{
        console.log(11111)
        this.props.history.push('/buttonView')
    }
  render(){
    return (
      <div className="view-index-page">
          <h3>Super UI Touch Components</h3>
          <ul>
            <li onClick={this.onClickList}>
              <span>Button</span>
              <img alt="arrow" src ={imgArrow}/>
            </li>
            <li onClick={this.onClickList}>
              <span>Toast</span>
              <img alt="arrow" src ={imgArrow}/>
            </li>
            {/* <li><Link to='/buttonView'>button组件</Link></li> */}
          </ul>
      </div>
    );
  }
}

