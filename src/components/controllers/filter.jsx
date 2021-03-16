import React, { useContext } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import { Context } from '../context'

const Filter = () => {
    const context = useContext(Context)
    return (
        <ButtonGroup>
            <Button onClick={() => context.handleFilter('all')}>All</Button>
            <Button onClick={() => context.handleFilter('running')}>Running</Button>
            <Button onClick={() => context.handleFilter('completed')}>Completed</Button>
        </ButtonGroup>
    )
}

export default Filter