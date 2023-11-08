// import axios from 'axios';
// import useAuth from '../Hook/useAuth';
import { useState } from 'react';
import useAuth from '../Hook/useAuth';
import banner2 from '../assets/banner-bg-3-0.png'
import banner1 from '../assets/banner-bg-3.png'
import axios from 'axios';
import MyPostedJobCard from '../Components/MyPostedJobCard/MyPostedJobCard';
import { VscChevronRight } from 'react-icons/vsc';
// import { Input, Textarea } from "@material-tailwind/react";
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

const MyPostedJobs = () => {

    const { user } = useAuth();
    const [myPostedJobs, setMyPostedJobs] = useState([]);

    axios.get(`http://localhost:5055/jobs?employerEmail=${user?.email}`)
        .then(res => setMyPostedJobs(res.data))


    return (
        <>
            {/* banner */}
            <div className="carousel w-full relative rounded-b-lg md:h-[200px] lg:h-[350px]" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
                <div className="carousel-ite container mx-auto  rounded-2xl hero relative w-full overflow-hidden"
                >
                    <div className="z-10">
                        <div className="flex flex-col my-7 md:my-0 items-center space-y-5 md:space-y-9 md:mb-[85%] lg:mb-[75%]">
                            <h2 className=" text-4xl lg:text-5xl font-extrabold text-center">Your Posted Jobs
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
                    <p className='text-lg md:text-xl font-medium ml-2 mt-5'>Employer Email: <span className='text-[#04a44f] text-xl md:text-2xl font-bold'>{user?.email}</span></p>
                    <div className='flex items-center gap-2 text-[#04a44f] absolute md:right-10 md:top-[50%] mt-4 ml-4 md:mt-0 md:ml-0 hover:scale-105 ease-in-out duration-300 '>
                        <p className='underline text-lg '>Explore More</p>
                        <div className='text-xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 '>
                            <VscChevronRight></VscChevronRight>
                        </div>
                    </div>
                </div>
                <div className=' container mx-auto pt-5 md:pt-0 '>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-3 mb-20 md:mx-0 ">
                        {
                            myPostedJobs?.map(job => <MyPostedJobCard key={job._id} job={job} ></MyPostedJobCard>)
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default MyPostedJobs;