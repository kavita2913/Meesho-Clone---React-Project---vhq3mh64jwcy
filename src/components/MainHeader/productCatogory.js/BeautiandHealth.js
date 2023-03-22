import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
const BeautiandHealth = () => {
    return (
        <Container className='position-relative'>
            <Row className=''>
                <Col lg="12" className='   catagoriesList d-flex'>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Make up</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Face</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Eyes</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Lips</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Nails</a></li>
                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Wellness</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Sanitizers</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Feminine Hygiene</a></li>



                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Skincare</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Deodorants</a></li>
                    </ul>




                </Col>
            </Row>

        </Container>
    )
}

export default BeautiandHealth