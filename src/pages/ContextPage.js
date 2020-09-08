import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'

const ThemeContext = React.createContext();

export default class ContextPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            theme: {
                themeColor: 'red'
            }
        }
    }
    render() {
        const { theme } = this.state
        return (
            <div>
                666
                <div>
                    <ContextTypePage {...theme}></ContextTypePage>
                </div>
            </div>
        )
    }
}
