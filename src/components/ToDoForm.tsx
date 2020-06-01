import React from 'react';
import { Input, Button, Form, Switch } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const TodoForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="title" label="title" rules={[{required: true}]}>
                <input/>
            </Form.Item>
            <Form.Item name="description" label="description" rules={[{required: true}]}>
                <Input.TextArea/>
            </Form.Item>
            <Form.Item name="complete" label="Complete" valuePropName="checked" initialValue={false}>
                <Switch/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}
export default TodoForm;