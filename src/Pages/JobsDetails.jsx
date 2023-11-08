import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import banner2 from '../assets/banner-bg-3-0.png'
import banner1 from '../assets/banner-bg-3.png'
import { BsCurrencyDollar } from "react-icons/bs";
import web1 from '../assets/web11.png'
import web2 from '../assets/web12.png'
import web3 from '../assets/web13.png'
import { Input } from "@material-tailwind/react";


const JobsDetails = () => {

    const job = useLoaderData();
    const { user } = useAuth();
    const { _id, jobTitle, deadline, description, minimumPrice, maximumPrice, categoryName, employerEmail } = job;

    return (
        <>
            {/* banner */}
            <div className="carousel w-full relative rounded-b-lg md:h-[200px] lg:h-[350px]" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
                <div className="carousel-ite container mx-auto  rounded-2xl hero relative w-full overflow-hidden"
                >
                    <div className="z-10">
                        <div className="flex flex-col my-7 md:my-0 items-center space-y-5 md:space-y-9 md:mb-[85%] lg:mb-[100%]">
                            <h2 className=" text-4xl lg:text-6xl font-extrabold text-center">Job Details
                            </h2>
                            <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-center w-full md:w-[250px] lg:w-full">Get & Bid Your Desire Jobs Here</p>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <img style={{ filter: 'brightness(85%)' }} className='' src={banner2} alt="" />
                    </div>
                </div>
            </div>

            {/* job details with bid on project from */}
            <div className='md:bg-[#eff6f3] pt-20 pb-52'>
                <div className="container mx-auto flex flex-col md:flex-row justify-center gap-5 items-center" >
                    <div className="card card-compact border border-gray-300 pt-10 pb-5 shadow-xl">
                        <div className='relative'>
                            <figure>
                                {
                                    categoryName == "Web Development" && <img className='mr-[70%]' src={web1} alt="web photo" />
                                }
                                {
                                    categoryName == "Graphics Design " && <img className='mr-[70%]' src={web2} alt="web photo" />
                                }
                                {
                                    categoryName == "Digital Marketing" && <img className='mr-[70%]' src={web3} alt="web photo" />
                                }
                            </figure>

                        </div>
                        <div className="card-body flex flex-col">
                            <div className="flex-grow mt-4">
                                <h2 className="card-title">{jobTitle}</h2>
                                <p className="text-lg my-3">{description}</p>
                            </div>
                            <div className=" flex-grow w-fit py-1 flex items-center gap-1">
                                <div>
                                    <h1 className='text-lg font-medium'>Price Range: </h1>
                                </div>
                                <div className='flex items-center text-green-700 font-bold'>
                                    <p className="text-xl"><BsCurrencyDollar></BsCurrencyDollar></p>
                                    <span className="text-xl">{minimumPrice} - </span>
                                    <p className="text-xl"><BsCurrencyDollar></BsCurrencyDollar></p>
                                    <span className="text-xl">{maximumPrice}</span>
                                </div>
                            </div>
                            <div className=" flex-grow w-fit pb-3 rounded-r-2xl flex items-center gap-1">
                                <div>
                                    <h1 className='text-lg font-medium'>Deadline: <span className="text-xl">{deadline}</span> </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" flex-1 shadow-xl py-8 rounded-2xl  border border-gray-300">
                        <h2 className="text-3xl mb-10 md:text-4xl font-bold text-center">Place Your Bid : </h2>
                        <div className="mx-3">
                            <form >
                                {/* form row */}
                                <div className="md:flex items-center gap-6">
                                    <div className=" w-full ">
                                        <Input size="lg" className="font-bold" color="blue" label="Your Email" />
                                    </div>
                                    <div className=" w-full ">
                                        <Input size="lg" readOnly value={employerEmail} className="font-bold" color="green" label="Employer Email" />
                                    </div>
                                </div>
                                {/* form row */}
                                <div className="md:flex gap-6 my-5">
                                    <div className=" w-full ">
                                        <Input size="lg" type="number" min={1} className="font-bold" color="purple" label="Your Bidding Price" />
                                    </div>
                                    <div className="form-control w-full">
                                        <Input size="lg" type="date" className="font-bold" color="indigo" label="Deadline" />
                                    </div>

                                </div>
                                <input type="submit" value='Bid On the Project' className="customBtn flex justify-center items-center h-14  w-1/2 rounded-full mx-auto text-xs md:text-xl  border-none" />
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default JobsDetails;