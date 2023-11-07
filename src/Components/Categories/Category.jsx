import { Link } from 'react-router-dom';
import web1 from '../../assets/web11.png'
import web2 from '../../assets/web12.png'
import web3 from '../../assets/web13.png'
import { BsCurrencyDollar } from "react-icons/bs";
const Category = ({ category, tabIndex }) => {

    const { _id, jobTitle, deadline, description, minimumPrice, maximumPrice } = category;

    return (
        <div className="card card-compact border border-gray-300 pt-10 pb-5 shadow-xl ">
            <div className='relative'>
                <figure>
                    {
                        tabIndex == 0 && <img className='mr-[70%]' src={web1} alt="web photo" />
                    }
                    {
                        tabIndex == 1 && <img className='mr-[70%]' src={web2} alt="web photo" />
                    }
                    {
                        tabIndex == 2 && <img className='mr-[70%]' src={web3} alt="web photo" />
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
                <Link to={`/services/${_id}`}>
                    <button
                        className="customBtn flex justify-center items-center h-14  w-full rounded-full hover:text-black text-xs md:text-xl  border-none">Bid Now
                    </button></Link>
            </div>
        </div>
    );
};

export default Category;

{/* {
    tabIndex === 0 && <img src={web1} alt="" />
}
{
    tabIndex === 1 && <img src={web2} alt="" />
}
{
    tabIndex === 2 && <img src={web3} alt="" />
}
<h3 className='mt-6 font-bold text-xl'>{jobTitle}</h3>
<p className='my-3 text-lg'>Price Range: <span className='text-green-700 font-extrabold'> ${minimumPrice} - ${maximumPrice}</span></p>
<p>Deadline: {deadline}</p>
<p>{description}</p>
<button className='customBtn rounded-full text-xl'>Bid Now</button> */}

{/* border border-gray-300 rounded-lg shadow-lg p-10 */ }