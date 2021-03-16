import React, { useContext } from 'react'
import { Input, Button } from 'reactstrap'
import { Context } from '../context'

const SearchPanel = () => {
    const context = useContext(Context)
    return (
        <div className='d-flex'>
            <Input
                placeholder='Enter Search Term with Todo'
                className='mr-5'
                value={context.term}
                onChange={event => context.handleSearch(event.target.value)}
            />
            <Button
                color='success'
                onClick={context.toggleForm}
            >New</Button>
        </div>
    )
}

export default SearchPanel;