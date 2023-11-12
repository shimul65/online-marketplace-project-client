import { Link } from 'react-router-dom';
import web1 from '../../assets/web11.png'
import web2 from '../../assets/web12.png'
import web3 from '../../assets/web13.png'
import { BsCurrencyDollar } from "react-icons/bs";
import Swal from 'sweetalert2';
import axios from 'axios';

const MyPostedJobCard = ({ job }) => {

    const { _id, jobTitle, deadline, description, minimumPrice, maximumPrice, categoryName } = job;

    // delete job
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://online-marketplace-client.vercel.app/jobs/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Posted Job has been deleted.',
                                'success'
                            )
                                .then((result) => {
                                    if (result.isConfirmed) {
                                        // refetch();
                                        window.location.reload();
                                    }
                                });
                        }
                    })
            }
        })
    }

    return (
        <div data-aos="zoom-in-down" data-aos-duration='700' className="card card-compact border border-gray-300 pt-10 pb-5 shadow-xl hover:bg-[#F8FDE4] cursor-pointer">
            <div className='relative'>
                <figure>
                    {
                        categoryName === 'Web Development' &&
                        <img className='mr-[70%]' src={web1} alt="web photo" />
                    }
                    {
                        categoryName === 'Graphics Design' &&
                        <img className='mr-[70%]' src={web2} alt="web photo" />
                    }
                    {
                        categoryName === 'Digital Marketing' &&
                        <img className='mr-[70%]' src={web3} alt="web photo" />
                    }
                </figure>

            </div>
            <div className="card-body flex flex-col">
                <div className="flex-grow mt-4">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p className="text-lg my-3">{description}</p>
                </div>
                <div className=" flex-grow w-fit py-1 rounded-r-2xl flex items-center gap-1">
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
                <div className='flex flex-col md:flex-row gap-2'>
                    <Link to={`/updatedJob/${_id}`}>
                        <button
                            className="customBtn flex justify-center items-center h-14  w-full rounded-full hover:text-black text-xs md:text-xl  border-none">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} style={{ background: '#ff4b01' }}
                        className="customBtn flex justify-center items-center h-14  w-full rounded-full hover:text-black text-xs md:text-xl  border-none">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobCard;