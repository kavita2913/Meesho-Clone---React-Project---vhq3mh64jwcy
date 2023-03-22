import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const HomeFurniture = () => {
    return (
        <Container className='position-relative'>
            <Row className=''>
                <Col lg="12" className='   catagoriesList d-flex'>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Home Furnishing</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Bedsheets</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Doormats</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Curtains & Sheers</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Cushions & Cushion Covers</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Mattress Protectors</a></li>
                    </ul>

                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Home Decor</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Home Decor</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Stickers</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Clocks</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Showpieces</a></li>

                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Kitchen & Dining</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Kitchen Storage</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Cookware & Bakeware</a></li>


                    </ul>


                </Col>
            </Row>

        </Container>
    )
}

export default HomeFurniture