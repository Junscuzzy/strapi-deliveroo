import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col
} from 'reactstrap'
import PropTypes from 'prop-types'

export default function Dish({ image, name, price }) {
  return (
    <Col className="col-4">
      <Card>
        <CardImg top width="100%" src={`http://localhost:1337${image.url}`} />
        <CardBody>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardTitle>{name}</CardTitle>
            <CardText>{`${price}€`}</CardText>
          </div>
          <br />
          <Button outline color="primary" className="btn btn-primary">
            + Add to cart
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

Dish.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Dish.defaultProps = {
  image: { url: '' }
}
