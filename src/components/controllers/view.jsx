import React from 'react'
import { Label, CustomInput } from 'reactstrap'

const View = ({ changeView, view }) => (
    <div className='d-flex'>
        <Label for='table-view' className='mr-4'>
            <CustomInput
                type='radio'
                name='view'
                value='table'
                id='table-view'
                onChange={changeView}
                className='d-inline-block'
                checked={view === 'table'}
            />Table View
        </Label>
        <Label for='list-view' className='mr-4'>
            <CustomInput
                type='radio'
                name='view'
                value='list'
                id='list-view'
                onChange={changeView}
                className='d-inline-block'
                checked={view === 'list'}
            />List View
        </Label>
    </div>
)

export default View