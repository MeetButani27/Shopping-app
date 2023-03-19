import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';

function Item(props) {
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card className="my-3 mx-2">
                        <Card.Img variant="top" src={props.item_image} height="350px" width="150px" />
                        <Card.Body>
                            <Card.Title>{props.item_name}</Card.Title>
                            {/* <Card.Text> */}
                                <h5>Rs. {props.price} /-</h5>
                                <h6>Rating: {props.rating} out of 5</h6>
                            {/* </Card.Text> */}
                            <Button className="px-4 ms-1 me-2" variant="success"><BoltIcon sx={{ fontSize: 18 }} className="me-2" />Buy now</Button>{' '}
                            <Button className="px-4" variant="primary"><ShoppingCartIcon sx={{ fontSize: 18 }} className="me-2" />Add to cart</Button>{' '}
                        </Card.Body>
                    </Card>
                    </Col>
                ))}      
            </Row>        
        </>
    );
}

export default Item;