import React from 'react'
import {Link} from 'react-router-dom'
import {Row, col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../assets/products'

function ProductScreen(props) {
//   console.log(params);
   const product = products.find((p) => p._id === props.match.params.id);
  return <div>{/* {product.name} */}</div>;
}

export default ProductScreen
