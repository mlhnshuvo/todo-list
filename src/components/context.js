import React, { useState, createContext } from 'react';
import ListView from './listview/index'
import TableView from './tableview/index'
import Controller from './controllers/index'
import CreateTodo from './create-todo/index'
import shortid from 'shortid'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export const Context = createContext()

const Todos = () => {
    const [state, setState] = useState({
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
        searchTerm: '',
        isOpenTodoForm: false,
        view: 'table',
        filter: 'all'
    })

    const toggleSelect = todoId => {
        const tempTodo = [...state.todos]
        const todo = tempTodo.find(t => t.id === todoId)
        todo.isSelect = !todo.isSelect
        setState({ ...state, todos: tempTodo })
    }

    const toggleComplete = todoId => {
        const tempTodo = [...state.todos]
        const todo = tempTodo.find(t => t.id === todoId)
        todo.isComplete = !todo.isComplete
        setState({ ...state, todos: tempTodo })
    }

    const toggleForm = () => {
        const tempIsOpenTodoForm = state.isOpenTodoForm
        setState({ ...state, isOpenTodoForm: !tempIsOpenTodoForm })
    }

    const changeView = (event) => {
        setState({ ...state, view: event.target.value })
    }

    const handleSearch = (value) => {
        setState({ ...state, searchTerm: value })
    }

    const performSearch = () => {
        return state.todos.filter(todo =>
            todo.text
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
        )
    }

    const performTodos = performSearch()

    const performFilter = () => {
        if (state.filter === 'completed') {
            return performTodos.filter(todo => todo.isComplete)
        } else if (state.filter === 'running') {
            return performTodos.filter(todo => !todo.isComplete)
        } else {
            return performTodos
        }
    }

    const getView = () => {
        return state.view === 'table' ? (
            <TableView />
        ) : (
            <ListView />
        )
    }

    const handleFilter = (filter) => {
        setState({ ...state, filter })
    }

    const clearSelected = () => {
        const tempTodo = [...state.todos]
        let todos = tempTodo.filter(todo => !todo.isSelect)
        setState({ ...state, todos })
    }

    const clearCompleted = () => {
        const tempTodo = [...state.todos]
        let todos = tempTodo.filter(todo => !todo.isComplete)
        setState({ ...state, todos })
    }

    const reset = () => {
        setState({
            ...state,
            filter: 'all',
            searchTerm: '',
            view: 'table',
            isOpenTodoForm: false
        })
    }

    const createTodo = todo => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false
        const todos = [...state.todos, todo]
        setState({ ...state, todos })
    }

    return (
        <div>
            <h1 className='display-4 text-center mb-5'>React Todo App</h1>
            <Context.Provider value={{
                term: state.searchTerm,
                view: state.view,
                todos: performFilter(),
                toggleSelect: toggleSelect,
                toggleComplete: toggleComplete,
                toggleForm: toggleForm,
                handleSearch: handleSearch,
                changeView: changeView,
                handleFilter: handleFilter,
                clearSelected: clearSelected,
                clearCompleted: clearCompleted,
                reset: reset,
                createTodo: createTodo
            }}>
                <Controller />
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
                        <CreateTodo />
                    </ModalBody>
                </Modal>
            </Context.Provider>
        </div>
    )
}

export default Todos;
