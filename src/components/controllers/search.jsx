import React from 'react';
import { Input, Button } from 'reactstrap'
import { useStoreActions } from 'easy-peasy'

const SearchPanel = ({ toggleForm }) => {
    const state = useStoreActions(state => state)
    return (
        <div className='d-flex'>
            <Input
                placeholder='Enter Search Term with Todo'
                className='mr-5'
                onChange={event => state.handleSearch(event.target.value)}
            />
            <Button
                color='success'
                onClick={toggleForm}
            >New</Button>
        </div>
    )
}

export default SearchPanel;