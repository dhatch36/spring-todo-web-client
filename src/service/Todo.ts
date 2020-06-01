class Todo {
    id?: number;
    title: string;
    description: string;
    complete: boolean;
    constructor(title: string, description: string, complete: boolean) {
        this.title = title;
        this.description = description;
        this.complete = complete;
    }
}
export default Todo;

