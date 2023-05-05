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

class Promotion extends React.PureComponent {
  componentDidMount() {
    // this.props.fetchProfile();
  }

  render() {
    const { user, accountChange, updateProfile } = this.props

    return (
      <div className="account">
        <SubPage title={'Dashboard'} isMenuOpen={null}>
          {/* <Row> */}
          {/* <Col> */}
          <div
            style={{
              height: '150px',
              background: '#f2f2f2',
              padding: '12px',
            }}
          >
            <h2>Add New Promotion</h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <div>
                <h3>Promotion Name</h3>
                <input />
              </div>
              <div>
                <h3>Promotion value(%)</h3>
                <input />
              </div>
              <div>
                <h3>Start Date</h3>
                <input />
              </div>
              <div>
                <h3>End Date</h3>
                <input />
              </div>
              <div>
                <h3>Modify</h3>+{/* <input /> */}
              </div>
            </div>
          </div>
          {/* </Col> */}
          {/* </Row> */}
          <br />
          <br />
          <h2>Existing Promotions</h2>
          <div style={{ background: '#f2f2f2', width: '100%' }}>
            <Table>
              <thead>
                <tr>
                  <th>Promotion Name</th>
                  <th>Promotion Value</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">UI Promo</th>
                  <td>9%</td>
                  <td>04/05//2023</td>
                  <td>04/10/2023</td>

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
                      Active
                    </div>
                  </td>
                  <td>Delete</td>
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

export default connect(mapStateToProps, actions)(Promotion)
