import React from 'react'
import useForm from './UseForm'
import FieldContext from './FieldContext'

export default function Form(props) {
    const { children, onFinish, onFinishFailed, form } = props
    const [ formInstance ] =  useForm(form)
    console.log(formInstance)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            formInstance.submit()
        }}>
            <FieldContext.Provider value={formInstance}>
            { children }
            </FieldContext.Provider>
        </form>
    )
}
