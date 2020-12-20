import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import SearchPanel from './search'
import View from './view'
import Bulk from './bulk'
import Filter from './filter'

const Controller = ({ term, toggleForm, handleSearch, handleFilter, view, changeView, clearSelected, clearCompleted, reset }) => (
    <div>
        <SearchPanel
            term={term}
            handleSearch={handleSearch}
            toggleForm={toggleForm}
        />
        <Row className='my-4'>
            <Col md={{ size: 4 }}>
                <Filter handleFilter={handleFilter} />
            </Col>
            <Col md={{ size: 4 }}>
                <View
                    view={view}
                    changeView={changeView} />
            </Col>
            <Col md={{ size: 4 }} className='d-flex'>
                <Bulk
                    clearSelected={clearSelected}
                    clearCompleted={clearCompleted}
                    reset={reset} />
            </Col>
        </Row>
    </div>
)

Controller.prototype = {
    term: PropTypes.string.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Controller