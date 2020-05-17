import React from 'react';
import { Button, Input, FormGroup, Label, Form } from 'reactstrap'
import PropsType from 'prop-types'

class CreateTodo extends React.Component {
    state = {
        text: '',
        des: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({
            text: '',
            des: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter task</Label>
                    <Input
                        placeholder='Write something'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <Label>Describe task</Label>
                    <Input
                        placeholder='Write something'
                        name='des'
                        value={this.state.des}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit'>Create task</Button>
            </Form>
        )
    }
}

CreateTodo.propsTypes = {
    createTodo: PropsType.func.isRequired
}

export default CreateTodo;