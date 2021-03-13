import React, { useState } from 'react';
import { Button, Input, FormGroup, Label, Form } from 'reactstrap'
import { useStoreActions } from 'easy-peasy'

const CreateTodo = () => {
    const st = useStoreActions(state => state)

    const [text, setText] = useState('')
    const [des, setDes] = useState('')

    const textChange = (text) => {
        setText(text)
    }

    const desChange = (des) => {
        setDes(des)
    }

    const handleSubmit = event => {
        event.preventDefault()
        st.createTodo({text, des})
        event.target.reset()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Enter task</Label>
                <Input
                    placeholder='Write something'
                    name='text'
                    value={text}
                    onChange={(e)=> textChange(e.target.value)}
                />
                <Label>Describe task</Label>
                <Input
                    placeholder='Write something'
                    name='des'
                    value={des}
                    onChange={(e)=> desChange(e.target.value)}
                />
            </FormGroup>
            <Button type='submit'>Create task</Button>
        </Form>
    )
}

export default CreateTodo;