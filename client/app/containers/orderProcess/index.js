/*
 *
 * OrderSuccess
 *
 */

import React, { useState } from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import actions from '../../actions'

import NotFound from '../../components/Common/NotFound'
import LoadingIndicator from '../../components/Common/LoadingIndicator'
import { Container, Row, Col, Button, Input, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { addOrder, placeOrder } from '../Order/actions'
import OrderSuccess from '../OrderSuccess'

const OrderProcess = (props) => {
  const [open,setOpen] = useState("")
  //   componentDidMount() {
  //     const id = this.props.match.params.id;
  //     this.props.fetchOrder(id);
  //   }

  //   componentDidUpdate(prevProps) {
  //     if (this.props.match.params.id !== prevProps.match.params.id) {
  //       const id = this.props.match.params.id;
  //       this.props.fetchOrder(id);
  //     }
  //   }

  
    const { order, isLoading } = props

    const OpenSuccessModal = (id) => {
      setOpen(id)
    }
    const ModalOpened = 
    <Modal isOpen={open ? true : false}>
      <OrderSuccess id={open}/>
        {/* <ModalHeader>Thanks for you Order!</ModalHeader>
        <ModalBody>
          Your Order is Confirmed.
          <br/>
          Order Number is #{open}
        </ModalBody>
        <ModalFooter>
          <Button color="primary">
            Continue Shopping
          </Button>{' '}
          <Button color="secondary">
            Manage Orders
          </Button>
        </ModalFooter> */}
      </Modal>

    return (
      <div className="order-process">
        {ModalOpened}
        <Container>
          <Row>
            <Col className="" xs="4">
              <h2 className="my-4">1. Shipping address </h2>{' '}
            </Col>
            <Col className="" xs="8">
              <div className="m-4">
                <div style={{ position: 'absolute', right: 10, top: 10 }}>
                  <Button color="white">+ Add New</Button>
                </div>
                <input
                  type="radio"
                  id="address1"
                  value={'Address 1'}
                  name="Address 1"
                />
                <label for="address1"> &nbsp;Address 1</label> <br />
                &nbsp;&nbsp;&nbsp;Sample Address goes here
                <br />
                <br />
                <input
                  type="radio"
                  id="address1"
                  value={'Address 1'}
                  name="Address 1"
                />
                <label for="address1">&nbsp;Address 2</label>
                <br />
                &nbsp;&nbsp;&nbsp;Sample Address goes here
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="" xs="4">
              <h2 className="my-4">2. Payment</h2>
            </Col>
            <Col className="" xs="8">
              <div className="m-4">
                <div style={{ position: 'absolute', right: 10, top: 10 }}>
                  <Button color="white">+ Add a debit or credit card</Button>
                </div>
                <input
                  type="radio"
                  id="address1"
                  value={'Address 1'}
                  name="Address 1"
                />
                <label for="address1"> &nbsp;Visa ending in 0000</label> <br />
                {/* &nbsp;&nbsp;&nbsp;Sample Address goes here */}
                <br />
                <br />
                <input
                  type="radio"
                  id="address1"
                  value={'Address 1'}
                  name="Address 1"
                />
                <label for="address1">
                  &nbsp;American express ending in 0000
                </label>
                <br />
                &nbsp;&nbsp;&nbsp;Sample Address goes here
                <br />
                <br />
                <label>Enter gift card or promotional code</label>
                <Input id="exampleZip" name="zip" />
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="" xs="4">
              <h2 className="my-4">3. Order Summary</h2>
            </Col>
            <Col className="" xs="8">
              <Table>
                {/* <thead>
                  <tr>
                    <th>Items</th>
                    <th>Promotional Code</th>
                    <th>Shipping</th>
                    <th>Taxes</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">items (2)</th>
                    <td>$14.98</td>
                  </tr>
                  <tr>
                    <th scope="row">Promotional code</th>
                    <td>- $98</td>
                  </tr>
                  <tr>
                    <th scope="row">Shipping</th>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <th scope="row">Taxes</th>
                    <td>$1.00</td>
                  </tr>
                  {/* <hr/> */}
                  <tr>
                    <th scope="row">Order Total</th>
                    <td>
                      <strong>$15.00</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <div
            className="m-4 flex justify-center"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button style={{ borderRadius: '0', color: 'white' }}>
              <span
                style={{ color: 'white' }}
                onClick={() => props.addOrder((orderId) => OpenSuccessModal(orderId))}
              >
                Place Order Now
              </span>
            </Button>
          </div>
        </Container>
      </div>
    )
  }


const mapStateToProps = (state) => {
  return {
    order: state.order.order,
    isLoading: state.order.isLoading,
  }
}

export default connect(mapStateToProps, actions)(OrderProcess)
