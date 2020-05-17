import React from 'react'
import PropTypes from 'prop-types'
import {Button, ButtonGroup} from 'reactstrap'

const Filter = ({handleFilter}) => (
    <ButtonGroup>
        <Button onClick={() => handleFilter('all')}>All</Button>
        <Button onClick={() => handleFilter('running')}>Running</Button>
        <Button onClick={() => handleFilter('completed')}>Completed</Button>
    </ButtonGroup>
)

Filter.propTypes = {
    handleFilter: PropTypes.func.isRequired
}
export default Filter