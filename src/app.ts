import { Todo } from './todo';
export class App {
    heading = "Todos";
    todos: Todo[] = [];
    todoDescription = '';

    // attached(){
    //     for(let i = 0; i < 10; i++){            
    //         this.todos.push(new Todo("Item"+i));
    //     }
    // }

    addTodo() {
        if (this.todoDescription) {
            this.todos.push(new Todo(this.todoDescription));
            this.todoDescription = '';
        }
    }
    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1)
        }
    }
    save() {
        const jsonTodos = JSON.stringify(this.todos);
        localStorage.setItem("todos", jsonTodos);
    }
    clear(){
        localStorage.clear();
    }
    saveToSession(){
        const jsonTodos = JSON.stringify(this.todos);
        sessionStorage.setItem("todos", jsonTodos)
    }

    saveToCookie(){
        document.cookie = "sessionId = 01092019";
    }    
}