import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import {Link} from 'react-router-dom';

function Item(props) {
    return (
        <>
            <div className="">
                <div className="col">
                    <div className="card m-1" style={{'border': '1.5px solid black', 'height':'550px'}}>
                        <img src={props.item_image} height="320px" width="150px" className="card-img-top" alt="Image not Available !!" />
                        <div className="card-body cardview">
                            <Link to="" style={{'color': 'black'}}><h5 className="card-title">{ props.item_name }</h5></Link>
                            <h5 className="my-2">Rs. {props.price} /-</h5>
                            <h6 className="my-2 mb-4">Rating: {props.rating} out of 5</h6>
                            <Button className="px-4 ms-1 me-2" variant="success"><BoltIcon sx={{ fontSize: 18 }} className="me-2" />Buy now</Button>{' '}
                            <Button className="px-4" variant="primary"><ShoppingCartIcon sx={{ fontSize: 18 }} className="me-2" />Add to cart</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>

            {/* <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card className="my-3 mx-2" border="dark">
                        <Card.Img variant="top" src={props.item_image} height="350px" width="150px" />
                        <Card.Body>
                            <Card.Title>{props.item_name}</Card.Title>
                            <Card.Text>
                                <h5>Rs. {props.price} /-</h5>
                                <h6>Rating: {props.rating} out of 5</h6>
                            </Card.Text>
                            <Button className="px-4 ms-1 me-2" variant="success"><BoltIcon sx={{ fontSize: 18 }} className="me-2" />Buy now</Button>{' '}
                            <Button className="px-4" variant="primary"><ShoppingCartIcon sx={{ fontSize: 18 }} className="me-2" />Add to cart</Button>{' '}
                        </Card.Body>
                    </Card>
                    </Col>
                ))}      
            </Row>        */}
        </>
    );
}

export default Item;