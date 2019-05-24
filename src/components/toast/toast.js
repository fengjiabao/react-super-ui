import React, { Component,Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../../assets/commonSass/animate.sass'

class ToastBox extends Component {
    constructor() {
        super()
        this.transitionTime = 300
        this.state = { notices: [],show: true }
        this.removeNotice = this.removeNotice.bind(this)
    }

    getNoticeKey() {
        const { notices } = this.state
        return `notice-${new Date().getTime()}-${notices.length}`
    }

    addNotice(notice,cb) {
        const { notices } = this.state
        notice.key = this.getNoticeKey()

        // notices.push(notice);//展示所有的提示
        notices[0] = notice;//仅展示最后一个提示
        
        this.setState({ notices })
        if (notice.duration > 0) {
            setTimeout(() => {
                this.removeNotice(notice.key)
                cb()
            }, notice.duration)
        }
        return () => { this.removeNotice(notice.key) }
    }

    removeNotice(key) {
        const { notices } = this.state
        this.setState({
            notices: notices.filter((notice) => {
                if (notice.key === key) {
                    if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
                    return false
                }
                return true
            })
        })
    }

    render() {
        const { notices } = this.state
        return (
            <Fragment>
                <CSSTransition
                in={ this.state.show }
                timeout={ 1000 }
                classNames='fade'
                unmountOnExit
                // onEntered={el => {el.style.color = 'blue'}}
                appear={true}
                >
                <div className="super-toast">
                    {
                        notices.map(notice => (
                            <div className="toast_bg" key={notice.key}>
                                <div className='toast_box'>
                                    <div className='toast_text'>{notice.content}</div> 
                                </div>
                            </div>
                        ))
                    }
                </div>
                </CSSTransition>
             </Fragment>
        )
    }
}

export default ToastBox
