import React, { Component } from 'react'

export default class ContextTypePage extends Component {
    render() {
        const { themeColor } = this.props
        return (
            <div className={themeColor}>
                type
            </div>
        )
    }
}
