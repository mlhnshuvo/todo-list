import React from 'react';
import Todo from './components/todos/index'
import { Container, Row, Col } from 'reactstrap'

function App() {
  return (
    <Container className='my-3'>
      <Row>
        <Col>
          <Todo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
