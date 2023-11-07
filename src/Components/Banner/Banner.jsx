import banner1 from '../../assets/banner-bg-3.png'
import banner2 from '../../assets/banner-bg-3-0.png'
import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import b8 from '../../assets/b8.png'
import b5 from '../../assets/b5.png'
import b6 from '../../assets/b6.png'
import b7 from '../../assets/b7.png'
import './Banner.css'


const Banner = () => {


    return (
        <div className="carousel w-full relative rounded-lg my-5">
            <div className="carousel-ite  rounded-2xl hero relative w-full overflow-hidden" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}
            >
                <div className="z-10">
                    <div className="flex flex-col items-center space-y-9 lg:mb-[8%] ">
                        <h2 data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className=" text-2xl md:text-6xl font-extrabold text-center">Find & Hire Experts <br /> for any Job
                        </h2>
                        <p data-aos="zoom-in" data-aos-easing="linear"
                            data-aos-duration="1500" className="text-sm px-16 md:px-0 md:text-lg font-medium text-center">Jobs & Job search. Find jobs in global. Executive jobs & work.</p>
                        <div className='border p-2 rounded-full bg-white w-full flex gap-2 items-center'>
                            <div className='relative '>
                                <input type="text" placeholder="What are you looking ?"
                                    className="input w-full ml-3 px-8 rounded-full text-black" />
                                <button className="btn bg-transparent border-none btn-circle absolute top-0 left-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className='ml-5'>
                                <label>
                                    <select className="input w-full" >
                                        <option disabled selected>City, State or ZIP</option>
                                        <option>New York</option>
                                        <option>Miami</option>
                                        <option>Florida</option>
                                    </select>
                                </label>
                            </div>
                            <button className="customBtn rounded-full border-none text ml-8">Search</button>
                        </div>
                        <p>Populer: Design Art Business Video Editing</p>
                    </div>
                </div>
                <div className='mb-1'>
                    <img style={{ filter: 'brightness(85%)' }} className='' src={banner2} alt="" />
                </div>
                <img className='absolute top-[13%] left-[21%] w-[60px] bounce-y' src={b1} alt="" />
                <img className='absolute top-[34%] left-[14%] w-[70px] bounce-y' src={b2} alt="" />
                <img className='absolute top-[58%] left-[8%] w-[80px] bounce-y' src={b3} alt="" />
                <img className='absolute top-[13%] right-[21%] w-[60px] bounce-y' src={b5} alt="" />
                <img className='absolute top-[34%] right-[14%] w-[70px] bounce-y' src={b6} alt="" />
                <img className='absolute top-[58%] right-[8%] w-[80px] bounce-y' src={b7} alt="" />
                <img className='absolute bottom-[3%] w-[90px] bounce-y pb-1 border-gradient border-b-2' src={b8} alt="" />
            </div>
        </div>
    );
};

export default Banner;