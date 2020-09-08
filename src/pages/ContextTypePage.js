import React, { Component } from 'react'
import { ThemeContext } from '../Context'

export default class ContextTypePage extends Component {
    // 这个获取的context，会去到this.context
    static contextType = ThemeContext
    render() {
        const { themeColor } = this.context
        // this里面有个context
        console.log('this ', this)
        return (
            <div className={themeColor}>
                type
            </div>
        )
    }
}
