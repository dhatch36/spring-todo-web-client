import React, {Component} from 'react';
import { Card, Checkbox, Col, Button} from 'antd';
import styles from './styles.module.css';
import Todo from "../service/Todo";
import {deleteTodoById} from "../service/todoService";

interface TodoProp {
    todo: Todo;
    reload(): void;
}
class TodoItem extends Component<TodoProp> {
    constructor(props: TodoProp){
        super(props)

    }
    deleteTodo = () => {
        if (this.props.todo.id != null) {
            deleteTodoById(this.props.todo.id).then (() => this.props.reload());
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
                    <Button type="primary" danger onClick={this.deleteTodo}>Delete</Button>
                </Card>
            </Col>
        );
    }
}

export default TodoItem;
