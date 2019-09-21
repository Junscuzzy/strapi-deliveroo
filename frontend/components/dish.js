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
import { compose } from 'recompose'
import { withContext } from './context/appProvider'
import defaultPage from '../hocs/defaultPage'

function Dish({ context, ...rest }) {
  const { image, name, price } = rest
  return (
    <Col className="col-lg-4 col-md-6 col-12">
      <Card>
        <CardImg top width="100%" src={`http://localhost:1337${image.url}`} />
        <CardBody>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardTitle>{name}</CardTitle>
            <CardText>{`${price}€`}</CardText>
          </div>
          <br />
          <Button
            outline
            color="primary"
            className="btn btn-primary"
            onClick={() => context.addItem(rest)}
          >
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
  price: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired
}

Dish.defaultProps = {
  image: { url: '' }
}

export default compose(
  withContext,
  defaultPage
)(Dish)
