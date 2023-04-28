/**
 *
 * ProductList
 *
 */

import React from 'react'

import AddToWishList from '../AddToWishList'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
  const { products, updateWishlist, authenticated } = props

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="mb-3 mb-md-0">
          <Link to={`/product/${product.slug}`} className="d-flex h-100">
            <div className="product-container">
              <div className="item-box">
                {/* <div className="add-wishlist-box">
                  <AddToWishList
                    id={product._id}
                    liked={product?.isLiked ?? false}
                    enabled={authenticated}
                    updateWishlist={updateWishlist}
                    authenticated={authenticated}
                  />
                </div> */}
                <Row lg="2">
                  <Col lg="3">
                    {/* <div className="item-image-container"> */}
                    <div className="item-image-box">
                      <img
                        className="item-image"
                        // src={`${
                        //   product.imageUrl
                        //     ? product.imageUrl
                        //     : '/images/placeholder-image.png'
                        // }`}
                        src={`${
                          product.imageUrl
                            ? '/images/book-covers/' + product.imageUrl
                            : '/images/placeholder-image.png'
                        }`}
                      />
                    </div>
                    {/* </div> */}
                  </Col>
                  <Col lg="9">
                    <div className="item-body">
                      <div className="item-details p-3">
                        <h1 className="item-name">{product.name}</h1>
                        {product.brand &&
                          Object.keys(product.brand).length > 0 && (
                            <div className="d-flex justify-content-between">
                              <p className="by">
                                Publisher: <span>{product.brand.name}</span>
                              </p>
                              |
                              <p className="by">
                                Author: <span>{product.brand.name}</span>
                              </p>
                              |
                              <p className="by">
                                Sold By: <span>{product.brand.name}</span>
                              </p>
                              {/* |
                      <p className='by'>
                        Years of publishing: <span>{product.brand.name}</span>
                      </p> */}
                            </div>
                          )}
                        <p className="item-desc mb-0">{product.description}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center px-4 mb-2 item-footer">
                      <p className="price mb-0">Price: ${product.price}</p>
                      {product.totalReviews > 0 && (
                        <p className="mb-0">
                          <span className="fs-16 fw-normal mr-1">
                            {parseFloat(product?.averageRating).toFixed(1)}
                          </span>
                          <span
                            className={`fa fa-star ${
                              product.totalReviews !== 0 ? 'checked' : ''
                            }`}
                            style={{ color: '#ffb302' }}
                          ></span>
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>

                {/* <div className='item-link'>
              <Link
                to={`/product/${product.slug}`}
                className='d-flex h-100'
              >
                <div className='item-image-container'>
                  <div className='item-image-box'>
                    <img
                      className='item-image'
                      src={`${
                        product.imageUrl
                          ? product.imageUrl
                          : '/images/placeholder-image.png'
                      }`}
                    />
                  </div>
                </div>
                <div className='item-body'>
                  <div className='item-details p-3'>
                    <h1 className='item-name'>{product.name}</h1>
                    {product.brand && Object.keys(product.brand).length > 0 && (
                      <p className='by'>
                        By <span>{product.brand.name}</span>
                      </p>
                    )}
                    <p className='item-desc mb-0'>{product.description}</p>
                  </div>
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center px-4 mb-2 item-footer'>
                  <p className='price mb-0'>${product.price}</p>
                  {product.totalReviews > 0 && (
                    <p className='mb-0'>
                      <span className='fs-16 fw-normal mr-1'>
                        {parseFloat(product?.averageRating).toFixed(1)}
                      </span>
                      <span
                        className={`fa fa-star ${
                          product.totalReviews !== 0 ? 'checked' : ''
                        }`}
                        style={{ color: '#ffb302' }}
                      ></span>
                    </p>
                  )}
                </div>
              </Link>
            </div> */}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductList
