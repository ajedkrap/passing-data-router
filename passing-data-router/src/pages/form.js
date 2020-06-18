import React, { Component } from 'react'
import {
  Row, Col, Container,
  Form, FormGroup, Label, Input, Button
} from 'reactstrap'

import logo from '../assets/profile.jpg'

class Forms extends Component {
  goToResult = (e) => {
    e.preventDefault()
    const form = new FormData(document.forms.formResult);

    const data = {
      username: form.get('username'),
      dob: form.get('dob')
    }

    this.props.history.push('/result', data)
  }


  render() {
    return (
      <>
        <Container className='w-100 h-100'>
          <Row className='d-flex justfiy-content-center align-items-center w-100 h-100'>
            <Col>
              <Form className='light border shadow p-4 ' id='formResult' onSubmit={this.goToResult}>
                <Row >
                  <Col style={{ 'margin-top': '-10em' }} className='d-flex justify-content-center py-5' >
                    <img style={{ height: '9em', width: '9em' }} className='rounded-circle shadow' src={logo} alt='profile' />
                  </Col>
                </Row>
                <FormGroup row>
                  <Label md={2}>Username</Label>
                  <Col md={10}>
                    <Input type='text' name='username' onChange={(e) => e.target.value} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={2}>Date of Birth</Label>
                  <Col md={10}>
                    <Input type='date' name='dob' onChange={(e) => e.target.value} />
                  </Col>
                </FormGroup>
                <Button type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Forms