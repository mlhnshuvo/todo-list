import React, { useContext } from 'react'
import { Table, CustomInput, Button } from 'reactstrap'
import { Context } from '../context'

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <tr>
            <th scope='row'>
                <CustomInput
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
            </th>
            <th>
                {todo.time.toDateString()}
            </th>
            <th>
                {todo.text}
            </th>
            <th>
                {todo.des}
            </th>
            <th>
                <Button
                    color={todo.isComplete ? 'danger' : 'success'}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </th>
        </tr>
    )
}

const TableView = () => {
    const state = useContext(Context)
    return (
        <Table>
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {state.todos.map(todo => (
                    <RowItem
                        key={todo.id}
                        todo={todo}
                        toggleSelect={state.toggleSelect}
                        toggleComplete={state.toggleComplete}
                    />
                ))}
            </tbody>
        </Table>
    );
}

export default TableView