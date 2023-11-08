import axios from "axios";
import useAuth from "../Hook/useAuth";
import { useState } from "react";
import banner2 from '../assets/banner-bg-3-0.png'
import banner1 from '../assets/banner-bg-3.png'
// import MyPostedJobCard from '../Components/MyPostedJobCard/MyPostedJobCard';
import { VscChevronRight } from 'react-icons/vsc';
import { IoCheckmarkDone } from 'react-icons/io5';

import web1 from '../assets/web11.png'
import web2 from '../assets/web12.png'
import web3 from '../assets/web13.png'

// bidDeadline
// biddingPrice
// buyerEmail
// categoryName
// deadline
// description
// employerEmail
// jobId
// jobTitle
// : 
// maximumPrice
// minimumPrice
// status
// _id


const MyBids = () => {



    const { user } = useAuth();
    const [myBids, setMyBids] = useState([]);

    axios.get(`http://localhost:5055/bids?buyerEmail=${user?.email}`)
        .then(res => setMyBids(res.data))


    return (
        <>
            {/* banner */}
            <div className="carousel w-full relative rounded-b-lg md:h-[200px] lg:h-[350px]" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
                <div className="carousel-ite container mx-auto  rounded-2xl hero relative w-full overflow-hidden"
                >
                    <div className="z-10">
                        <div className="flex flex-col my-7 md:my-0 items-center space-y-5 md:space-y-9 md:mb-[85%] lg:mb-[75%]">
                            <h2 className=" text-4xl lg:text-5xl font-extrabold text-center">My Bidding Jobs
                            </h2>
                            <p className="text-sm px-16 md:px-0 lg:text-lg font-medium text-center w-full md:w-[250px] lg:w-full">&#34;It provides a clear description of the job&#39;s responsibilities, <br /> qualifications, and other essential details to attract potential candidates&#34;</p>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <img style={{ filter: 'brightness(85%)' }} className='' src={banner2} alt="" />
                    </div>
                </div>
            </div>

            {/* posted jobs card */}

            <div className='md:bg-[#eff6f3] border '>
                <div className="text-left mb-10 relative container mx-auto pt-6 md:pt-16">
                    <h1 className=" text-3xl md:text-4xl font-bold ml-2">Your Posted Jobs:</h1>
                    <p className='text-lg md:text-xl font-medium ml-2 mt-5'>Buyer Email: <span className='text-[#04a44f] text-xl md:text-2xl font-bold'>{user?.email}</span></p>
                    <div className='flex items-center gap-2 text-[#04a44f] absolute md:right-10 md:top-[50%] mt-4 ml-4 md:mt-0 md:ml-0 hover:scale-105 ease-in-out duration-300 '>
                        <p className='underline text-lg '>Explore More</p>
                        <div className='text-xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 '>
                            <VscChevronRight></VscChevronRight>
                        </div>
                    </div>
                </div>
                <div className=' container mx-auto pt-5 md:pt-0 '>
                    <div className="overflow-x-auto mb-28">
                        <table className="table text-center">
                            {/* head */}
                            <thead>
                                <tr className='text-center text-base md:text-xl'>
                                    <th className='text-left lg:pl-[120px]'>Job Title</th>
                                    <th className='text-left lg:pl-[120px] hidden md:block'>Employer Email</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th>Complete</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {
                                    myBids?.map(myBid =>
                                        <tr key={myBid._id}>
                                            <td className=" ">
                                                <div className="flex flex-col lg:flex-row  items-center lg:space-x-3">
                                                    <div className="avatar md:mr-4">
                                                        <div className=" w-10 h-10 lg:w-16 lg:h-16">
                                                            {
                                                                myBid.categoryName === 'Web Development' &&
                                                                <img src={web1} />
                                                            }
                                                            {
                                                                myBid.categoryName === 'Graphics Design' &&
                                                                <img src={web2} />
                                                            }
                                                            {
                                                                myBid.categoryName === 'Digital Marketing' &&
                                                                <img src={web3} />
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="font-bold text-base md:text-xl">{myBid?.jobTitle}</div>
                                                        <div className="text-sm md:text-base mt-2 block md:hidden font-bold text-center ">{myBid?.employerEmail}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="hidden md:block ">
                                                <div className="text-xl font-bold text-center ">{myBid?.employerEmail}</div>
                                            </td>
                                            <td className="text-sm md:text-lg font-semibold">
                                                {myBid?.bidDeadline}
                                            </td>
                                            <td className="text-sm md:text-lg  font-semibold">{myBid?.status}</td>
                                            <th>
                                                {myBid.status === 'pending' &&
                                                    <button style={{ padding: '0px 2px', }}
                                                        className="customBtn btn flex justify-center items-center h-14 w-full rounded-full font-medium hover:text-black text-xs md:text-lg  border-none" disabled>Complete</button>}
                                                {myBid.status === 'in progress' &&
                                                    <button style={{ padding: '0px 2px', }}
                                                        className="customBtn btn flex justify-center items-center h-14 w-full rounded-full font-medium hover:text-black text-xs md:text-lg  border-none">Complete</button>}
                                                {myBid.status === 'complete' &&
                                                    <div className="text-4xl text-green-700 hover:scale-110 duration-300 flex justify-center ease-in-out">
                                                        <IoCheckmarkDone></IoCheckmarkDone></div>}
                                            </th>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyBids;