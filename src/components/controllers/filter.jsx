import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import store from '../../store/index'

const Filter = () => (
    <ButtonGroup>
        <Button onClick={() => store.dispatch({ type: 'handleFilter', payload: 'all' })}>All</Button>
        <Button onClick={() => store.dispatch({ type: 'handleFilter', payload: 'running' })}>Running</Button>
        <Button onClick={() => store.dispatch({ type: 'handleFilter', payload: 'complete' })}>Completed</Button>
    </ButtonGroup>
)

export default Filter