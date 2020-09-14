import React from 'react'

class FormStore {
    constructor () {
        this.store = {}
        this.fieldEntites = []
    }
    // 注册
    registerField = (entity) => {
        this.fieldEntites.push(entity)
    }

    getFieldValue = name => {
        return this.store[name]
    }
    getFieldsValue = () => {
        return this.store
    }
    setFieldsValue = (newStore) => {
        this.store = {
            ...this.store,
            ...newStore
        }
        // 更新到组件
        this.fieldEntites.forEach(entity => {
            const { name } = entity.props
            if (this.getFieldValue(name) !== undefined) {
                entity.onStoreChange()
            }
        })
    }
    submit = () => {
        // 成功执行 onFinish，失败执行 onFinishFail
        console.log('submit')
    }
    getForm = () => {
        return {
            registerField: this.registerField,
            submit: this.submit,
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            setFieldsValue: this.setFieldsValue,
        }
    }
}

export default function UseForm(form) {
    let res
    if (form) {
        res = form
    } else {
        // new one
        const formStore = new FormStore()
        res = formStore.getForm()
    }
    return [res]
}
