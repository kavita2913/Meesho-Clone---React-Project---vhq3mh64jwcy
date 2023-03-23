import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const kids = () => {
    return (
        <Container className='position-relative'>
            <Row className=''>
                <Col lg="12" className='   catagoriesList d-flex'>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Boys & Girls 2+ Years</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Dresses</a></li>
                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Infant 0-2 Years</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Rompers</a></li>

                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Toys & Accessories</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Soft Toys</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Footwear</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Stationery</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Watches</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Bags & Backpacks</a></li>

                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Baby Care</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Baby Care</a></li>

                    </ul>


                </Col>
            </Row>

        </Container>
    )
}

export default kids