import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function AntdFormPage(props) {
    const [form] = Form.useForm();
    // 表单校验成功执行
    const onFinish = val => {
        console.log("onFinish", val); //sy-log
    };
    // 表单校验失败执行
    const onFinishFailed = val => {
        console.log("onFinishFailed", val); //sy-log
    };

    useEffect(() => {
        console.log("form", form); //sy-log
        form.setFieldsValue({ name: "default" });
    }, [form]);

    return (
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <FormItem label="姓名" name="name" rules={[nameRules]}>
                <Input placeholder="name input placeholder" />
            </FormItem>
            <FormItem label="密码" name="password" rules={[passworRules]}>
                <Input placeholder="password input placeholder" />
            </FormItem>
            <FormItem>
                <Button type="primary" size="large" htmlType="submit">
                    Submit
                </Button>
            </FormItem>
        </Form>
    );
}