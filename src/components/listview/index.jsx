import React from 'react'
import PropTypes from 'prop-types'
import { CustomInput, Button } from 'reactstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const ListItem = ({ todo, index, toggleSelect, toggleComplete }) => {
    return (
        <Draggable
            index={index}
            draggableId={todo.id}>
            {provided => (
                <li className='d-flex align-items-center'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
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
                </li>
            )}
        </Draggable>
    )
}

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

const ListView = ({ todos, toggleComplete, toggleSelect, dndHandler }) => {
    const handleOnDragEnd = (e) => {
        if (!e.destination) return;

        const reorderedItem = todos.splice(e.source.index, 1);
        todos.splice(e.destination.index, 0, ...reorderedItem);

        dndHandler(todos)
    }
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
                {provided => (
                    <ul
                        className="characters"
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {todos.map((todo, index) => (
                            <ListItem
                                key={todo.id}
                                todo={todo}
                                index={index}
                                toggleSelect={toggleSelect}
                                toggleComplete={toggleComplete}
                            />
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}

ListView.propTypes = {
    dndHandler: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView