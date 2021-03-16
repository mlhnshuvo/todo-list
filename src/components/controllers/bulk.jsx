import React, { useContext } from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import { Context } from '../context'

const Bulk = () => {
    const context = useContext(Context)
    return (
        <ButtonGroup>
            <Button color='danger' onClick={context.clearSelected}>
                Clear Selected
            </Button>
            <Button color='danger' onClick={context.clearCompleted}>
                Clear Completed
            </Button>
            <Button color='danger' onClick={context.reset}>
                Reset
            </Button>
        </ButtonGroup>
    )
}

export default Bulk;
