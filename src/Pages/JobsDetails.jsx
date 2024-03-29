import { NavLink, useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import banner2 from '../assets/banner-bg-3-0.png'
import banner1 from '../assets/banner-bg-3.png'
import { BsCurrencyDollar } from "react-icons/bs";
import web1 from '../assets/web11.png'
import web2 from '../assets/web12.png'
import web3 from '../assets/web13.png'
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Components/Loader/Loader";

const JobsDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const navigate = useNavigate();
    const job = useLoaderData();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { _id, jobTitle, deadline, description, minimumPrice, maximumPrice, categoryName, employerEmail } = job;

    // const [bids, setBids] = useState([]);
    // axios.get(`https://online-marketplace-client.vercel.app/bids?buyerEmail=${user?.email}`)
    //     .then(res => setBids(res.data))



    //get bidsRequest data from server for specific user using tanstackQuery
    const { data: bids, isPending, isError, error } = useQuery({

        queryKey: ['bids'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bids?buyerEmail=${user?.email}`)
            return res.data;
        }
    })
    if (isPending) {
        return <Loader></Loader>
    }
    if (isError) {
        return <span className="text-center text-2xl font-bold text-red-500 py-5">Error : {error.message}</span>
    }


    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const deadlineFinish = deadline < formattedDate;

    const handleBidJob = e => {
        e.preventDefault();

        const form = e.target;
        const buyerEmail = form.buyerEmail.value;
        const employerEmail = form.employerEmail.value;
        const bidDeadline = form.bidDeadline.value;
        const biddingPrice = form.price.value;

        const bid = {
            buyerEmail,
            employerEmail,
            bidDeadline,
            biddingPrice: parseInt(biddingPrice),
            jobId: _id,
            jobTitle,
            deadline,
            description,
            minimumPrice,
            maximumPrice,
            categoryName,
            bidStatus: 'pending',
            bidRequestStatus: 'pending',

        }
        // console.log(bid);

        const isExists = Boolean(bids?.find(bid => bid.jobId == _id));
        // const isExists = bids?.find(bid => bid.jobId == _id);

        console.log(_id);
        console.log(bids);
        console.log(isExists);

        if (isExists) {
            return toast.error('You have already been bid to this job.', {
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                },
                iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                },
            });
        }
        else {
            axios.post('https://online-marketplace-client.vercel.app/bids', bid)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your Bid added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                // navigate('/bids');
                                window.history.back();
                            }
                        });
                    }

                })
        }

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
                        <div className="flex flex-col my-7 md:my-0 items-center space-y-5 md:space-y-9 md:mb-[85%] lg:mb-[100%]">
                            <h2 data-aos="zoom-in" className=" text-4xl lg:text-6xl font-extrabold text-center">Job Details
                            </h2>
                            <p data-aos="zoom-in" className="text-sm px-16 md:px-0 md:text-lg font-medium text-center w-full md:w-[250px] lg:w-full">Get & Bid Your Desire Jobs Here</p>
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
                    {/* job details */}
                    <div className="card flex-1 card-compact border border-gray-300 pt-10 pb-5 shadow-xl">
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
                    {/*job bidding section */}
                    <div className=" flex-1 shadow-xl py-8 rounded-2xl  border border-gray-300">
                        <h2 data-aos="fade-down" className="text-3xl mb-10 md:text-4xl font-bold text-center">Place Your Bid : </h2>
                        <div className="mx-3">
                            <form onSubmit={handleBidJob}>
                                {/* form row */}
                                <div className="md:flex items-center gap-6">
                                    <div className=" w-full ">
                                        <Input size="lg" name="buyerEmail" readOnly className="font-bold" color="blue" value={user?.email} label="Your Email" />
                                    </div>
                                    <div className=" w-full ">
                                        <Input size="lg" name="employerEmail" readOnly value={employerEmail} className="font-bold" color="green" label="Employer Email" />
                                    </div>
                                </div>
                                {/* form row */}
                                <div className="md:flex gap-6 my-5">
                                    <div className=" w-full ">
                                        <Input size="lg" type="number" required name="price" min={minimumPrice} max={maximumPrice} className="font-bold" color="purple" label="Your Bidding Price" />
                                    </div>
                                    <div className="form-control w-full">
                                        <Input size="lg" name="bidDeadline" required type="date" className="font-bold" color="indigo" label="Deadline" />
                                    </div>
                                </div>
                                {/* Bid on the project button */}
                                {
                                    user.email === employerEmail || deadlineFinish
                                        ?
                                        <input type="submit" value='Bid On the Project' className="btn flex justify-center items-center h-14  w-1/2 rounded-full mx-auto text-xs md:text-xl  border-none" disabled />
                                        :
                                        <input type="submit" value='Bid On the Project' className="customBtn cursor-pointer flex justify-center items-center h-14  w-1/2 rounded-full mx-auto text-xs md:text-xl  border-none" />
                                }
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-fit flex justify-center mx-auto mt-10 items-center">
                    <NavLink onClick={navigateToPreviousPage}>
                        <button
                            style={{ background: 'black' }} className="customBtn  h-14 rounded-full hover:text-black text-xs md:text-xl  border-none">Go Back
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default JobsDetails;