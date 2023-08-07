import React, { useState } from 'react'
import { Card, Container, Row ,Col, Form, Button} from 'react-bootstrap'
import  DisplayCount from './DisplayCount'
import { addTodo } from '../redux/action/todo'
import { connect } from 'react-redux'
import { v4 } from 'uuid'

 const AddToDo = (addTodo) => {
    const[todo,setToDo]=useState({title:'',
discription:'',id:''})
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(todo)
        addTodo({...todo,id:v4()})

    }
    return (
       <Container>
        <Row>
            <Col md={12}>
                <Card>
                    <Card.Body>
                        <h3>Add todo Here!</h3>
                        <DisplayCount/>
                        {/* form */}
                        <Form onSubmit={handleSubmit}>
                            {/* title */}
                            <Form.Group>
                                <Form.Label>
                                    TODO Title
                                </Form.Label>
                                <Form.Control type='text'
                                placeholder='Enter here'
                                value={todo.title}
                                name='text'
                                onChange={e=>setToDo({...todo,title:e.target.value})}/>
                            </Form.Group>
                            {/* discription */}
                            <Form.Group>
                            <Form.Label className='mt-3'>
                                    TODO Discription
                                </Form.Label>
                                <Form.Control as={'textarea'}type='text'
                                placeholder='Enter here'
                                value={todo.discription}
                                onChange={e=>setToDo({...todo,discription:e.target.value})}/>
                                </Form.Group>
                                <Container className='text-center mt-3'>
                                    <Button type='submit' variant='primary'>Submit</Button>
                                </Container>
                        </Form>
                    </Card.Body>

                </Card>
            </Col>
        </Row>
       </Container>
    )
}
const mapStateToProps=(state)=>({})
const mapDispatchToProps=(dispatch)=>({
    addTodo:todo=>(dispatch(addTodo(todo)))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddToDo)