import React, {useState} from 'react'
import Header from '../Header/Header'
import {Container, Row, Col} from 'react-bootstrap'
import './payment.css'
const Payment = () => {

    const paymentobj = {
        name: '',
        phone: '',
        address: '',
    }
    const [status, setStatus] = useState(false)

    function handlepayment() {
        setStatus(true)
    }
    return (
        <>
            <Header />
            <Container>
                <Row className='w-50 m-auto py-5 mt-5 rounded bg-pink1 border  justify-content-center' >
                    <Col>

                        <h1 className='text-center'>Payment</h1>
                        <div >
                            <input type='text' placeholder='Name' className='w-100  rounded  border-1' />
                            <input type='number' placeholder='phone No.' className='w-100 my-2 rounded  border-1' />
                            <input type='text' placeholder='address' className='w-100 rounded  border-1' />
                            <h2 className='py-3 text-center'>cost -$109.95</h2>
                            <div className='text-center'>

                                <button className='bg-pink btn  ' onClick={handlepayment}>Payment</button>
                            </div>
                        </div>
                        <>{
                            status && <h1 className='text-center  text-Success py-2' >Order Placed 😊</h1>
                        }</>

                    </Col>
                </Row>
            </Container>

            <div className='payment-container'>

            </div>
        </>
    )
}
export default Payment