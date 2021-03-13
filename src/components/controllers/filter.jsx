import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import { useStoreActions } from 'easy-peasy'

const Filter = () => {
    const state = useStoreActions(state => state)
    return (
        <ButtonGroup>
            <Button onClick={() => state.handleFilter('all')}>All</Button>
            <Button onClick={() => state.handleFilter('running')}>Running</Button>
            <Button onClick={() => state.handleFilter('completed')}>Completed</Button>
        </ButtonGroup>
    )
}

export default Filter