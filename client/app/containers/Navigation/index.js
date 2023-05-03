/**
 *
 * Navigation
 *
 */

import React from 'react'
import { Genres } from '../Homepage/constants'
import { connect } from 'react-redux'
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom'
import Autosuggest from 'react-autosuggest'
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'

import actions from '../../actions'

import Button from '../../components/Common/Button'
import CartIcon from '../../components/Common/CartIcon'
import { BarsIcon } from '../../components/Common/Icon'
import MiniBrand from '../../components/Store//MiniBrand'
import Menu from '../NavigationMenu'
import Cart from '../Cart'
import Login from '../Login'
import Signup from '../Signup'

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      register: false,
    }
    this.toggleLogin = this.toggleLogin.bind(this)
    this.toggleSignUp = this.toggleSignUp.bind(this)
  }

  componentDidMount() {
    this.props.fetchStoreBrands()
    this.props.fetchStoreCategories()
  }

  toggleBrand() {
    this.props.fetchStoreBrands()
    this.props.toggleBrand()
  }

  toggleMenu() {
    this.props.fetchStoreCategories()
    this.props.toggleMenu()
  }

  getSuggestionValue(suggestion) {
    return suggestion.name
  }

  toggleLogin() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }))
  }

  toggleSignUp() {
    alert('layer 222')
    this.setState((prevState) => ({
      register: !prevState.register,
    }))
  }

  ModalRender() {
    return (
      <Modal isOpen={this.state.open} toggle={this.toggleLogin} centered>
        <ModalHeader
          style={{ background: '#25bea2' }}
          toggle={this.toggleLogin}
        >
          <span style={{ color: '#ffffff' }}>Welcome to Booksphere</span>
        </ModalHeader>
        <ModalBody>
          {this.state.register ? (
            <Signup toggleSignUp={this.toggleSignUp} />
          ) : (
            <Login toggleSignUp={this.toggleSignUp} />
          )}
        </ModalBody>
      </Modal>
    )
  }

  renderSuggestion(suggestion, { query, isHighlighted }) {
    const BoldName = (suggestion, query) => {
      const matches = AutosuggestHighlightMatch(suggestion.name, query)
      const parts = AutosuggestHighlightParse(suggestion.name, matches)

      return (
        <div>
          {parts.map((part, index) => {
            const className = part.highlight
              ? 'react-autosuggest__suggestion-match'
              : null
            return (
              <span className={className} key={index}>
                {part.text}
              </span>
            )
          })}
        </div>
      )
    }

    return (
      <Link to={`/product/${suggestion.slug}`}>
        <div className="d-flex">
          <img
            className="item-image"
            src={`${
              suggestion.imageUrl
                ? suggestion.imageUrl
                : '/images/placeholder-image.png'
            }`}
          />
          <div>
            <Container>
              <Row>
                <Col>
                  <span className="name">{BoldName(suggestion, query)}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="price">${suggestion.price}</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Link>
    )
  }

  render() {
    const {
      history,
      authenticated,
      user,
      cartItems,
      brands,
      categories,
      signOut,
      isMenuOpen,
      isCartOpen,
      isBrandOpen,
      toggleCart,
      toggleMenu,
      searchValue,
      suggestions,
      onSearch,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
    } = this.props

    const inputProps = {
      placeholder: 'Search By Title, Author, ISBN or keyword',
      value: searchValue,
      onChange: (_, { newValue }) => {
        onSearch(newValue)
      },
    }

    return (
      <header className="header fixed-mobile-header">
        {this.ModalRender()}
        <Container>
          <Row className="align-items-center top-header">
            <Col
              xs={{ size: 12, order: 1 }}
              sm={{ size: 12, order: 1 }}
              md={{ size: 3, order: 1 }}
              lg={{ size: 2, order: 1 }}
              className="pr-0"
            >
              <div className="brand">
                {categories && categories.length > 0 && (
                  <Button
                    borderless
                    variant="empty"
                    className="d-none d-md-block"
                    ariaLabel="open the menu"
                    icon={<BarsIcon />}
                    onClick={() => this.toggleMenu()}
                  />
                )}
                <Link to="/">
                  <img style={{ height: 70 }} src="/images/booksphere.png" />
                  {/* <h1 className='logo'>Booksphere</h1> */}
                </Link>
              </div>
            </Col>
            <Col
              xs={{ size: 12, order: 4 }}
              sm={{ size: 12, order: 4 }}
              md={{ size: 12, order: 4 }}
              lg={{ size: 4, order: 2 }}
              className="pt-2 pt-lg-0"
            >
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={(_, item) => {
                  history.push(`/product/${item.suggestion.slug}`)
                }}
              />
            </Col>
            <Col
              xs={{ size: 12, order: 2 }}
              sm={{ size: 12, order: 2 }}
              md={{ size: 4, order: 1 }}
              lg={{ size: 5, order: 3 }}
              className="desktop-hidden"
            >
              <div className="header-links">
                <Button
                  borderless
                  variant="empty"
                  ariaLabel="open the menu"
                  icon={<BarsIcon />}
                  onClick={() => this.toggleMenu()}
                />
                <CartIcon cartItems={cartItems} onClick={toggleCart} />
              </div>
            </Col>
            <Col
              xs={{ size: 12, order: 2 }}
              sm={{ size: 12, order: 2 }}
              md={{ size: 9, order: 1 }}
              lg={{ size: 6, order: 3 }}
              // className='px-0'
            >
              <Navbar color="light" light expand="md" className="mt-1 mt-md-0">
                <Nav navbar>
                  {/* {brands && brands.length > 0 && (
                    <Dropdown
                      nav
                      inNavbar
                      toggle={() => this.toggleBrand()}
                      isOpen={isBrandOpen}
                    >
                      <DropdownToggle nav>
                        Brands
                        <span className="fa fa-chevron-down dropdown-caret"></span>
                      </DropdownToggle>
                      <DropdownMenu right className="nav-brand-dropdown">
                        <div className="mini-brand">
                          <MiniBrand
                            brands={brands}
                            toggleBrand={() => this.toggleBrand()}
                          />
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  )} */}
                  {/* <NavItem>
                    <NavLink
                      tag={ActiveLink}
                      to="/shop"
                      activeClassName="active"
                    >
                      Shop
                    </NavLink>
                  </NavItem> */}
                  
            
                  {authenticated ? (
                    <div>
                    <Button
                      borderless
                      variant="empty"
                      size="small"
                      ariaLabel="open the menu"
                      icon={<img src="/images/dummy_profile.jpg" height={"25px"} width={"25px"} style={{borderRadius : "10px"}}/>}
                      text={user.firstName ? user.firstName : 'Welcome'}
                      onClick={() => history.push('/dashboard')}
                    />
                    &nbsp;
                    |
                    &nbsp;
                    <Button
                      borderless
                      size="small"
                      variant="empty"
                      ariaLabel="open the menu"
                      text="Manage Order"
                      onClick={() => history.push('/dashboard/orders')}
                    />
                    &nbsp;
                    |
                    &nbsp;
                    <Button
                      borderless
                      variant="empty"
                      size={"small"}
                      ariaLabel="open the menu"
                      text="Log Out"
                      onClick={() => signOut()}
                    />
                  </div>
                    // <UncontrolledDropdown nav inNavbar>
                    //   <DropdownToggle nav>
                    //     {user.firstName ? user.firstName : 'Welcome'}
                    //     <span className="fa fa-chevron-down dropdown-caret"></span>
                    //   </DropdownToggle>
                    //   <DropdownMenu right>
                    //     <DropdownItem
                    //       onClick={() => history.push('/dashboard')}
                    //     >
                    //       Dashboard
                    //     </DropdownItem>
                    //     <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
                    //   </DropdownMenu>
                    // </UncontrolledDropdown>
                  ) : (
                    <NavItem style={{ cursor: 'pointer' }}>
                      <NavLink
                        // tag={ActiveLink}
                        // to='/login'
                        onClick={() => this.toggleLogin()}
                        activeClassName="active"
                      >
                        Login
                      </NavLink>
                    </NavItem>

                    // <UncontrolledDropdown nav inNavbar>
                    //   <DropdownToggle nav>
                    //     Welcome!
                    //     <span className='fa fa-chevron-down dropdown-caret'></span>
                    //   </DropdownToggle>
                    //   <DropdownMenu right>
                    //     <DropdownItem onClick={() => history.push('/login')}>
                    //       Login
                    //     </DropdownItem>
                    //     <DropdownItem onClick={() => history.push('/register')}>
                    //       Sign Up
                    //     </DropdownItem>
                    //   </DropdownMenu>
                    // </UncontrolledDropdown>
                  )}
                </Nav>
                &nbsp;
                |
                <CartIcon
                  className="d-none d-md-block"
                  cartItems={cartItems}
                  onClick={toggleCart}
                />
                Cart
              </Navbar>
            </Col>
          </Row>
        </Container>

        {/* hidden cart drawer */}
        <div
          className={isCartOpen ? 'mini-cart-open' : 'hidden-mini-cart'}
          aria-hidden={`${isCartOpen ? false : true}`}
        >
          <div className="mini-cart">
            <Cart />
          </div>
          <div
            className={
              isCartOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
            }
            onClick={toggleCart}
          />
        </div>

        {/* hidden menu drawer */}
        <div
          className={isMenuOpen ? 'mini-menu-open' : 'hidden-mini-menu'}
          aria-hidden={`${isMenuOpen ? false : true}`}
        >
          <div className="mini-menu">
            <Menu />
          </div>
          <div
            className={
              isMenuOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
            }
            onClick={toggleMenu}
          />
        </div>
        <div className="header-info" style={{background : "grey"}}>
          <Container
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            {/* <Row> */}
            {Genres.map((genre, index) => {
              return (
                <div
                  key={index}
                  md="4"
                  className="text-center d-none d-md-block"
                >
                  |
                  {/* <i className="fa fa-truck" /> */}
                  <span>{genre.name}</span>
                  |
                </div>
              )
            })}
            {/* </Row> */}
          </Container>
        </div>
        {/* <hr/> */}
        <div className="header-info" style={{background :"#25bea2"}}>
          <Container>
            <Row>
              <Col md="4" className="text-center d-none d-md-block">
                {/* <i className='fa fa-truck' /> */}
                {/* <span>Free Shipping</span> */}
              </Col>
              <Col md="4" className="text-center d-none d-md-block">
                <i className="fa fa-credit-card" />
                <span>Coupons & Promo codes</span>
              </Col>
              <Col md="4" className="text-center d-none d-md-block">
                {/* <i className='fa fa-phone' /> */}
                {/* <span>Call us 951-999-9999</span> */}
              </Col>
              <Col xs="12" className="text-center d-block d-md-none">
                <i className="fa fa-phone" />
                <span> Need advice? Call us 951-999-9999</span>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
    isCartOpen: state.navigation.isCartOpen,
    isBrandOpen: state.navigation.isBrandOpen,
    cartItems: state.cart.cartItems,
    brands: state.brand.storeBrands,
    categories: state.category.storeCategories,
    authenticated: state.authentication.authenticated,
    user: state.account.user,
    searchValue: state.navigation.searchValue,
    suggestions: state.navigation.searchSuggestions,
  }
}

export default connect(mapStateToProps, actions)(withRouter(Navigation))
