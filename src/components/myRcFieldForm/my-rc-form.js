import React, { Component } from 'react'

// 装饰器写法 function (类) { // 给类添加新内容 }
export default function createForm(Cmp) {
    return class extends Component {
        constructor (props) {
            super(props)
            this.state = {}
            this.option = {}
        }
        // 受控组件，onChange事件动态更新数值
        handleChange = (event) => {
            const { value, name } = event.target
            this.setState({
                [name]: value
            })
        }
        // 获取单个值
        getFieldValue = (field) => {
            return this.state[field]
        }
        // 获取所有值
        getFieldsValue = (field) => {
            return this.state
        }
        setFieldsValue = (newState) => {
            this.setState(newState)
        }
        // 这是一个高阶组件，外面使用 getFieldDecorator('name', { rules: [] })(<Input>)
        // 根据使用，反推实现过程
        getFieldDecorator = (field, option) => InputCmp => {
            this.option[field] = option
            return React.cloneElement(InputCmp, {
                name: field,
                value: this.state[field] || '',
                onChange: this.handleChange
            })
        }
        // 校验
        validateFields = (callback) => {
            const state = {...this.state}
            const err = []
            for (const field in this.option) {
                if (state[field] === undefined) {
                    err.push({
                        [field]: 'error'
                    })
                }
            }
            callback(err.length === 0 ? null : err, state)
        }

        getForm = () => {
            return {
                getFieldDecorator: this.getFieldDecorator,
                validateFields: this.validateFields,
                getFieldValue: this.getFieldValue,
                getFieldsValue: this.getFieldsValue,
                setFieldsValue: this.setFieldsValue
            };
        }
        render() {
            const form = this.getForm()
            // 返回了一个Cmp组件，并且props传递了form
            // 所以用的时候this.props.form可以拿到this.getForm返回的对象
            // 返回的对象里面有各种我们定义的方法getFieldDecorator、setFieldsValue等
            return (
                <div className="border">
                    <Cmp form={form}></Cmp>
                </div>
            )
        }
    }
}
