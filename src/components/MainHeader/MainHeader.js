import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './MainHeader.css'
import WomenEthic from './productCatogory.js/WomenEthic';
import WomenWestern from './productCatogory.js/WomenWestern';
import Men from './productCatogory.js/Men';
import Kids from './productCatogory.js/Kids';
import HomeFurniture from './productCatogory.js/HomeFurniture';
import JewelleryAccessories from './productCatogory.js/JewelleryAccessories'
import Electronic from './productCatogory.js/Electronic';
import BeautiandHealth from './productCatogory.js/BeautiandHealth';
import BagesAndFootWare from './productCatogory.js/bagesAndFootWare';




const MainHeader = () => {
    const [WomenEthi, setWomenEthi] = useState(false);
    const [WomenWest, setWomenWest] = useState(false);
    const [men, setsmen] = useState(false);
    const [kid, setkidenter] = useState(false);
    const [hk, setHomeKitchenter] = useState(false);
    const [Ja, setJa] = useState(false);
    const [BeautiHealth, setBeautiHealth] = useState(false);
    const [BagsFootWear, setBagsFootWear] = useState(false);
    const [Electronice, setElectronic] = useState(false);





    return (
        <Container fluid className='position-relative'>
            <Container >
                <Row className='align-items-center position-relative  ' >
                    <Col className='p-0 '>
                        <ul className='m-0  px-0 d-flex align-items-center align-items-center justify-content-between '>
                            <div className='hovering py-3 ' onMouseEnter={() => setWomenEthi(true)} onMouseLeave={() => setWomenEthi(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black  TextColor'  >Women Ethnic</a></li>

                            </div>
                            <div className='hovering py-3 ' onMouseEnter={() => setWomenWest(true)} onMouseLeave={() => setWomenWest(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black  TextColor'>Women Western</a></li>

                            </div>
                            <div className='hovering py-3' onMouseEnter={() => setsmen(true)} onMouseLeave={() => setsmen(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black  TextColor' >Men</a></li>
                            </div>
                            <div className='hovering py-3 ' onMouseEnter={() => setkidenter(true)} onMouseLeave={() => setkidenter(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black  TextColor' >Kids</a></li>
                            </div>
                            <div className='hovering py-3' onMouseEnter={() => setHomeKitchenter(true)} onMouseLeave={() => setHomeKitchenter(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black  TextColor' >Home & Kitchen</a></li>
                            </div>
                            <div className='hovering py-3' onMouseEnter={() => setBeautiHealth(true)} onMouseLeave={() => setBeautiHealth(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black  TextColor' >Beauty & Health</a></li>
                            </div>
                            <div className='hovering py-3' onMouseEnter={() => setJa(true)} onMouseLeave={() => setJa(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black  TextColor' >Jewellery & Accessories</a></li>
                            </div>
                            <div className='hovering py-3' onMouseEnter={() => setBagsFootWear(true)} onMouseLeave={() => setBagsFootWear(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black TextColor' >Bags & Footwear</a></li>
                            </div>
                            <div className='hovering py-3' onMouseEnter={() => setElectronic(true)} onMouseLeave={() => setElectronic(false)}>
                                <li className='list-unstyled'><a href="#" className='text-decoration-none text-black  TextColor' >Electronics</a></li>
                            </div>
                        </ul>
                    </Col>
                </Row>

            </Container>
            <hr className='m-0' />
            {
                men && (
                    <>
                        <Men />
                    </>
                )
            }
            {
                WomenEthi && (
                    <>
                        <WomenEthic />
                    </>
                )
            }
            {
                WomenWest && (
                    <>
                        <WomenWestern />
                    </>
                )
            }
            {
                kid && (
                    <>
                        <Kids />
                    </>
                )
            }
            {
                hk && (
                    <>
                        <HomeFurniture />
                    </>
                )
            }
            {
                Ja && (
                    <>
                        <JewelleryAccessories />
                    </>
                )
            }
            {
                BeautiHealth && (
                    <>
                        <BeautiandHealth />
                    </>
                )
            }
            {
                BagsFootWear && (
                    <>
                        <BagesAndFootWare />
                    </>
                )
            }
            {
                Electronice && (
                    <>
                        <Electronic />
                    </>
                )
            }


            {/* <WomenWestern />
            
            <HomeFurniture />
            <Men />
            <JewelleryAccessories />
            <Electronic />
            <BeautiandHealth />
            <BagesAndFootWare /> */}
        </Container>
    )
}

export default MainHeader