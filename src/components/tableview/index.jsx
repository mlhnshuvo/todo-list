import React from 'react'
import PropTypes from 'prop-types'
import { Table, CustomInput, Button } from 'reactstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const RowItem = ({ todo, index, toggleSelect, toggleComplete }) => {
    return (
        <Draggable
            index={index}
            draggableId={todo.id}>
            {(provided) => (
                <tr
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
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
            )}
        </Draggable>
    )
}

RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

const TableView = ({ todos, toggleSelect, toggleComplete, dndHandler }) => {
    const onDragEnd = (e) => {
        if (!e.destination) return;

        const reorderedItem = todos.splice(e.source.index, 1);
        todos.splice(e.destination.index, 0, ...reorderedItem);

        dndHandler(todos)
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" >
                {(provided) => (
                    <Table>
                        <thead
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <tr>
                                <th>Select</th>
                                <th>Time</th>
                                <th>Todo</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <RowItem
                                    key={todo.id}
                                    todo={todo}
                                    index={index}
                                    toggleSelect={toggleSelect}
                                    toggleComplete={toggleComplete}
                                />
                            ))}
                            {provided.placeholder}
                        </tbody>
                    </Table>
                )}
            </Droppable>
        </DragDropContext>
    )
};

TableView.propTypes = {
    dndHandler: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default TableView