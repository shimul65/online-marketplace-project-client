import axios from 'axios';
import banner2 from '../assets/banner-bg-3-0.png'
import banner1 from '../assets/banner-bg-3.png'
import { Input, Textarea } from "@material-tailwind/react";
import Swal from 'sweetalert2';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';

const UpdateJobs = () => {

    const job = useLoaderData();
    const { _id, jobTitle, deadline, description, minimumPrice, maximumPrice, categoryName, employerEmail } = job;

    const navigate = useNavigate();

    const handleUpdateJob = e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.title.value;
        const deadline = form.bidDeadline.value;
        const categoryName = form.category.value;
        const minimumPrice = form.minPrice.value;
        const maximumPrice = form.maxPrice.value;
        const employerEmail = form.employerEmail.value;
        const description = form.description.value;

        const job = { jobTitle, deadline, categoryName, minimumPrice, maximumPrice, employerEmail, description }
        // console.log(job);

        // data send to server side
        axios.put(`http://localhost:5055/jobs/${_id}`, job)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    navigate('/postedJob')
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Job Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const navigateToPreviousPage = () => {
        window.history.back();
    };


    return (
        <>
            {/* banner */}
            <div className="carousel w-full relative rounded-b-lg md:h-[200px] lg:h-[350px]" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
                <div className="carousel-ite container mx-auto  rounded-2xl hero relative w-full overflow-hidden"
                >
                    <div className="z-10">
                        <div className="flex flex-col my-7 md:my-0 items-center space-y-5 md:space-y-9 md:mb-[85%] lg:mb-[85%]">
                            <h2 className=" text-4xl lg:text-5xl font-extrabold text-center"> Update Your Posted Job
                            </h2>
                            <p className="text-sm px-16 md:px-0 lg:text-lg font-medium text-center w-full md:w-[250px] lg:w-full">&#34;Define the position or role you&#39;re looking to fill, <br /> making it easier for potential candidates to understand the job&#39;s&#34;</p>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <img style={{ filter: 'brightness(85%)' }} className='' src={banner2} alt="" />
                    </div>
                </div>
            </div>

            {/* update job form */}
            <div className='md:bg-[#eff6f3] pt-20 pb-52'>
                <div className="container mx-auto" >
                    <div className=" flex-1 shadow-xl py-16 rounded-2xl  border border-gray-300">
                        <h2 className="text-3xl mb-10 md:text-4xl font-bold text-center">Update Jobs : </h2>
                        <div className="mx-4 md:mx-16 lg:mx-32">
                            <form onSubmit={handleUpdateJob} className='space-y-10'>
                                {/* form row */}
                                <div className="md:flex items-center gap-6">
                                    <div className=" w-full ">
                                        <Input size="lg" name="employerEmail" readOnly defaultValue={employerEmail} className="font-bold" color="blue" label="Your Email" />
                                    </div>
                                    <div className="form-control w-full mt-6 md:mt-0">
                                        <label>
                                            <select defaultValue={categoryName} className="input input-bordered w-full" name="category" required >
                                                <option disabled >Select Brand Name</option>
                                                <option>Web Development</option>
                                                <option>Graphics Design</option>
                                                <option>Digital Marketing</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                {/* form row */}
                                <div className="md:flex gap-6">
                                    <div className=" w-full  ">
                                        <Input size="lg" type="text" defaultValue={jobTitle} required name="title" className="font-bold" color="purple" label="Job Title" />
                                    </div>
                                    <div className="form-control w-full mt-6 md:mt-0">
                                        <Input size="lg" defaultValue={deadline} name="bidDeadline" required type="date" color="indigo" label="Deadline" />
                                    </div>
                                </div>
                                {/* form row */}
                                <div className="md:flex gap-6">
                                    <div className=" w-full ">
                                        <Input size="lg" type="number" defaultValue={minimumPrice} required name="minPrice" min={1} className="font-bold" color="purple" label="Minimum Price Range" />
                                    </div>
                                    <div className=" w-full mt-6 md:mt-0">
                                        <Input size="lg" type="number" defaultValue={maximumPrice} required name="maxPrice" min={1} className="font-bold" color="purple" label="Maximum Price Range" />
                                    </div>
                                </div>
                                {/* form row */}
                                <div className="md:flex gap-6">
                                    <div className=" w-full ">
                                        <Textarea name='description' defaultValue={description} color="green" label="Job Description" />
                                    </div>
                                </div>
                                <input type="submit"  value='Update Job' className="customBtn flex cursor-pointer justify-center items-center h-14  w-1/2 rounded-full mx-auto text-xs md:text-xl  border-none" />
                            </form>
                        </div>
                    </div>
                </div>
                <NavLink onClick={navigateToPreviousPage}>
                    <button
                        style={{ background: 'black' }} className="customBtn  flex justify-center mx-auto mt-10 items-center h-14 rounded-full hover:text-black text-xs md:text-xl  border-none">Go Back
                    </button>
                </NavLink>

            </div>
        </>
    );
};

export default UpdateJobs;