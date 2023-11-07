import logo from '../../assets/logo_04.png'
import './Footer.css'
import { PiWhatsappLogoLight } from 'react-icons/pi';
import { PiFacebookLogoThin } from 'react-icons/pi';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { PiTwitterLogoThin } from 'react-icons/pi';
import banner1 from '../../assets/banner-bg-3.png'

const Footer = () => {
    return (
        <footer className="bg-[#eff6f3]" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
            <div className="container mx-auto pt-10 lg:pt-16">
                <div className="flex justify-between px-5">
                    <img src={logo} alt="" />
                    <div className="flex md:flex-row  justify-center items-center md:gap-3">
                        <p className="hidden md:block">Ready to get strated?</p>
                        <button className="customBtn rounded-full border-none">Get Started</button>
                    </div>
                </div>
                <div className="footer mt-16 flex flex-col md:flex-row justify-between px-5 md:px-0 lg:px-5">
                    <div>
                        <span className=" text-[#1C1C1C] text-xl font-bold">Quick Links</span>
                        <a className="link link-hover hover:text-[#04a44f]">Home</a>
                        <a className="link link-hover hover:text-[#04a44f]">About Us</a>
                        <a className="link link-hover hover:text-[#04a44f]">Add Job</a>
                        <a className="link link-hover hover:text-[#04a44f]">Bid Request</a>
                    </div>
                    <div>
                        <span className=" text-[#1C1C1C] text-xl font-bold">Our Service</span>
                        <a className="link link-hover hover:text-[#04a44f]">Consulting Services</a>
                        <a className="link link-hover hover:text-[#04a44f]">Support & Maintenance</a>
                        <a className="link link-hover hover:text-[#04a44f]">Training & Workshops</a>
                        <a className="link link-hover hover:text-[#04a44f]">Custom Solutions</a>
                    </div>
                    <div>
                        <span className="text-[#1C1C1C] text-xl font-bold">Help</span>
                        <a className="link link-hover hover:text-[#04a44f]">FAQs</a>
                        <a className="link link-hover hover:text-[#04a44f]">Contact Us</a>
                    </div>
                    <div className="">
                        <span className=" text-[#1C1C1C] text-2xl font-bold">Join & get desire job</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com"
                                    className="py-2 border-b border-[#04a44f] w-1/2 bg-transparent outline-none" />
                                <p className='mt-3'>We only send interesting and relevant emails.</p>
                            </div>
                            <div className=" space-x-6 pt-6 text-2xl">
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer flex flex-col md:flex-row justify-between justify-items-center footer-center p-5 footer2 container mx-auto" >
                    <div className='flex flex-row md:flex-col lg:flex-row'>
                        <a className='hover:text-[#04a44f]' href="">Privacy & Terms</a>
                        <a className='hover:text-[#04a44f]' href="">Contact Us</a>
                    </div>
                    <aside>
                        <p className=''>Copyright © 2023 -
                            Mohammad Shimul || Assignment-11 PH
                        </p>
                    </aside>
                    <div className='flex gap-4 text-2xl cursor-pointer'>
                        <a className="link link-hover hover:text-green-900 text-[#04a44f] " href=""><PiFacebookLogoThin></PiFacebookLogoThin></a>
                        <a className="link link-hover hover:text-green-900 text-[#04a44f] " href=""><PiInstagramLogoLight></PiInstagramLogoLight></a>
                        <a className="link link-hover hover:text-green-900 text-[#04a44f] " href=""><PiTwitterLogoThin></PiTwitterLogoThin></a>
                        <a className="link link-hover hover:text-green-900 text-[#04a44f] " href=""><PiWhatsappLogoLight></PiWhatsappLogoLight></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;