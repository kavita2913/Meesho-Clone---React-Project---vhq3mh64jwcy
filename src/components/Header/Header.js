import React, {useState} from 'react'
import img from './Images/k_Meeso_Logo.png';
import gpy from './Images/kgpay.png'
import astr from './Images/appstorek.jpg'
import {AiOutlineUser} from "react-icons/ai";
import './Header.css'
import {BiCart} from "react-icons/bi";
import MainHeader from '../MainHeader/MainHeader';
import {ImMobile, ImSearch} from "react-icons/im";
import {Button} from 'bootstrap';
import {BsBag} from "react-icons/bs";
import {Link} from 'react-router-dom';
import Singnup from '../SignUp/Singup';


function Header() {
    const [isDownloadHover, DownloadHovering] = useState(false);
    const [isProfileHover, ProfileHovering] = useState(false);
    function DownloadMouseOver() {
        DownloadHovering(true)
    }
    function DownloadMouseLeave() {
        DownloadHovering(false)
    }
    function Profieenter() {
        ProfileHovering(true)
    }
    function ProfileLeave() {
        ProfileHovering(false)
    }
    return (
        <>
            <div className="container-fluid border2 ">
                <div className="container pt-md-2 ">
                    <div className="row align-items-center">
                        <div className="col-6 ps-0 ">
                            <div className="row">
                                <div className="col-4 ">
                                    <a href="#"> <img className='img-fluid Size-Logo' src={img} alt="Meesho logo" /></a>
                                </div>
                                <div className="col-7 search-header-icon border rounded border-secondary">
                                    <ImSearch />
                                    <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' className="headerInputStyle py-2 ps-2 w-751 h-100" />
                                </div>
                            </div>


                        </div>
                        <div className="col-6 ">
                            <div className="row position-relative1">
                                <div className="col-4 d-flex align-items-center justify-content-end borderHeadr " onMouseEnter={DownloadMouseOver} onMouseLeave={DownloadMouseLeave}>
                                    <div className="Download-App pe-2  d-flex align-items-center ">  <ImMobile /><a href="#" className=' Download-App Download-Appboder text-decoration-none   py-3 ps-2 font-weightNormal'>Download App</a>
                                    </div>
                                    <div>

                                    </div>
                                    {
                                        isDownloadHover && (
                                            <>
                                                <div className='position-abolute1 p-1 pb-3'>
                                                    <h5 className='p-1'>Download From a</h5>
                                                    <a href="#"> <img className='img-fluid' src={gpy} alt="" /></a>
                                                    <a href="#"> <img className='img-fluid' src={astr} alt="" /></a>

                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="col-4  d-flex align-items-center justify-content-center borderHeadr">
                                    <div className="BecomeSuplier ">

                                        <a href="#" className='font-weightNormal text-decoration-none'>Become a Supplier</a>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="row    ">
                                        <div className="col-6 " onMouseEnter={Profieenter} onMouseLeave={ProfileLeave}>
                                            <a href="#" className='d-flex justify-content-center align-items-center flex-column font-weightNormal text-decoration-none Download-App ' >
                                                <div><AiOutlineUser /></div>
                                                <div className='font-weightNormal Download-App Download-Appboder pb-2' >Profile</div>
                                            </a>
                                            {
                                                isProfileHover && (

                                                    <div className='position-abolute12'>
                                                        <p className='profileHellow'>Hello User</p>
                                                        <p className='TOaccessAc'>To access your Meesho account</p>
                                                        <button className='SignUpBtn btn'>
                                                            <Link to={'/Singnup'} className='text-white text-decoration-none bg-pink'>SignIn</Link>
                                                        </button>
                                                        <hr />
                                                        <div >
                                                            <a href="#" className='d-flex align-items-center text-decoration-none text-black fw-bold fs-5 '><BsBag />
                                                                <p className='m-0 ps-2'>My Order</p></a>
                                                        </div>
                                                        {/* <p className='MyOrder'></p> */}

                                                    </div>

                                                )
                                            }
                                        </div>
                                        <div className="col-6 ">
                                            <a href="#" className='d-flex justify-content-center align-items-center flex-column font-weightNormal text-decoration-none'><div><BiCart /></div>
                                                <div>Cart</div></a>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <MainHeader />
        </>

    )
}

export default Header