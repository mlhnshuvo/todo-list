import React, { useState } from 'react';
import { Button, Input, FormGroup, Label, Form } from 'reactstrap'
import { useStoreActions } from 'easy-peasy'

const CreateTodo = (props) => {
    const states = useStoreActions(state => state)

    const [state, setState] = useState({
        text: '',
        des: ''
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        states.createTodo(state)
        event.target.reset()
        setState({ text: '', des: '' })
        props.toggleForm()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Enter task</Label>
                <Input
                    placeholder='Write something'
                    name='text'
                    value={state.text}
                    onChange={handleChange}
                />
                <Label>Describe task</Label>
                <Input
                    placeholder='Write something'
                    name='des'
                    value={state.des}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button type='submit'>Create task</Button>
        </Form>
    )
}

export default CreateTodo;