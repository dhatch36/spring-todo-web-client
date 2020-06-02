import React, {Component} from 'react';
import {Button, Form, Input, Modal, Switch} from "antd";
import styles from "./styles.module.css";
import {updateTodoById} from "../service/todoService";
import Todo from "../service/Todo";


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

interface TodoUpdateModalProps {
    visible: boolean;
    todo: Todo;
    onCancel: () => void;
    reload: () => void;
}

const TodoUpdateModal: React.FC<TodoUpdateModalProps> = ({visible, todo, onCancel, reload}) => {
    const [form] = Form.useForm();

    const onUpdate = (values: any) => {
        values.id = todo.id;
        console.log(values);
        updateTodoById(values).then(reload).then(() => onCancel());
    }

    return (
        <Modal
            visible={visible}
            title="Update Todo"
            onCancel={onCancel}
            footer={null}
        >
            <Form { ...layout } form={ form } name="control-hooks" initialValues={todo} onFinish={ onUpdate }>
                <Form.Item name="title" label="Title" rules={[{ required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="complete" label="Complete" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item { ...tailLayout }>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default TodoUpdateModal;
