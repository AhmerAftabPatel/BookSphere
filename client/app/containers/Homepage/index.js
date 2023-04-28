/**
 *
 * Homepage
 *
 */

import React from 'react'

import { connect } from 'react-redux'
import featured from '../../constants/featured.json'
import newarrival from '../../constants/newarrival.json'
import { Row, Col, Card, CardTitle } from 'reactstrap'
import { Genres } from './constants'
import actions from '../../actions'
import banners from './banners.json'
import CarouselSlider from '../../components/Common/CarouselSlider'
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils'
import Button from '../../components/Common/Button'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const preload = () => {}

  // render() {
  return (
    <div className="homepage">
      {/* <Row className="flex-row"> */}
      {/* <Col xs="12" lg="12" className="order-lg-2 mb-3 px-3 px-md-2"> */}
      <div className="home-carousel">
        <CarouselSlider
          swipeable={true}
          showDots={true}
          infinite={true}
          autoPlay={false}
          slides={banners}
          responsive={responsiveOneItemCarousel}
        >
          {banners.map((item, index) => (
            <img
              key={index}
              src={item.imageUrl}
              style={{ width: '100%', height: '40vh' }}
            />
          ))}
        </CarouselSlider>
      </div>
      {/* </Col> */}
      {/* <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-2.jpg' className='mb-3' />
              <img src='/images/banners/banner-5.jpg' />
            </div>
          </Col> */}
      {/* <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-2.jpg' className='mb-3' />
              <img src='/images/banners/banner-6.jpg' />
            </div>
          </Col> */}
      {/* </Row> */}
      <br />
      <h2>New Arrivals</h2>
      <Row lg="4">
        {newarrival.map((genre, index) => {
          return (
            <Col key={index} style={{position : "relative"}}>
              <Card
                className="my-2"
                style={{ overflow: 'hidden' }}
              >
                <div >
                  <img style={{ height: '400px', width: '100%' }} src={`/images/book-covers/${genre.imageUrl}`} />
                </div>
                {/* <CardTitle tag="h5">{genre.name}</CardTitle> */}
                {/* <div */}
                {/* style={{ display: 'flex', justifyContent: 'space-between'  }} */}
                {/* > */}
                {/* <div style={{ position: 'absolute', bottom: '0',textAlign : "center"}}> */}
                  <Button text="Add to Cart"/>
                {/* </div> */}
                {/* </div> */}
              </Card>
            </Col>
          )
        })}
      </Row>
      <h2>Featured</h2>
      <Row lg="4">
        {featured.map((genre, index) => {
          return (
            <Col key={index} style={{position : "relative"}}>
              <Card
                className="my-2"
                style={{  overflow: 'hidden' }}
              >
                <div >
                  <img style={{ height: '400px', width: '100%' }} src={`/images/book-covers/${genre.imageUrl}`} />
                </div>
                {/* <CardTitle tag="h5">{genre.name}</CardTitle> */}
                {/* <div */}
                {/* style={{ display: 'flex', justifyContent: 'space-between'  }} */}
                {/* > */}
                {/* <div style={{ position: 'absolute', bottom: '0',textAlign : "center"}}> */}
                  <Button text="Add to Cart"/>
                {/* </div> */}
                {/* </div> */}
              </Card>
            </Col>
          )
        })}
      </Row>
      <Link to={"/shop"}>
      <div className="d-flex justify-content-center align-items-center">
        <Button text={'Explore All Genres'} />
      </div>
      </Link>
    </div>
  )
}
// }

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, actions)(Homepage)
