import React, {Component} from 'react';
import { Card, Checkbox, Col, Button, Modal} from 'antd';
import styles from './styles.module.css';
import Todo from "../service/Todo";
import {deleteTodoById} from "../service/todoService";

interface TodoProp {
    todo: Todo;
    reload(): void;
}
interface TodoState {
    modalVisible: boolean;
}
class TodoItem extends Component<TodoProp, TodoState> {
    constructor(props: TodoProp){
        super(props);
        this.state = {
            modalVisible: false
        }

    }
    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    };
    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };


    deleteTodo = () => {
        if (this.props.todo.id != null && this.props.todo.complete) {
            deleteTodoById(this.props.todo.id).then (() => this.props.reload());
        } else {
            this.showModal();
        }
    }

    render() {
        // @ts-ignore
        // @ts-ignore
        return (
            <Col className="gutter-ro" span={6} >
                <Card title={this.props.todo.title} className={styles.todoCard}>
                    <p>Description:</p>
                    <p>{this.props.todo.description}</p>
                    <p>Complete: <Checkbox defaultChecked={this.props.todo.complete} disabled/></p>
                    <Button type="primary" danger onClick={this.deleteTodo}>
                        Delete
                    </Button>
                    <Modal
                        title="Delete Todo"
                        visible={this.state.modalVisible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                     >
                        <p className={styles.dangerDeleteTodo}>In order to delete a todo, it MUST be completed!</p>
                    </Modal>
                </Card>
            </Col>
        );
    }
}

export default TodoItem;