import Banner from "../Components/Banner/Banner";
import Company from "../Components/Company/Company";
import Question from "../Components/Question/Question";
import Trusted from "../Components/Trusted/Trusted";


const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Banner></Banner>
                <Trusted></Trusted>
            </div>
            <Company></Company>
            <div className="container mx-auto">
                <Question></Question>
            </div>

        </div>
    );
};

export default Home;