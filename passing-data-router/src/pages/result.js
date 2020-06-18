import React, { Component } from 'react'
import {
  Row, Col, Container
} from 'reactstrap'

class Result extends Component {

  componentDidMount() {
    console.log(this.props.location.state)
  }

  render() {
    let user = {}
    if (this.props.location.state) {
      const { username, dob } = this.props.location.state
      user = { username, dob }
    }
    return (
      <>
        {user.username &&
          <Container className='w-100 h-100'>
            <Row className='d-flex justfiy-content-center align-items-center w-100 h-100'>
              <Col className='h-25 shadow border bg-info'>
                <Row >
                  <Col className='display-2 text-center text-white'>{user.username}</Col>
                </Row>
                <Row>
                  <Col className='display-4 text-center text-white'>{user.dob}</Col>
                </Row>
              </Col>
            </Row>
          </Container>}

      </>
    )
  }
}
export default Result