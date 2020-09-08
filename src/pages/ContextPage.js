import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import { ThemeContext } from '../Context'
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
                    <ThemeContext.Provider value={theme}>
                        <ContextTypePage/>
                    </ThemeContext.Provider>
                </div>
            </div>
        )
    }
}
