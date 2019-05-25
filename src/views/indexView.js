import React,{Component} from 'react';
// import {Link} from 'react-router-dom'
import './indexView.sass'
import imgArrow from '../assets/img/arrow.png'

const componentList = [{
  name: 'button',
  desc: 'Button',
  path: '/buttonView'
},{
  name: 'toast',
  desc: 'Toast',
  path: '/toastView'
},
{
  name: 'single',
  desc: 'Single',
  path: '/singleView'
},
{
  name: 'messageBox',
  desc: 'MessageBox',
  path: '/messageBox'
}]
export default class IndexView extends Component {
    constructor(props){
        super(props)

        this.onClickList = this.onClickList.bind(this)
    }

    onClickList = (name)=>{
        console.log('name',name)
        componentList.filter(item => {
          return item.name === name ? this.props.history.push(item.path) : false
        })
    }

  render(){
    return (
      <div className="view-index-page">
          <h3>Super UI Touch Components</h3>
          <ul>
            {
              componentList.map((list,key) =>{
                return (
                  <li key={key} onClick={() =>this.onClickList(list.name)}>
                    <span>{list.desc}</span>
                    <img alt="arrow" src ={imgArrow}/>
                  </li>
                )
              })
            }
            {/* <li><Link to='/buttonView'>button组件</Link></li> */}
          </ul>
      </div>
    );
  }
}

