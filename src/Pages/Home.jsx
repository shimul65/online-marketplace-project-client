import Banner from "../Components/Banner/Banner";
import JobCategories from "../Components/Jobs/JobCategories";
import Company from "../Components/Company/Company";
import JobGuides from "../Components/JobGuides/JobGuides";
import Question from "../Components/Question/Question";
import Trusted from "../Components/Trusted/Trusted";
import { Helmet } from "react-helmet-async";
import loader from '../assets/loader.svg'
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="overflow-hidden">
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={loader} />
            </Helmet>
            <Banner></Banner>
            <div className="container mx-auto">
                <Trusted></Trusted>
            </div>
            <JobCategories></JobCategories>
            <div className="container mx-auto ">
                <JobGuides></JobGuides>
            </div>
            <Company></Company>
            <div className="container mx-auto">
                <Question></Question>
            </div>
        </div>
    );
};

export default Home;