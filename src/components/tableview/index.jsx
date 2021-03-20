import React from 'react'
import { Table, CustomInput, Button } from 'reactstrap'
import { connect } from 'react-redux'
import store from '../../store'

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <tr>
            <th scope='row'>
                <CustomInput
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={toggleSelect}
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
                    onClick={toggleComplete}>
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </th>
        </tr>
    )
}

const TableView = (props) => {
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
                {props.performFilter.map(todo => (
                    <RowItem
                        key={todo.id}
                        todo={todo}
                        toggleSelect={() => store.dispatch({ type: 'toggleSelect', payload: todo.id })}
                        toggleComplete={() => store.dispatch({ type: 'toggleComplete', payload: todo.id })}
                    />
                ))}
            </tbody>
        </Table>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(TableView)