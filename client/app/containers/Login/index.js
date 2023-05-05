/*
 *
 * Login
 *
 */

import React from 'react'

import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import actions from '../../actions'

import Input from '../../components/Common/Input'
import Button from '../../components/Common/Button'
import LoadingIndicator from '../../components/Common/LoadingIndicator'
import SignupProvider from '../../components/Common/SignupProvider'
import Signup from '../Signup'

class Login extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      register: false,
    }
    // this.toggleSignUp = this.toggleSignUp.bind(this)
  }
  render() {
    const {
      authenticated,
      loginFormData,
      loginChange,
      login,
      formErrors,
      isLoading,
      isSubmitting,
    } = this.props

    if (authenticated) return <Redirect to="/dashboard" />

    const toggleSignUp = () => {
      // alert('layer 222')
      this.setState((prevState) => ({
        register: !prevState.register,
      }))
    }
    const registerLink = () => {
      toggleSignUp()
      // this.props.history.push('/register')
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      login()
    }

    if (this.state.register) {
      return <Signup toggleSignUp={toggleSignUp} />
    } else
      return (
        <div className="login-form">
          {isLoading && <LoadingIndicator />}
          <h2>Login</h2>
        <hr />
          <form onSubmit={handleSubmit} noValidate>
            <Row>
              {/* <Col
              xs={{ size: 12, order: 2 }}
              md={{ size: '6', order: 1 }}
              className='p-0'
            > */}
              <Col xs="12" md="12">
                <Input
                  type={'text'}
                  error={formErrors['email']}
                  label={'Username or Email Address'}
                  name={'email'}
                  placeholder={'Please Enter Your Email'}
                  value={loginFormData.email}
                  onInputChange={(name, value) => {
                    loginChange(name, value)
                  }}
                />
              </Col>
              <Col xs="12" md="12">
                <Input
                  type={'password'}
                  error={formErrors['password']}
                  label={'Password'}
                  name={'password'}
                  placeholder={'Please Enter Your Password'}
                  value={loginFormData.password}
                  onInputChange={(name, value) => {
                    loginChange(name, value)
                  }}
                />
              </Col>
              {/* </Col> */}
              {/* <Col
              xs={{ size: 12, order: 1 }}
              md={{ size: '6', order: 2 }}
              className='mb-2 mb-md-0'
            >
              <SignupProvider />
            </Col> */}
            </Row>
            <hr />
            <div className="d-flex align-items-md-center justify-content-center">
              <Button
                type="submit"
                variant="primary"
                text="Login"
                disabled={isSubmitting}
              />
            </div>
            <br />
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-center">
              {/* <Link
                className="redirect-link forgot-password-link"
                to={'/forgot-password'}
              >
                Forgot Username?
              </Link> */}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <Link
                className="redirect-link forgot-password-link"
                to={'/forgot-password'}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                text="Sign Up"
                variant="link"
                className="md-3"
                onClick={registerLink}
              />
            </div>

            <div className="d-flex justify-content-center align-items-center mt-3">
              <Button
                text="Use Accept Policy"
                variant="link"
                className="md-3 text-underline"
                onClick={registerLink}
              />
            </div>
          </form>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated,
    loginFormData: state.login.loginFormData,
    formErrors: state.login.formErrors,
    isLoading: state.login.isLoading,
    isSubmitting: state.login.isSubmitting,
  }
}

export default connect(mapStateToProps, actions)(Login)
