import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

const Bulk = ({ clearSelected, clearCompleted, reset }) => (
    <ButtonGroup>
        <Button onClick={clearSelected}>
            Clear Selected
		</Button>
        <Button onClick={clearCompleted}>
            Clear Completed
		</Button>
        <Button onClick={reset}>
            Reset
		</Button>
    </ButtonGroup>
)

Bulk.propTypes = {
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

export default Bulk;
