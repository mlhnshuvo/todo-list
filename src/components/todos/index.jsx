import React from 'react';
import ListView from '../listview/index'
import TableView from '../tableview/index'
import Controller from '../controllers/index'
import CreateTodo from '../create-todo/index'
import shortid from 'shortid'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

class Todos extends React.Component {
    state = {
        todos: [
            {
                id: 'dgfgtytbd',
                text: 'Todo 1',
                des: 'description 1',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'dgfgtytdsrd',
                text: 'Todo 2',
                des: 'description 2',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'table',
        filter: 'all'
    }

    toggleSelect = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isSelect = !todo.isSelect

        this.setState({ todos })
    }

    toggleComplete = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isComplete = !todo.isComplete

        this.setState({ todos })
    }

    toggleForm = () => {
        this.setState({ isOpenTodoForm: !this.state.isOpenTodoForm })
    }

    handleSearch = (value) => {
        this.setState({ searchTerm: value })
    }

    changeView = (event) => {
        this.setState({
            view: event.target.value
        })
    }

    performSearch = () => {
        return this.state.todos.filter(todo =>
            todo.text
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
        )
    }

    performFilter = (todos) => {
        let { filter } = this.state
        if (filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    }

    getView = () => {
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view === 'table' ? (
            <TableView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete} />
        ) : (
                <ListView
                    todos={todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                />
            )
    }

    handleFilter = (filter) => {
        this.setState({ filter })
    }

    clearSelected = () => {
        let todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({ todos })
    }

    clearCompleted = () => {
        let todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({ todos })
    }

    reset = () => {
        this.setState({
            filter: 'all',
            searchTerm: '',
            view: 'table',
            isOpenTodoForm: false
        })
    }

    createTodo = todo => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos]
        this.setState({ todos })
        this.toggleForm()
    }

    render() {
        return (
            <div>
                <h1 className='display-4 text-center mb-5'>React Todo App</h1>
                <Controller
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    changeView={this.changeView}
                    handleFilter={this.handleFilter}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                    view={this.state.view}
                />
                <div>
                    {this.getView()}
                </div>
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodo createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos;
