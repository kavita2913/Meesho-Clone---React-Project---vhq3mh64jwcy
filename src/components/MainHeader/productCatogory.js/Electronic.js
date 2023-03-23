import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
const Electronic = () => {
    return (
        <Container className='position-relative'>
            <Row className=''>
                <Col lg="12" className='   catagoriesList d-flex'>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Mobile & Accessories</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Mobile & Accessories</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Smartwatches</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Mobile Holders</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Mobile cases and covers</a></li>

                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Appliances</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Appliances</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Grooming</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Home Appliances</a></li>
                    </ul>

                </Col>
            </Row>

        </Container>
    )
}

export default Electronic