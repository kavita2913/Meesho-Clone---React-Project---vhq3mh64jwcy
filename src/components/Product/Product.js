import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../Header/Header';
import './Product.css'



const ProdDetails = () => {

    const ng = useNavigate();

    const temp = useParams();
    console.log(temp.id);

    const [product, setProduct] = useState({});
    console.log(product);

    const fetchAPI = async (pId) => {

        const res = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${pId}`)
        const data1 = await res.json()

        setProduct(data1)

    }

    const addCartFn = () => {

        let tempCart = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem("cart", JSON.stringify([...tempCart, product]))
        ng('/cart')

    }



    useEffect(() => {

        fetchAPI(temp.id);

    }, [temp.id])


    return (
        <>
            <Header />
            <Container className='w-75 p-5'>
                <Row>
                    <Col className=''>
                        <div className=' d-flex juastify-Content-center'>
                            <img src={product.image} className='img-fluid  p-3 border' alt="" />
                        </div>
                        <div className='text-center d-flex justify-content-between pt-3'>

                            <Button className='AddtoCart w-50 me-2 fw-bold' onClick={addCartFn}>Add To Cart</Button>
                            <Button className='w-50 buynow  fw-bold' >Buy Now</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className='border p-3' >
                            <p className='produtsTitle'>{product.title}</p>
                            <h3> ₹ {product.price}</h3>
                            <div className="rating">
                                <h3 className='RateRating me-2'> {product.rating && product.rating.rate}</h3>
                                <p className='m-0'> {product.rating && product.rating.count} Reviews</p>
                            </div>
                        </div>
                        <div className='my-2 border p-3 text-capitalize fs-5 fw-bold' style={{fontFamily: "sans-serif"}}>
                            <p>Select Size</p>
                            <div className='d-flex justify-content-between w-75 boder-none'>

                                <button className='Sizing'>S</button>
                                <button className='Sizing'>M</button>
                                <button className='Sizing'>L</button>
                                <button className='Sizing'>XL</button>
                                <button className='Sizing'>XXL</button>
                            </div>
                        </div>
                        <div className='my-2 border p-3 text-capitalize  ' style={{fontFamily: "sans-serif"}}>
                            <p>Product Details</p>
                            <div className=''>
                                <p className='m-0'>Category : {product.category}</p>
                                <p className='m-0'>Name : {product.title}</p>
                                <p className='m-0'>{product.description}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default ProdDetails
