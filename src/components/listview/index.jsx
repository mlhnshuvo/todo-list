import React from 'react'
import { ListGroup, ListGroupItem, CustomInput, Button } from 'reactstrap'
import { useStoreState, useStoreActions } from 'easy-peasy'

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            <div className='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.des}</p>
                <p>{todo.time.toDateString()}</p>

                <Button
                    color={todo.isComplete ? 'danger' : 'success'}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </div>
        </ListGroupItem>
    )
}

const ListView = () => {
    const todos = useStoreState(state => state.getView)
    const state = useStoreActions(state => state)
    return (
        <ListGroup>
            {todos.map(todo => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={state.toggleSelect}
                    toggleComplete={state.toggleComplete}
                />
            ))}
        </ListGroup>
    )
}

export default ListView