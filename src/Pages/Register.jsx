
import banner2 from '../assets/banner-bg-3-0.png'
import banner1 from '../assets/banner-bg-3.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import { useState } from 'react';
import useAuth from '../Hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

    const { createUser, handleUpdateProfile } = useAuth();
    const navigate = useNavigate();

    //show password
    const [showPass, setShowPass] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const isAccepted = form.get('terms') === 'on';

        // password validation check
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer');
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your Password should contain an uppercase letter')
            return;
        }

        else if (!/[!@#%^&*()_+\-=\[\]{}|;\\':",.<>?~`]/.test(password)) {
            toast.error('Your Password should contain a special character');
            return;
        }
        else if (!isAccepted) {
            toast.error('Please accept our terms & conditions');
            return;
        }

        //create new user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // update profile
                handleUpdateProfile(name, photoURL)
                    .then(() => {
                        navigate(location?.state ? location.state : '/');
                        toast.success('User Sign Up Successfully')
                    }).catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })
    }

    return (
        <>
            {/* banner */}
            <div className="carousel w-full relative rounded-b-lg md:h-[200px] lg:h-[350px]" style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
                <div className="carousel-ite container mx-auto  rounded-2xl hero relative w-full overflow-hidden"
                >
                    <div className="z-10">
                        <div className="flex flex-col my-7 md:my-0 items-center space-y-5 md:space-y-9 md:mb-[85%] lg:mb-[100%]">
                            <h2 className=" text-4xl lg:text-6xl font-extrabold text-center">Register
                            </h2>
                            <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-center w-full md:w-[250px] lg:w-full"> Create an account & Start posting or hiring talents</p>
                        </div>
                    </div>
                    <div className='mb-1'>
                        <img style={{ filter: 'brightness(85%)' }} className='' src={banner2} alt="" />
                    </div>
                </div>
            </div>

            {/* register */}
            <div className='md:bg-[#eff6f3] py-6'>
                <div className="container mx-auto" >
                    <div className="card-body mx-auto md:w-[80%] lg:w-[60%] border py-8 px-10 my-20 rounded-2xl shadow-2xl md:px-24">
                        <form onSubmit={handleRegister}>
                            <h2 className="text-4xl font-semibold text-center">Create Account</h2>
                            <hr className="my-8 mx-8" />
                            <div className="form-control mt-6">
                                <label className="label">
                                    <span className=" label-text font-semibold">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control mt-6">
                                <label className="label">
                                    <span className=" label-text font-semibold">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your photo url" className="input input-bordered" name="photoURL" required />
                            </div>
                            <div className="form-control mt-6">
                                <label className="label">
                                    <span className=" label-text font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email address" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control mt-6">
                                <label className="label">
                                    <span className=" label-text font-semibold">Password</span>
                                </label>
                                <div className=" relative ">
                                    <input type={showPass ? "text" : "password"}
                                        placeholder="Enter your password" className="input w-full input-bordered" name='password' required />
                                    <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                                        {
                                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }</span>
                                </div>
                            </div>
                            <div className='mt-4 flex gap-2 items-center'>
                                <input type="checkbox" name="terms" id="terms" />
                                <label htmlFor="terms">Accept Our Terms and Conditions</label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="customBtn rounded-full hover:text-white text-xl">Register</button>
                            </div>
                        </form>
                        <p className="mt-8 text-center">Already Have An Account ?<Link to='/login'>
                            <span className="text-[#04a44f] cursor-pointer font-medium underline ml-2">Login</span></Link>
                        </p>
                        <div className="divider">continue with</div>
                        <div className="w-full">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;