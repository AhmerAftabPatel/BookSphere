/**
 *
 * ProductFilter
 *
 */

import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'

import RangeSlider from '../../Common/RangeSlider'

const priceMarks = {
  1: { label: <p className="fw-normal text-black">$1</p> },
  5000: { label: <p className="fw-normal text-black">$5000</p> },
}

const rateMarks = {
  0: {
    label: (
      <span>
        <span className="mr-1">5</span>
        <i
          className="fa fa-star fa-1x"
          style={{ display: 'contents' }}
          aria-hidden="true"
        ></i>
      </span>
    ),
  },
  20: {
    label: (
      <span>
        <span className="mr-1">4</span>
        <i className="fa fa-star fa-1x" aria-hidden="true"></i>
      </span>
    ),
  },
  40: {
    label: (
      <span>
        <span className="mr-1">3</span>
        <i className="fa fa-star fa-1x" aria-hidden="true"></i>
      </span>
    ),
  },
  60: {
    label: (
      <span>
        <span className="mr-1">2</span>
        <i className="fa fa-star fa-1x" aria-hidden="true"></i>
      </span>
    ),
  },
  80: {
    label: (
      <span>
        <span className="mr-1">1</span>
        <i className="fa fa-star fa-1x" aria-hidden="true"></i>
      </span>
    ),
  },
  100: { label: <span>Any</span> },
}

const rating = (v) => {
  switch (v) {
    case 100:
      return 0
    case 80:
      return 1
    case 60:
      return 2
    case 40:
      return 3
    case 20:
      return 4
    default:
      0
      return 5
  }
}

const ProductFilter = (props) => {
  const { filterProducts } = props

  return (
    <div className="product-filter">
      <div>
        <h2>Category</h2>
        <Form>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>All</Label>
          </FormGroup>
          <br />
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Kids</Label>
          </FormGroup>
          <br />
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Young Adults</Label>
          </FormGroup>
          <br />
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Fiction</Label>
          </FormGroup>
          <br />
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Non-Fiction</Label>
          </FormGroup>
          <br />
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Text Books</Label>
          </FormGroup>
        </Form>
      </div>
      <br />
      <div>
        <h2>Price</h2>
        <div className="mx-2 mb-3">
          <RangeSlider
            marks={priceMarks}
            defaultValue={[1, 2500]}
            max={5000}
            onChange={(v) => {
              filterProducts('price', v)
            }}
          />
        </div>
      </div>
      <br />
      <br />
      {/* <Card> */}
      {/* <div>
        <h2>Rating</h2>
        <div className="mx-2 mb-4">
          <RangeSlider
            type="slider"
            marks={rateMarks}
            step={20}
            defaultValue={[100]}
            onChange={(v) => {
              filterProducts('rating', rating(v))
            }}
          />
        </div>
      </div> */}
      <br />
      <div>
        <h2>Discount</h2>
        <Form>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>0 - 10%</Label>
          </FormGroup>
          <br />
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>0 - 15%</Label>
          </FormGroup>
          <br />
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>15% or more</Label>
          </FormGroup>
        </Form>
      </div>
      <br/>
      <div>
        <h2>Availability</h2>
        <Form>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Out of Stock</Label>
          </FormGroup>
          <br />
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Fast Delivery</Label>
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}

export default ProductFilter
