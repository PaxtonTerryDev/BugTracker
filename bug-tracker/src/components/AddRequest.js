import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './AddRequest.css'
import axios from 'axios'

const AddRequest = () => {


class Tasks {
    constructor(name, email, department, message){
        this.name = name;
        this.email = email;
        this.department = department;
        this.message = message;
    }
}
function handleSubmit(event) {
    event.preventDefault();
    let newTask = new Tasks(event.target.name.value, event.target.email.value, event.target.department.value, event.target.message.value);
    console.log(newTask)
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.department.value = "";
    event.target.message.value = event.target.message.defaultValue;
    axios.get('http://localhost:4000', { crossdomain: true })
        .then(response => (console.log(`request: ${response}`)))
        .catch(error => console.log(`Error ${error}`));
    // axios.post('http://localhost:4000', newTask).then(response => console.log(response)).catch(console.log('could not send data'));
}



  return (
    <div className='add-bug-container'>
        <Container fluid className='d-flex align-items-center justify-content-center add-bug-form'>
            
        <Row>
                <Col className='p-5 add-bug-col'>
                <h2 className='text-center pb-3'>Help Request</h2>


            <Form onSubmit={handleSubmit}>
            {/* Name */}
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First and Last Name" name='name' required />
                </Form.Group>



            {/* Email */}
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name='email' required />
                </Form.Group>
            </Row>



            {/* Department Select */}
            <Form.Group as={Col} controlId="formGridConcern">
                <Form.Label>Which Department does this concern?</Form.Label>
                <Form.Select defaultValue="Choose..." name='department'>
                    <option disabled>Choose...</option>
                    <option>Human Resources</option>
                    <option>IT</option>
                    <option>Sales</option>
                    <option>Management</option>
                </Form.Select>
                </Form.Group>



            {/* Message Submit */}
            <Row className="mb-3">
                <Form.Group className="mb-2 mt-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label >What do you need help with?</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Enter Text Here' name='message' required />
                </Form.Group>
            </Row>


            {/* Terms and Conditions */}
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I agree to receive emails" required />
            </Form.Group>


            {/* Submit Button */}
            <Button variant="primary" type="submit" className='submit-button'>
                Submit
            </Button>


            </Form>
        </Col>
        </Row>
                
        </Container>
    </div>
  );
}

export default AddRequest