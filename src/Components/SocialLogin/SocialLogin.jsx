
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {


    return (
        <div className="flex justify-center items-center gap-10">
            <div className="flex">
                <button className="btn btn-outline btn-success">
                    <FcGoogle className="w-6 h-6 " /> <span className="md:hidden lg:block">Google</span>
                </button>
            </div>
            <div className="flex">
                <button  className="btn btn-outline btn-success ">
                    <AiOutlineGithub className="w-6 h-6" /> <span className="md:hidden lg:block">Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;