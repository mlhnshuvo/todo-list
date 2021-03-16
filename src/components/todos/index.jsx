import React, { useState } from 'react';
import ListView from '../listview/index'
import TableView from '../tableview/index'
import Controller from '../controllers/index'
import CreateTodo from '../create-todo/index'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const Todos = () => {
    const [state, setState] = useState({
        isOpenTodoForm: false,
        view: 'table',
    })

    const toggleForm = () => {
        setState({ ...state, isOpenTodoForm: !state.isOpenTodoForm })
    }

    const changeView = (event) => {
        setState({
            ...state,
            view: event.target.value
        })
    }

    const getView = () => {
        return state.view === 'table' ? (
            <TableView />
        ) : (
            <ListView />
        )
    }

    return (
        <div>
            <h1 className='display-4 text-center mb-5'>React Todo App</h1>
            <Controller
                view={state.view}
                toggleForm={toggleForm}
                changeView={changeView}
            />
            <div>
                {getView()}
            </div>
            <Modal
                isOpen={state.isOpenTodoForm}
                toggle={toggleForm}>
                <ModalHeader toggle={toggleForm}>
                    Create New Todo
                    </ModalHeader>
                <ModalBody>
                    <CreateTodo toggleForm={toggleForm}/>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Todos;
