import React, { Component } from 'react'
import FieldContext from './FieldContext'

export default class Field extends Component {
    static contextType = FieldContext

    onStoreChange = () => {
        this.forceUpdate()
    }

    getControlled = () => {
        const {name} = this.props
        const { getFieldValue, setFieldsValue } = this.context
        return {
            value: getFieldValue(name),
            onChange: (e) => {
                const newValue = e.target.value
                setFieldsValue({
                    [name]: newValue
                })
                console.log(newValue, ' newVal')
            }
        }
    }

    componentDidMount () {
        const { registerField } = this.context
        registerField(this)
    }

    render() {
        console.log('field render')
        const { children } = this.props
        const returnChildNode = React.cloneElement(children, this.getControlled())
        return returnChildNode
    }
}
