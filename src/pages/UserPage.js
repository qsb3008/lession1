import React, { Component } from 'react'
import { ThemeContext, UserContext } from '../Context'

export default class UserPage extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {user => {
                        return <span>{user.name}</span>
                    }}
                </UserContext.Consumer>
                <ThemeContext.Consumer>
                {theme => (<div>
                    {theme.themeColor}
                </div>)}
                </ThemeContext.Consumer>
            </div>
        )
    }
}
