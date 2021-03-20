import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import store from '../../store/index'

const Bulk = () => (
    <ButtonGroup>
        <Button color='danger' onClick={() => store.dispatch({ type: 'clearSelected' })}>
            Clear Selected
		</Button>
        <Button color='danger' onClick={() => store.dispatch({ type: 'clearCompleted' })}>
            Clear Completed
		</Button>
        <Button color='danger' onClick={() => store.dispatch({ type: 'reset' })}>
            Reset
		</Button>
    </ButtonGroup>
)

export default Bulk;
