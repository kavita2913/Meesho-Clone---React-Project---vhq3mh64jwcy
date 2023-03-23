
import React, {useState, useEffect} from 'react';
import {Link, Navigate} from 'react-router-dom';
import Header from '../Header/Header';
import './cart.css';
import {Container, Row, Col, Button} from 'react-bootstrap';


function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Get the cart information from local storage
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);
    }, []);

    // Function to update the cart information in local storage
    function updateCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);
    }

    // Function to handle the quantity input change
    function handleQuantityChange(index, event) {
        const newCart = [...cart];
        newCart[index].quantity = parseInt(event.target.value);
        updateCart(newCart);
    }

    // Function to handle the remove button click
    function handleRemoveClick(index) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        updateCart(newCart);
    }

    // Calculate the total cost
    const totalCost = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    return (
        <>

            <Header />
            <h1 className='text-center pt-3 '>Your Wishlist</h1>
            <Container className='w-75 pt-3'>
                <Row className=' border rounded '>

                    <Col>{cart.map((item, index) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-info">
                                <img className='m_image img-fluid' src={item.image} />
                                <h3>{item.title}</h3>
                                <p className='m-0'>${item.price}</p>
                            </div>
                            <div className="item-controls">
                                <input
                                    type="number"
                                    min="1"
                                    onChange={(event) => handleQuantityChange(index, event)}
                                />
                                <Button onClick={() => handleRemoveClick(index)} className='btn bg-transparent text-black border'>Remove</Button>
                            </div>
                        </div>
                    ))}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className='d-flex align-items-center'>

                                <h3 className='m-0'>Total Cost:</h3>
                                <p className='m-0 ps-3 fs-4'>${totalCost}</p>
                            </div>

                            <Button className="btn btn-Color bg-pink border-none outline-none"><Link to={'/payment'} className='text-white text-decoration-none bg-pink'>Checkout</Link></Button>
                        </div>
                    </Col>

                </Row>
            </Container>


        </>
    );
}

export default Cart;