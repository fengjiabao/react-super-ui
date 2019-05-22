import React, {Component} from 'react'

class Toast extends Component {
    constructor(props){
        super(props)

        this.transitionTime = 300
        this.state = {
            toasts: []
        }

        this.removeToast = this.removeToast.bind(this)
    }

    getToastKey = () =>{
        const { toasts } = this.state
        // console.log('this.state', this.state)
        return `toast-${new Date().getTime()}-${toasts.length}`
    }

    addToast = (toast) =>{
        const { toasts } = this.state
        toast.key = this.getToastKey()

        toasts.push(toast);//展示所有的提示
        // toasts[0] = toast;//仅展示最后一个提示
        console.log(toasts)
        if (toast.duration > 0) {
            setTimeout(() => {
                this.removeToast(toast.key)
            }, toast.duration)
        }
        return () => { this.removeToast(toast.key) }
    }

    removeToast = (key) =>{
        const { toasts } = this.state
        this.setState({
            toasts: toasts.filter((toast) => {
                if (toast.key === key) {
                    if (toast.onClose) setTimeout(toast.onClose, this.transitionTime)
                    return false
                }
                return true
            })
        })
    }

    render() {
        const { toasts } = this.state
        // const icons = {
        //     info: 'toast_info',
        //     success: 'toast_success',
        //     error: 'toast_error',
        //     loading: 'toast_loading'
        // }
        return (
            <div className="toast">
                {
                    toasts.length > 0 && toasts.map(toast => (
                        <div className="toast_bg" key={toast.key}>
                            <div className='toast_box'>
                                {/* <div className={`toast_icon ${icons[notice.type]}`}></div> */}
                                <div className='toast_text'>{toast.content}</div> 
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Toast