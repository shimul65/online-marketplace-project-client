import loader from '../../assets/loader.svg'
import './Loader.css'

const Loader = () => {
    return (
        <div className='container mx-auto '>
            <div className='flex flex-col justify-center items-center my-[50%]'>
                <img className='w-24 logo react' src={loader} alt="" />
                <p className='text-3xl font-extrabold text-green-700 mt-6'>Jobi...</p>
            </div>
        </div>
    );
};

export default Loader;