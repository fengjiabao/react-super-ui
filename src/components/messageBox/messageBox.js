import React,{ Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import ComButton from '../button/button.js'

import '../../assets/commonSass/animate.sass'
import '../../assets/commonSass/common.sass'

import './messageBox.sass'


class ComMessageBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            animateShow: false,
        }
    }

    static defaultProps = {
       show: false,
       animateShow: false,
       clickButton: '',
       msg: {}
    }

    static propTypes = {
        show: PropTypes.bool.isRequired,
        animateShow: PropTypes.bool,
        clickButton: PropTypes.func.isRequired,
        msg: PropTypes.object.isRequired
    }

    clickButton = (e,type) =>{
        this.props.clickButton(e,type)
    }
    
    renderDom(){
        if(this.props.show){
            return(
                <div className="cover com-messageBox align-justify-center">
                    <section>
                        <h3>{this.props.msg.title}</h3>
                        <p>{this.props.msg.content}</p>
                        <ComButton isFixed={false} clickButton={this.clickButton}/>
                    </section>
                </div>
            )
        }
        return (<div></div>)
    }

    render(){
        return(
            <Fragment>
                <CSSTransition
                    in={ this.props.animateShow }
                    timeout={ 1000 }
                    classNames='fade'
                    unmountOnExit
                    appear={true}
                >
                { this.renderDom() }
                </CSSTransition>
             </Fragment>
        )
    }
}


export default ComMessageBox