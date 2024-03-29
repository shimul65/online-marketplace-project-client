// import { useState } from 'react';
import useAuth from '../Hook/useAuth';
import banner2 from '../assets/banner-bg-3-0.png'
import banner1 from '../assets/banner-bg-3.png'
import MyPostedJobCard from '../Components/MyPostedJobCard/MyPostedJobCard';
import { VscChevronRight } from 'react-icons/vsc';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Loader from '../Components/Loader/Loader';
import { useQuery } from "@tanstack/react-query";
import Spin from '../Components/Spin/Spin';
import fav4 from '../../public/fav4.jpg'
import { useEffect } from 'react';

const MyPostedJobs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // custom hook
    const { user } = useAuth();

    //get jobs data from server using tanstackQuery
    const { data: myPostedJobs, isPending, isError, error } = useQuery({

        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axios.get(`https://online-marketplace-client.vercel.app/jobs?employerEmail=${user?.email}`)
            return res.data;
        }
    })
    if (isPending) {
        return <Loader></Loader>
    }
    if (isError) {
        return <span>Error : {error.message}</span>
    }
    // console.log(myPostedJobs);

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={fav4} />
                <title>Jobi Online Marketplace || Posted Job</title>
            </Helmet>
            {/* banner */}
            <div className="carousel w-full relative rounded-b-lg md:h-[200px] lg:h-[350px]" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
                <div className="carousel-ite container mx-auto  rounded-2xl hero relative w-full overflow-hidden"
                >
                    <div className="z-10">
                        <div className="flex flex-col my-7 md:my-0 items-center space-y-5 md:space-y-9 md:mb-[85%] lg:mb-[75%]">
                            <h2 data-aos="zoom-in" className=" text-4xl lg:text-5xl font-extrabold text-center">Your Posted Jobs
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
                    <p data-aos="zoom-in" className='text-lg md:text-xl font-medium ml-2 mt-5'>Employer Email: <span className='text-[#04a44f] text-xl md:text-2xl font-bold'>{user?.email}</span></p>
                    <div className='flex items-center gap-2 text-[#04a44f] absolute md:right-10 md:top-[50%] mt-4 ml-4 md:mt-0 md:ml-0 hover:scale-105 ease-in-out duration-300 '>
                        <p className='underline text-lg '>Explore More</p>
                        <div className='text-xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 '>
                            <VscChevronRight></VscChevronRight>
                        </div>
                    </div>
                </div>

                <div className=' container mx-auto pt-5 md:pt-0 '>
                    {
                        myPostedJobs?.length === 0
                            ?
                            <div className="text-center mb-10 ">
                                <p className='font-bold text-3xl text-red-500'>&#34; You haven&#39;t posted any job yet &#34;</p>
                                <div className=" flex justify-center items-center">
                                    <Spin></Spin>
                                </div>
                            </div>
                            :
                            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-3 mb-20 md:mx-0 ">
                                {
                                    myPostedJobs?.map(job => <MyPostedJobCard key={job._id} job={job} ></MyPostedJobCard>)
                                }
                            </div>
                    }
                </div>
            </div>

        </>
    );
};

export default MyPostedJobs;