import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
const WomenWestern = () => {
    return (
        <Container className='position-relative'>
            <Row className=''>
                <Col lg="12" className='   catagoriesList d-flex'>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Sleepwear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>View All</a></li>
                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Innerwear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Sarees</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Silk Sarees</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Cotton Silk Sarees</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Georgette Sarees</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Chiffon Sarees</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Satin Sarees</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Embroidered Sarees</a></li>

                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Bottomwear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Kurtis</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Anarkali Kurtis</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Rayon Kurtis</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Rayon Kurtis</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Cotton Kurtis</a></li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>Embroidered Kurtis</a></li>
                    </ul>
                    <ul className='lh-lg'>
                        <li className='list-unstyled py-2 textcolor'>Topwear</li>
                        <li className='list-unstyled'><a href="#" className='text-decoration-none text-black'>All Kurta Sets</a></li>

                    </ul>

                </Col>
            </Row>

        </Container>
    )
}

export default WomenWestern