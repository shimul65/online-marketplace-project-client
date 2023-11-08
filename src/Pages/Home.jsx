import Banner from "../Components/Banner/Banner";
import JobCategories from "../Components/Jobs/JobCategories";
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
            <JobCategories></JobCategories>
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