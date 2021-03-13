import React from 'react';
import ListView from '../listview/index'
import TableView from '../tableview/index'
import Controller from '../controllers/index'
import CreateTodo from '../create-todo/index'

import { Modal, ModalBody, ModalHeader } from 'reactstrap'

class Todos extends React.Component {
    state = {
        isOpenTodoForm: false,
        view: 'table',
    }

    toggleForm = () => {
        this.setState({ isOpenTodoForm: !this.state.isOpenTodoForm })
    }

    changeView = (event) => {
        this.setState({
            view: event.target.value
        })
    }

    getView = () => {
        return this.state.view === 'table' ? (
            <TableView />
        ) : (
            <ListView />
        )
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

    render() {
        return (
            <div>
                <h1 className='display-4 text-center mb-5'>React Todo App</h1>
                <Controller
                    view={this.state.view}
                    toggleForm={this.toggleForm}
                    changeView={this.changeView}
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
                        <CreateTodo/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos;
