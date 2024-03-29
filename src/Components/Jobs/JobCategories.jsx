import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { VscChevronRight } from 'react-icons/vsc';
import axios from "axios";
import Job from "./Job";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import loader from '../../assets/loader.svg'
import { useEffect } from "react";
// import useAOSInit from "../../Hook/useAOSInit";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";


const JobCategories = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [tabIndex, setTabIndex] = useState(0);

    //get jobs data from server using tanstackQuery
    const { data: jobs, isPending, isError, error } = useQuery({

        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axios.get('https://online-marketplace-client.vercel.app/jobs')
            return res.data;
        }
    })
    if (isPending) {
        return <Loader></Loader>
    }
    if (isError) {
        return <span>Error : {error.message}</span>
    }
    // console.log(jobs);

    const categoryName = () => {
        let categoryName = '';
        if (tabIndex === 0) {
            categoryName = 'Web Development'
        }
        else if (tabIndex === 1) {
            categoryName = 'Graphics Design'
        }
        else {
            categoryName = 'Digital Marketing'
        }
        return categoryName;
    }

    const categoriesWiseJobs = jobs?.filter(job => job.categoryName === categoryName());

    return (
        <div>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={loader} />
                <title>Jobi Online Marketplace || Job Categories</title>
            </Helmet>
            <div className="md:bg-[#eff6f3] md:pt-24 pb-14 my-8 overflow-hidden">
                <div className="container mx-auto" >
                    <div className="text-left mb-16 relative">
                        <h1 data-aos="fade-right"
                            className="lg:text-6xl text-center md:text-left text-4xl font-bold ml-2">Most Demanding Categories</h1>
                        <div data-aos="zoom-in" className='flex items-center gap-2 text-[#04a44f] absolute md:right-10 md:top-[50%] mt-4 ml-4 md:mt-0 md:ml-0 hover:scale-105 ease-in-out duration-300'>
                            <p className='underline text-lg'>Explore More</p>
                            <div className='text-xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 '>
                                <VscChevronRight></VscChevronRight>
                            </div>
                        </div>
                    </div>

                    {/* implement tabs using this NPM package */}
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <div data-aos="fade-down" data-aos-duration='700' className="border border-gray-400 mx-2 rounded-xl lg:w-[65%] lg::mx-auto md:mx-0 md:grid grid-cols-3">
                                <Tab> <div className={tabIndex === 0 ? " bg-[#d2f34c] cursor-pointer px-5 w-full text-center text-xl text-green-700 font-bold py-4" : "hover:bg-[#d2f34c] cursor-pointer border-green-700 px-5 w-full text-center text-xl font-bold  py-4"}>
                                    Web Development
                                </div></Tab>
                                <Tab> <div className={tabIndex === 1 ? " bg-[#d2f34c] cursor-pointer px-5 w-full text-center text-xl text-green-700 font-bold py-4" : "hover:bg-[#d2f34c] cursor-pointer border-green-700 px-5 w-full text-center text-xl font-bold  py-4"}>
                                    Graphic Design
                                </div></Tab>
                                <Tab> <div className={tabIndex === 2 ? " bg-[#d2f34c] cursor-pointer px-5 w-full text-center text-xl text-green-700 font-bold py-4" : "hover:bg-[#d2f34c] cursor-pointer border-green-700 px-5 w-full text-center text-xl font-bold  py-4"}>
                                    Digital Marketing
                                </div></Tab>
                            </div>
                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-3 my-24 md:mx-0">
                                {
                                    categoriesWiseJobs?.map(job => <Job key={job._id} job={job} tabIndex={tabIndex}></Job>)
                                }
                            </div >
                        </TabPanel>
                        <TabPanel>
                            <div data-aos="flip-right" data-aos-duration='400' className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-3 my-24 md:mx-0">
                                {
                                    categoriesWiseJobs?.map(job => <Job key={job._id} job={job} tabIndex={tabIndex}></Job>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div data-aos="flip-right" data-aos-duration='400' className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-3 my-24 md:mx-0">
                                {
                                    categoriesWiseJobs?.map(job => <Job key={job._id} job={job} tabIndex={tabIndex}></Job>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div >
            </div >
        </div >
    );
};

export default JobCategories;