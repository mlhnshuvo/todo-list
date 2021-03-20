import React from 'react';
import { Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import store from '../../store'

const SearchPanel = ({ toggleForm }) => (
    <div className='d-flex'>
        <Input
            placeholder='Enter Search Term with Todo'
            className='mr-5'
            value ={store.getState().searchTerm}
            onChange={event => store.dispatch({ type: 'handleSearch', payload: event.target.value })}
        />
        <Button
            color='success'
            onClick={toggleForm}
        >New</Button>
    </div>
)

const mapStateToProps = state => state

export default connect(mapStateToProps)(SearchPanel);