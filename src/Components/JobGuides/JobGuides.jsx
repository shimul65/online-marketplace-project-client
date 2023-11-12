import jobGuide1 from '../../assets/blog_img_09.jpg'
import jobGuide2 from '../../assets/blog_img_10.jpg'
import { BsArrowRightShort } from 'react-icons/bs';
import { VscChevronRight } from 'react-icons/vsc';



const JobGuides = () => {

    return (
        <div className='md:mb-20'>
            <div className="text-left md:pt-6 mb-16 relative">
                <h1 data-aos="fade-right" className="lg:text-6xl text-5xl text-center md:text-left font-bold ml-5">Job Guides</h1>
                <div data-aos="zoom-in" className='flex items-center gap-2 text-[#04a44f] absolute md:right-10 md:top-[50%] mt-4 ml-4 md:mt-0 md:ml-0 hover:scale-105 ease-in-out duration-300'>
                    <p className='underline text-lg'>Explore More</p>
                    <div className='text-xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 '>
                        <VscChevronRight></VscChevronRight>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mx-2 md:mx-0 md:flex-row justify-around items-center gap-6'>
                <div data-aos="fade-right"
                    data-aos-duration="800" className="card card-compact shadow-xl h-[500px] w-full relative overflow-hidden " >
                    <div
                        className="absolute inset-0 bg-cover bg-center ease-in-out duration-300 hover:scale-105  "
                        style={{ backgroundImage: `url(${jobGuide1})`, backgroundSize: '100% 100%', }}
                    ></div>
                    <div className="card-body border mt-[73%] md:mt-[100%] lg:mt-[73%] bg-white rounded-b-2xl z-10">
                        <div className="flex  flex-col gap-3 ">
                            <p>
                                Featured - 18 Jul 2023
                            </p>
                            <h2 className="card-title hover:text-[#04a44f] cursor-pointer">&quot;Navigating the Modern Job Market: A Comprehensive Guide&quot;</h2>
                        </div>
                        <div className="flex  items-center gap-3 hover:text-[#04a44f]  w-fit">
                            <p className=" text-base">Continue Reading </p>
                            <button className=" text-3xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 text-[#04a44f]"><BsArrowRightShort></BsArrowRightShort></button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down"
                data-aos-duration='800'
                    className="card card-compact shadow-xl h-[500px] relative overflow-hidden  w-full " >
                    <div
                        className="absolute inset-0 bg-cover bg-center ease-in-out duration-300 hover:scale-105  "
                        style={{ backgroundImage: `url(${jobGuide2})`, backgroundSize: '100% 100%', }}
                    ></div>
                    <div className="card-body border mt-[73%] md:mt-[100%] lg:mt-[73%] bg-white rounded-b-2xl z-10">
                        <div className="flex  flex-col gap-3 ">
                            <p>
                                Featured - 28 Oct 2023
                            </p>
                            <h2 className="card-title hover:text-[#04a44f] cursor-pointer">&quot;Unlocking Your Career Potential: Proven Strategies and Tips&quot;</h2>
                        </div>
                        <div className="flex  items-center gap-3 hover:text-[#04a44f]  w-fit">
                            <p className=" text-base">Continue Reading </p>
                            <button className=" text-3xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 text-[#04a44f]"><BsArrowRightShort></BsArrowRightShort></button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-duration="800" className="card card-compact shadow-xl h-[500px] relative overflow-hidden  w-full " >
                    <div
                        className="absolute inset-0 bg-cover bg-center ease-in-out duration-300 hover:scale-105  "
                        style={{ backgroundImage: `url(${jobGuide1})`, backgroundSize: '100% 100%', }}
                    ></div>
                    <div className="card-body border mt-[73%] md:mt-[100%] lg:mt-[73%] bg-white rounded-b-2xl z-10">
                        <div className="flex  flex-col gap-3 ">
                            <p>
                                Featured - 28 Oct 2023
                            </p>
                            <h2 className="card-title hover:text-[#04a44f] cursor-pointer">&quot;Job Search Success: Expert Advice for Landing Your Dream Job&quot;</h2>
                        </div>
                        <div className="flex  items-center gap-3 hover:text-[#04a44f]  w-fit">
                            <p className=" text-base">Continue Reading </p>
                            <button className=" text-3xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 text-[#04a44f]"><BsArrowRightShort></BsArrowRightShort></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobGuides;