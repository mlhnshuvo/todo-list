import React from 'react'
import { Row, Col } from 'reactstrap'
import SearchPanel from './search'
import View from './view'
import Bulk from './bulk'
import Filter from './filter'

const Controller = () => (
    <div>
        <SearchPanel />
        <Row className='my-4'>
            <Col md={{ size: 4 }}>
                <Filter />
            </Col>
            <Col md={{ size: 4 }}>
                <View />
            </Col>
            <Col md={{ size: 4 }} className='d-flex'>
                <Bulk />
            </Col>
        </Row>
    </div>
)

export default Controller