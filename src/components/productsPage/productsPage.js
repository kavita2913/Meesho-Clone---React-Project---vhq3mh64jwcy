import React, {useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import './ProductPage.css'
import {AiFillStar} from "react-icons/ai";
import {Link} from 'react-router-dom';

const productsPage = () => {
    const [list, setlist] = useState([]);
    let getdata = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setlist(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApiData(getdata)
    }, [])
    return (
        <>
            {
                list.map((ele) => {
                    return (
                        <><Link to={`/product/${ele.id}`} className='text-decoration-none text-black'>
                            <Card style={{width: '12rem'}} className="p-2 mt-2">
                                <Card.Img variant="top" className='img-fluid' src={ele.image} />
                                <Card.Body>
                                    <Card.Title>{ele.title}</Card.Title>
                                    <Card.Text className='fw-bold fs-5'>
                                        ₹{ele.price}
                                    </Card.Text>
                                    <div className=' d-flex'>
                                        <p className='m-0 rattingData'>{ele.rating.rate} <AiFillStar /> </p>
                                        <p className='ms-2 fs-6 textgrey'>{ele.rating.count} </p>
                                    </div>
                                    <p className='fs-7 '>Reviews</p>

                                </Card.Body>
                            </Card >
                        </Link>
                        </>
                    )
                })
            }
        </>
    )
}

export default productsPage