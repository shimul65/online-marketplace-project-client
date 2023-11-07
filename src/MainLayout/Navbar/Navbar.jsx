import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo_04.png'
import banner1 from '../../assets/banner-bg-3.png'
import './Navbar.css'
import { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import Login from "../../Pages/Login";

const Navbar = () => {



    const navLinks = <>
        <li className=" py-2"><NavLink to='/'>Home</NavLink></li>
        {/* {user && <>
            <li className=" py-2"><NavLink to='/addProduct'>Add Product</NavLink></li>
            <li className=" py-2"><NavLink to='/myCart'>My Cart</NavLink></li>
        </>
        } */}
        <li className=" py-2"><NavLink to='/addJob'>Add job</NavLink></li>
        <li className=" py-2"><NavLink to='/postedJob'>My posted jobs</NavLink></li>
        <li className=" py-2"><NavLink to='/bids'>My Bids</NavLink></li>
        <li className=" py-2"><NavLink to='/bidRequest'>Bid Requests</NavLink></li>

    </>

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);


    return (
        <div className="sticky -top-4 z-50" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
            <div className="navbar container mx-auto font-semibold pt-6 pb-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' ><img className='w-[150px]' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center items-center gap-6 px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* {
            user ?
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-24 rounded-full">
                            <img src={user ? user.photoURL : profile} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu border menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-fit">
                        <li>
                            <div className="text-lg"> Name : <br />{user?.displayName}</div>

                        </li>
                        <li>
                            <div className="text-lg">Email : <br />{user?.email}</div>

                        </li>
                        <li>
                            <button onClick={handleLogOut}
                                className="ctrl-standard  fx-sliderIn rounded-full bg-black hover:text-black mx-auto py-2 text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">LOG OUT</button>

                        </li>
                    </ul>
                </div>
                :
                <Link to='/login'>
                    <button className="ctrl-standard  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">LOG IN</button>
                </Link>
        } */}
                    {/* <Link to='/login'>
                        <button className="customBtn rounded-full hover:text-white">LOG IN</button>
                    </Link> */}
                    <button onClick={handleOpen} className="customBtn rounded-full hover:text-white">LOG IN</button>
                    <Dialog
                        // size=""
                        open={open}
                        handler={handleOpen}
                        className="bg-transparent shadow-none"
                    >
                        <Login handler={handleOpen}></Login>
                    </Dialog>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
