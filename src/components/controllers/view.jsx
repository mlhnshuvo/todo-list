import React, { useContext } from 'react'
import { Label, CustomInput } from 'reactstrap'
import { Context } from '../context'

const View = () => {
    const context = useContext(Context)
    return (
        <div className='d-flex'>
            <Label for='table-view' className='mr-4'>
                <CustomInput
                    type='radio'
                    name='view'
                    value='table'
                    id='table-view'
                    onChange={context.changeView}
                    className='d-inline-block'
                    checked={context.view === 'table'}
                />Table View
            </Label>
            <Label for='list-view' className='mr-4'>
                <CustomInput
                    type='radio'
                    name='view'
                    value='list'
                    id='list-view'
                    onChange={context.changeView}
                    className='d-inline-block'
                    checked={context.view === 'list'}
                />List View
            </Label>
        </div>
    )
}

export default View