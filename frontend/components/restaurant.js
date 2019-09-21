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
import Link from 'next/link'
import slugify from 'slugify'

export default function Restaurant({ image, name, description }) {
  // console.log({ name, slug: slugify(name) })
  return (
    <Col className="col-4">
      <Card>
        <CardImg top width="100%" src={`http://localhost:1337${image.url}`} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          <Link as={`/restaurant/${slugify(name)}`} href="/restaurant/[slug]">
            <Button color="primary" className="btn btn-primary">
              View
            </Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  )
}

Restaurant.propTypes = {
  // id: PropTypes.number.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

Restaurant.defaultProps = {
  image: { url: '' },
  description: ''
}
