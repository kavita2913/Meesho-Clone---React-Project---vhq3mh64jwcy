import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Men = () => {
    return (
        <Container className='position-relative'>
            <Row className=''>
                <Col lg="12" className='   catagoriesList d-flex'>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Top Wear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Top Wear</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Tshirts</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Shirts</a></li>
                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Bottom Wear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Track Pants</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Jeans</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Trousers</a></li>


                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Men Accessories</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Belts</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Wallets</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Jewellery</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Sunglasses</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Bags</a></li>

                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Men Footwear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Casual Shoes</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Sports Shoes</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Sandals</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Formal Shoes</a></li>

                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Ethnic Wear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Men Kurtas</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Ethnic Jackets</a></li>


                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Inner & Sleep Wear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Inner & Sleep Wear</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Vests</a></li>

                    </ul>

                </Col>
            </Row>

        </Container>
    )
}

export default Men