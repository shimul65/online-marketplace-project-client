import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { VscChevronRight } from 'react-icons/vsc';
import axios from "axios";
import Category from "./Category";


const Categories = () => {

    const [tabIndex, setTabIndex] = useState(0);
    // console.log(tabIndex);

    const [categories, setCategories] = useState([]);

    axios.get('http://localhost:5055/categories')
        .then(res => setCategories(res.data))
    // console.log(categories);

    //category tab

    // const categoryName = tabIndex === 0 ? 'Web Development' : '';

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


    const tabCategories = categories?.filter(category => category.categoryName === categoryName());

    return (
        <div>
            <div className="md:bg-[#eff6f3] pt-24 pb-14 my-8">
                <div className="container mx-auto" >
                    <div className="text-left mb-16 relative">
                        <h1 className="text-6xl font-bold ml-2">Most Demanding Categories.</h1>
                        <div className='flex items-center gap-2 text-[#04a44f] absolute md:right-10 md:top-[50%] mt-4 ml-4 md:mt-0 md:ml-0 hover:scale-105 ease-in-out duration-300'>
                            <p className='underline text-lg'>Explore More</p>
                            <div className='text-xl hover:scale-125 hover:rotate-[360deg] ease-in-out duration-500 '>
                                <VscChevronRight></VscChevronRight>
                            </div>
                        </div>
                    </div>

                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <div className="border border-gray-400 rounded-xl py w-[65%] grid grid-cols-3">
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
                                    tabCategories?.map(category => <Category key={category._id} category={category} tabIndex={tabIndex}></Category>)
                                }
                            </div >
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-3 my-24 md:mx-0">
                                {
                                    tabCategories?.map(category => <Category key={category._id} category={category} tabIndex={tabIndex}></Category>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-3 my-24 md:mx-0">
                                {
                                    tabCategories?.map(category => <Category key={category._id} category={category} tabIndex={tabIndex}></Category>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div >
            </div >
        </div >
    );
};

export default Categories;