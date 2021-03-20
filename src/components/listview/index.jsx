import React from 'react'
import { ListGroup, ListGroupItem, CustomInput, Button } from 'reactstrap'
import { connect } from 'react-redux'
import store from '../../store'

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={toggleSelect}
            />
            <div className='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.des}</p>
                <p>{todo.time.toDateString()}</p>

                <Button
                    color={todo.isComplete ? 'danger' : 'success'}
                    onClick={toggleComplete}
                >
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </div>
        </ListGroupItem>
    )
}


const ListView = (props) => {
    return (
        <ListGroup>
            {props.search.map(todo => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={() => store.dispatch({ type: 'toggleSelect', payload: todo.id })}
                    toggleComplete={() => store.dispatch({ type: 'toggleComplete', payload: todo.id })}
                />
            ))}
        </ListGroup>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(ListView)