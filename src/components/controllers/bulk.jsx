import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { useStoreActions } from 'easy-peasy'

const Bulk = () => {
    const state = useStoreActions(state => state)
    return (
        <ButtonGroup>
            <Button color='danger' onClick={()=> state.handleBulk('clearSelected')}>
                Clear Selected
            </Button>
            <Button color='danger' onClick={()=> state.handleBulk('clearCompleted')}>
                Clear Completed
            </Button>
            <Button color='danger' onClick={()=> state.handleBulk('reset')}>
                Reset
            </Button>
        </ButtonGroup>
    )
}

export default Bulk;
