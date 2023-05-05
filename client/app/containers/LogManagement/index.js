/*
 *
 * Account
 *
 */

import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions'

import AccountDetails from '../../components/Manager/AccountDetails'
import SubPage from '../../components/Manager/SubPage'
import Product from '../Product'
import Address from '../../containers/Address'
import { Col, Row, Table } from 'reactstrap'

class LogManagement extends React.PureComponent {
  componentDidMount() {
    // this.props.fetchProfile();
  }

  render() {
    const { user, accountChange, updateProfile } = this.props

    return (
      <div className="account">
        <SubPage title={'Dashboard'} isMenuOpen={null}>
          <Row>
            <Col md="6">
              <div
                style={{
                  height: '150px',
                  background: '#f2f2f2',
                  padding: '12px',
                }}
              >
                <h2>Monthly Sales</h2>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <div>
                    <h3>Completed</h3>
                    20%
                  </div>
                  <div>
                    <h3>In Progress</h3>
                    20%
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div
                style={{
                  height: '150px',
                  background: '#f2f2f2',
                  padding: '12px',
                }}
              >
                <h2>Daily Customer Traffic</h2>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <div>
                    <h3>Existing</h3>
                    20%
                  </div>
                  <div>
                    <h3>New</h3>
                    20%
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <h2>Transactions</h2>
          <div
            style={{ background: '#f2f2f2', width: '100%' }}
          >
            <Table>
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Customer Name</th>
                  <th>Totals</th>
                  <th>Delivered To</th>
                  <th>Order Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dr. Arafath</td>
                  <td>$1000</td>
                  <td>address, san antonio</td>
                  <td>04/02/2023</td>
                  <td>
                    <div
                      style={{
                        background: 'grey',
                        textAlign: 'center',
                        color: '#ffffff',
                        borderRadius: '9px',
                        padding: 3,
                      }}
                    >
                      Shipped
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Dr. Arafath</td>
                  <td>$1000</td>
                  <td>address, san antonio</td>
                  <td>04/02/2023</td>
                  <td>
                    <div
                      style={{
                        background: 'grey',
                        textAlign: 'center',
                        color: '#ffffff',
                        borderRadius: '9px',
                        padding: 3,
                      }}
                    >
                      Delivered
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <br />
          <h2>Reviews</h2>
          <div
            style={{ background: '#f2f2f2', width: '100%' }}
          >
            <Table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Rating</th>
                  <th>Order Number</th>
                  <th>ORder Date</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Dr. Arafath</th>
                  <td>stars</td>
                  <td>wwxsw72wnxnKmxw9</td>
                  <td>02/03/2023</td>
                  <td>Lorem ipsum text for dummy test</td>
                </tr>
                <tr>
                  <th scope="row">Dr. Arafath</th>
                  <td>stars</td>
                  <td>wwxsw72wnxnKmxw9</td>
                  <td>02/03/2023</td>
                  <td>Lorem ipsum text for dummy test</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </SubPage>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
    resetFormData: state.resetPassword.resetFormData,
    formErrors: state.resetPassword.formErrors,
  }
}

export default connect(mapStateToProps, actions)(LogManagement)
