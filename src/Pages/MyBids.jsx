import axios from "axios";
import useAuth from "../Hook/useAuth";
import banner2 from '../assets/banner-bg-3-0.png'
import banner1 from '../assets/banner-bg-3.png'
import { VscChevronRight } from 'react-icons/vsc';
import { IoCheckmarkDone } from 'react-icons/io5';
import web1 from '../assets/web11.png'
import web2 from '../assets/web12.png'
import web3 from '../assets/web13.png'
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Spin from "../Components/Spin/Spin";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Components/Loader/Loader";
import Swal from "sweetalert2";
import fav2 from '../../public/fav2.jpg'
import { useEffect } from "react";

const MyBids = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // custom hook
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    //get bidsRequest data from server for specific user using tanstackQuery
    const { data: myBids, isPending, isError, error, refetch } = useQuery({

        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bids?buyerEmail=${user?.email}`)
            return res.data;
        }
    })
    if (isPending) {
        return <Loader></Loader>
    }
    if (isError) {
        return <span>Error : {error.message}</span>
    }

    // handler complete btn
    const handelComplete = id => {

        const updateStatus = { bidStatus: 'complete', bidRequestStatus: 'complete' }

        // send updated status to backend using axios
        axios.patch(`https://online-marketplace-client.vercel.app/bids/${id}`, updateStatus)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Bid Accept successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            refetch();
                        }
                    });
                }
            })
    }


    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={fav2} />
                <title>Jobi Online Marketplace || Bids</title>
            </Helmet>
            {/* banner */}
            <div className="carousel w-full relative rounded-b-lg md:h-[200px] lg:h-[350px]" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
                <div className="carousel-ite container mx-auto  rounded-2xl hero relative w-full overflow-hidden"
                >
                    <div className="z-10">
                        <div className="flex flex-col my-7 md:my-0 items-center space-y-5 md:space-y-9 md:mb-[85%] lg:mb-[75%]">
                            <h2 data-aos="zoom-in" className=" text-4xl lg:text-5xl font-extrabold text-center">My Bidding Jobs
                            </h2>
                            <p data-aos="zoom-in" className="text-sm px-16 md:px-0 lg:text-lg font-medium text-center w-full md:w-[250px] lg:w-full">&#34;It provides a clear description of the job&#39;s responsibilities, <br /> qualifications, and other essential details to attract potential candidates&#34;</p>
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
                    <h1 data-aos="zoom-in" className=" text-3xl md:text-4xl font-bold ml-2">Your Posted Jobs:</h1>
                    <p data-aos="zoom-in" className='text-lg md:text-xl font-medium ml-2 mt-5'>Buyer Email: <span className='text-[#04a44f] text-xl md:text-2xl font-bold'>{user?.email}</span></p>
                    <div className='flex items-center gap-2 text-[#04a44f] absolute md:right-10 md:top-[50%] mt-4 ml-4 md:mt-0 md:ml-0 hover:scale-105 ease-in-out duration-300 '>
                        <p className='underline text-lg '>Explore More</p>
                        <div className='text-xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 '>
                            <VscChevronRight></VscChevronRight>
                        </div>
                    </div>
                </div>
                {
                    myBids?.length === 0
                        ?
                        <div className="text-center mb-10 ">
                            <p className='font-bold text-3xl text-red-500'>&#34; You haven&#39;t bid any job yet &#34;</p>
                            <div className=" flex justify-center items-center">
                                <Spin></Spin>
                            </div>
                        </div>
                        :
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
                                                        <div className="text-xl mt-2 font-bold text-center ">{myBid?.employerEmail}</div>
                                                    </td>
                                                    <td className="text-sm md:text-lg font-semibold">
                                                        {myBid?.bidDeadline}
                                                    </td>
                                                    {myBid.bidStatus === 'pending' &&
                                                        <td className="text-sm md:text-lg  font-semibold">Pending</td>
                                                    }
                                                    {myBid.bidStatus === 'canceled' &&
                                                        <td className="text-sm md:text-lg  font-semibold text-red-500">Cancelled</td>
                                                    }
                                                    {myBid.bidStatus === 'in progress' &&
                                                        <td className="text-sm md:text-lg  font-semibold text-blue-500">In Progress..</td>
                                                    }
                                                    {myBid.bidStatus === 'complete' &&
                                                        <td className="text-sm md:text-lg  font-semibold text-green-500">Completed</td>
                                                    }
                                                    <th>
                                                        {myBid.bidStatus === 'pending' &&
                                                            <button style={{ padding: '0px 2px', }}
                                                                className="customBtn btn flex justify-center items-center h-14 w-full rounded-full font-medium hover:text-black text-xs md:text-lg  border-none" disabled>Complete</button>}
                                                        {myBid.bidStatus === 'canceled' && ''}
                                                        {myBid.bidStatus === 'in progress' &&
                                                            <button onClick={() => handelComplete(myBid._id)} style={{ padding: '0px 2px', }}
                                                                className="customBtn btn flex justify-center items-center h-14 w-full rounded-full font-medium hover:text-black text-xs md:text-lg  border-none">Complete</button>}
                                                        {myBid.bidStatus === 'complete' &&
                                                            <div className="text-4xl text-green-700 hover:scale-110 duration-300 flex justify-center ease-in-out">
                                                                <IoCheckmarkDone></IoCheckmarkDone></div>}
                                                    </th>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                }
            </div>
        </>
    );
};

export default MyBids;