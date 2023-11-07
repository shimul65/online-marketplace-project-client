
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";

const Login = ({ handler }) => {

    const { login } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    //dialog box close
    const handle = handler;

    //show password
    const [showPass, setShowPass] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        //create new user
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // navigate after log in
                navigate(location?.state ? location.state : '/');

                toast.success('User Log In Successfully');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`${errorCode, errorMessage}
                Please input correct email and password`);
            })

    }

    return (
        <>
            {/* <Dialog
                // size=""
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            > */}
            <div className="card-body bg-white mx-auto my-20 rounded-2xl shadow-2xl border py-8 px-10 md:py-16 md:px-24">
                <form onSubmit={handleLogin}>
                    <h2 className="text-3xl font-semibold text-center">Hi, Welcome Back!</h2>
                    <hr className="my-8 mx-8" />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address " className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control mt-7">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className=" relative ">
                            <input type={showPass ? "text" : "password"}
                                placeholder="Enter your password" className="input w-full input-bordered" name='password' required />
                            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                                {
                                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handle} className="customBtn rounded-full hover:text-white">LOG IN</button>
                    </div>
                </form>

                <div className="divider">continue with</div>
                <div className="w-full">
                    <SocialLogin></SocialLogin>
                </div>
                <p onClick={handle} className="mt-8 text-center">Don’t Have An Account ? <span className="text-[#04a44f] underline font-medium"><Link to='/register'>Register</Link></span></p>
            </div>
            {/* </Dialog> */}
        </>
    );
};

export default Login;