import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";
import Company from "../Components/Company/Company";
import JobGuides from "../Components/JobGuides/JobGuides";
import Question from "../Components/Question/Question";
import Trusted from "../Components/Trusted/Trusted";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <Trusted></Trusted>
            </div>
            <Categories></Categories>
            <div className="container mx-auto">
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