import React, { useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import DisplayCount from './DisplayCount';
import { deleteTodo } from '../redux/action/todo';

 const DisplayToDos = ({todos}) => {
    //const [todos, setToDos] = useState([]);

    return (
        <Container>
            <Row>
                <Col>
                    <Card className='shadow-sm mt-3'>
                        <Card.Body>
                            <h3>All to dos are here!</h3>
                            <DisplayCount/>
                            <ListGroup>
                                {todos.map((todo, index) => (
                                    <ListGroup.Item key={index}>
                                        <h4>{todo.title}</h4>
                                        <p>{todo.description}</p>
                                        <Button variant='danger' size='sm'onClick={e=>deleteTodo(todo.id)}>Delete</Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps=state=>{
    console.log(state)
    return {
        todos: state.todos // Assuming the Redux state has a property named 'todos' containing the array of todos
    };
}
const mapDispatchToProps=dispatch=>({
    deleteTodo:id=>dispatch(deleteTodo(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(DisplayToDos)
