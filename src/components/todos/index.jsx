import React from 'react';
import ListView from '../listview/index'
import TableView from '../tableview/index'
import Controller from '../controllers/index'
import CreateTodo from '../create-todo/index'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

class Todos extends React.Component {
    state = {
        view: 'table',
        isOpenTodoForm: false,
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

    render() {
        return (
            <div>
                <h1 className='display-4 text-center mb-5'>React Todo App</h1>
                <Controller
                    toggleForm={this.toggleForm}
                    changeView={this.changeView}
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
                        <CreateTodo />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos;
