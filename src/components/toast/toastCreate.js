import React from 'react';
import ReactDom from 'react-dom'
import Toast from './toast.js'
import './toast.sass'

function createToast(){
    const divEle = document.createElement('div')
    document.body.appendChild(divEle)

    const toastCont = ReactDom.render(<Toast />,divEle)

    return {
        addToast(toast){
            return toastCont.addToast(toast)
        },
        destroy(){
            ReactDom.unmountComponentAtNode(divEle)
            document.body.removeChild(divEle)
        }
    }
}

let toastCont

const toast = (type, content, duration = 2000, onClose) => {
  
    if (!toastCont) toastCont = createToast()
    console.log('toastCont',toastCont)
    return toastCont.addToast({ type, content, duration, onClose })
}

export default {
    info(content, duration, onClose) {
        return toast('info', content, duration, onClose)
    },
    success(content = '操作成功', duration, onClose) {
        return toast('success', content, duration, onClose)
    },
    error(content, duration , onClose) {
        return toast('error', content, duration, onClose)
    },
    loading(content = '加载中...', duration = 0, onClose) {
        return toast('loading', content, duration, onClose)
    }
}
