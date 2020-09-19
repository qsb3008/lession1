import React from "react";
import { Input, Button } from "antd";
// antd底层也是用的rc-field-form封装的
import { createForm } from 'rc-form'
// import Form, { Field } from '../components/myRcFieldForm'


const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

@createForm()
class MyRCFormPage extends React.Component {
    componentDidMount () {
        const { setFieldsValue } = this.props.form
        setFieldsValue({
            userName: 'default'
        })
    }

    submit = () => {
        const { validateFields } = this.props.form
        validateFields((error, val) => {
            if(error) {
                console.log('失败：', error)
            } else {
                console.log('成功：', val)
            }
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form
        return <div>
            {
                getFieldDecorator('userName', {
                    rules: [ nameRules ]
                })(
                    <Input placeholder="userName"/>
                )
            }
            {
                getFieldDecorator('password', {
                    rules: [ passworRules ]
                })(
                    <Input placeholder="password"/>
                )
            }
            <Button onClick={this.submit} type="primary" size="large" htmlType="submit">
                Submit
            </Button>
        </div>
    }
}

export default MyRCFormPage