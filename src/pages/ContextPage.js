import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import UserPage from './UserPage'
import { ThemeContext, UserContext } from '../Context'
export default class ContextPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            theme: {
                themeColor: 'red'
            },
            user: {
                name: 'qsb'
            }
        }
    }
    handleColor = () => {
        const { themeColor } = this.state.theme
        this.setState({
            theme: {
                themeColor: themeColor === 'red' ? 'green' : 'red'
            }
        })
    }
    render() {
        const { theme, user } = this.state
        return (
            <div>
                <button onClick={this.handleColor}>变色</button>
                <div>
                    <ThemeContext.Provider value={theme}>
                        <UserContext.Provider value={user}>
                            <ContextTypePage/>
                            <UserPage></UserPage>
                        </UserContext.Provider>
                    </ThemeContext.Provider>
                </div>
            </div>
        )
    }
}
