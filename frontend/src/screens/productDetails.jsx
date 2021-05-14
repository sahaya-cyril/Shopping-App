import React from 'react';
import Product from '../products';
import { Row,Col,ListGroup,ListGroupItem,Image,Button } from 'react-bootstrap';
import Rating from '../components/rating';
import { Link } from 'react-router-dom';

const productDetails = ({ match }) => {
    const product = Product.find((p) => p._id === match.params.id);
        return (
            <div>
                <Link to="/" className="btn btn-light">
                    <i className="fas fa-arrow-left"></i>
                    &nbsp;GO BACK
                </Link>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h3>{product.name}</h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Rating 
                                    value={product.rating} 
                                    text={`${product.numReviews} reviews`} 
                                />
                            </ListGroupItem>
                            <ListGroupItem>
                                Price: ${product.price}
                            </ListGroupItem>
                            <ListGroupItem>
                                {product.description}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <ListGroup>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className="text-center">
                                <Button className="btn-block" type="button">Add to cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        );
}

export default productDetails;