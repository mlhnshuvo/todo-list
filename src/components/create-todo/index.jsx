import React, { useState, useContext } from 'react';
import { Button, Input, FormGroup, Label, Form } from 'reactstrap'
import { Context } from '../context'

const CreateTodo = () => {
    const context = useContext(Context)

    const [form, setState] = useState({
        text: '',
        des: ''
    })

    const handleChange = (event) => {
        setState({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        context.createTodo(form)
        event.target.reset()
        setState({
            text: '',
            des: ''
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Enter task</Label>
                <Input
                    placeholder='Write something'
                    name='text'
                    value={form.text}
                    onChange={handleChange}
                />
                <Label>Describe task</Label>
                <Input
                    placeholder='Write something'
                    name='des'
                    value={form.des}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button type='submit'>Create task</Button>
        </Form>
    )

}

export default CreateTodo;