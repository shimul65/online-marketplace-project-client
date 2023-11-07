import media1 from '../../assets/media_29.png'
import media2 from '../../assets/media_30.png'
import media3 from '../../assets/media_31.png'
import media4 from '../../assets/media_32.png'
import { VscChevronRight } from 'react-icons/vsc';

const Company = () => {
    return (
        <div className="bg-[#eff6f3] py-24 mt-8">
            <div className="container mx-auto" >
                <div className="text-left mb-16 relative">
                    <h1 className="text-6xl font-bold">Top Company</h1>
                    <div className='flex items-center gap-2 text-[#04a44f] absolute right-10 top-[50%] hover:scale-105 ease-in-out duration-300'>
                        <p className='underline text-lg'>Explore More</p>
                        <div className='text-xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 '>
                            <VscChevronRight></VscChevronRight>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 justify-items-center lg:grid-cols-4 gap-5">
                    <div className="card border-2 drop-shadow-xl w-full ">
                        <figure className="px-6 pt-8">
                            <img src={media1} alt="media" className="rounded-xl w-24 " />
                        </figure>
                        <div className="card-body text-center py-5">
                            <h2 className="text-2xl font-bold">Payoneer</h2>
                            <p className='font-semibold text-lg mt-5'>New York, Seattle, Washington...</p>
                        </div>
                        <button className="btn btn-outline btn-success  rounded-full mx-auto border text w-1/2 mb-6">Search</button>
                    </div >
                    <div className="card border-2 drop-shadow-xl  w-full ">
                        <figure className="px-6 pt-8">
                            <img src={media2} alt="media" className="rounded-xl w-24 " />
                        </figure>
                        <div className="card-body text-center py-5">
                            <h2 className="text-2xl font-bold">Medium</h2>
                            <p className='font-semibold text-lg mt-5'>New York, Seattle, Washington...</p>
                        </div>
                        <button className="btn btn-outline btn-success  rounded-full mx-auto border text w-1/2 mb-6">Search</button>
                    </div >
                    <div className="card border-2 drop-shadow-xl  w-full ">
                        <figure className="px-6 pt-8">
                            <img src={media3} alt="media" className="rounded-xl w-24 " />
                        </figure>
                        <div className="card-body text-center py-5 ">
                            <h2 className="text-2xl font-bold">Linkedin</h2>
                            <p className='font-semibold text-lg  mt-5'>New York, Seattle, Washington...</p>
                        </div>
                        <button className="btn btn-outline btn-success  rounded-full mx-auto border text w-1/2 mb-6">Search</button>
                    </div >
                    <div className="card border-2 drop-shadow-xl  w-full ">
                        <figure className="px-6 pt-8">
                            <img src={media4} alt="media" className="rounded-xl w-24 " />
                        </figure>
                        <div className="card-body text-center py-5">
                            <h2 className="text-2xl font-bold">MacDonald’s</h2>
                            <p className='font-semibold text-lg mt-5'>New York, Seattle, Washington...</p>
                        </div>
                        <button className="btn btn-outline btn-success  rounded-full mx-auto border text w-1/2 mb-6">Search</button>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default Company;