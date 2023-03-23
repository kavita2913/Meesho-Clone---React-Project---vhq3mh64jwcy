import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const bagesAndFootWare = () => {
    return (
        <Container className='position-relative'>
            <Row className=''>
                <Col lg="12" className='   catagoriesList d-flex'>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Women Bags</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Women Bags</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Handbags</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Clutches</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Clutches</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Slingbags</a></li>
                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Men Bags</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Men Bags</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Men Wallets</a></li>
                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Men Footwear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Sports Shoes</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Casual Shoes</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Formal Shoes</a></li>
                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Women Footwear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Flats</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Bellies</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Juttis</a></li>
                    </ul>




                </Col>
            </Row>

        </Container>
    )
}

export default bagesAndFootWare