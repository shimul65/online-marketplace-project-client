import { NavLink, useRouteError } from "react-router-dom";
import notFound from '../assets/something-lost.png'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="mx-auto py-20 md:py-40 card min-h-screen shadow-lg text-center bg-[#eff6f3]">
            <div className="card-body">
                {
                    error.status === 404 &&
                    <div>
                        <img className="container mx-auto w-[50%]" src={notFound} alt="" />
                        <h3 className="text-3xl my-5">Oops, looks like the page is lost.</h3>
                        <p>This is not a fault, just an accident that was not intentional.</p>
                        <NavLink to='./'>
                            <div className="card-actions justify-center mt-5">
                                <button className="customBtn rounded-full border-none text ">Go Back</button>
                            </div></NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;