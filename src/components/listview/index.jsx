import React, { useContext } from 'react'
import { ListGroup, ListGroupItem, CustomInput, Button } from 'reactstrap'
import { Context } from '../context'

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
    const context = useContext(Context)
    return (
        <ListGroup>
            {context.todos.map(todo => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={context.toggleSelect}
                    toggleComplete={context.toggleComplete}
                />
            ))}
        </ListGroup>
    )
}

export default ListView