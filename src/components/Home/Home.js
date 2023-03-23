import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import adv from './Images/1678691617864.png';
import cod from './Images/cod.svg';
import evn from './Images/freeDelivery.svg';
import esyt from './Images/easyReturns.svg';
import plst from './Images/playstoreSmallIcon.svg';
import ProductsPage from '../productsPage/productsPage';
import './Home.css'
import Header from '../Header/Header';


const Home = () => {
    return (
        <Container fluid>
            <Header />
            <Container className='w-75'>
                <Row className='mt-5 bgcolor'>
                    <Col>
                        <h1 className='pt-5 ps-5 fw-bolder1'>Lowest Prices Best Quality Shopping</h1>
                        <Row className='ps-5 pt-3'>
                            <Col className='d-flex align-items-center border-end border-2 '>
                                <div>
                                    <img className='img-fluid1 ' src={evn} alt="" />
                                </div>
                                <div className='ps-3 fw-bold'>
                                    <p className='m-0'>Free</p>
                                    <p className='m-0'>Delivery</p>
                                </div>
                            </Col>
                            <Col className='d-flex align-items-center border-end border-2 '>
                                <div>
                                    <img className='img-fluid1 ' src={cod} alt="" />
                                </div>
                                <div className='ps-3 fw-bold'>
                                    <p className='m-0'>Cash on</p>
                                    <p className='m-0'>Delivery</p>
                                </div>
                            </Col>
                            <Col className='d-flex align-items-center  '>
                                <div>
                                    <img className='img-fluid1 ' src={esyt} alt="" />
                                </div>
                                <div className='ps-3 fw-bold'>
                                    <p className='m-0'>Easy</p>
                                    <p className='m-0'>Returns</p>
                                </div>
                            </Col>

                        </Row>
                        <div className='ps-5 pt-4 mt-3'>
                            <button className='bgcolorbtn text-white btn w-50'> Dowload The Meesho App</button>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <img src={adv} className="img-fluid" alt="" />
                    </Col>
                </Row>
                <h1 className='py-5 text-center'>Products</h1>
                <div className='d-flex flex-wrap justify-content-between pt-4'>

                    <ProductsPage />
                </div>
            </Container>
        </Container>


    )
}

export default Home