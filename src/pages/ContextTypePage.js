import React, { Component, useContext } from 'react'
import { ThemeContext } from '../Context'

export  function Child (props) {
    const themeContext = useContext(ThemeContext)
    console.log(themeContext)
    return <div className={themeContext.themeColor}>
        uuu
    </div>
}
export default class ContextTypePage extends Component {
    // 这个获取的context，会去到this.context
    // 这里的contextType是api来的，https://zh-hans.reactjs.org/docs/context.html#classcontexttype
    // 记住这么用就好
    // 或者这么用：
    // class xxx extends Component {}
    // xxx.contextType = ThemeContext
    // export default xxx
    // 如果在函数组件要用 useContext
    static contextType = ThemeContext
    // contextType只能使用一个
    // 使用多个还是要用函数组件的useContext，或者使用consumer接受
    render() {
        const { themeColor } = this.context
        // this里面有个context
        console.log('this ', this)
        return (
            <div className={themeColor}>
                type
                <Child></Child>
            </div>
        )
    }
}
