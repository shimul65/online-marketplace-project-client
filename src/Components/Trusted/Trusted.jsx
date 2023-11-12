import './slick.css'
import './slick-theme.css'
import Slider from 'react-slick';
import company1 from '../../assets/media_03.png'
import company2 from '../../assets/media_04.png'
import company3 from '../../assets/media_05.png'
import company4 from '../../assets/media_06.png'
import company5 from '../../assets/media_07.png'
import company6 from '../../assets/media_08.png'

const Trusted = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className=" mx-2 overflow-hidden">
            <div className=''>
                <p data-aos="zoom-in" className='text-center pt-5'>Trusted by the world’s best</p>
            </div>
            <Slider {...settings}>
                <div className=" p-10 rounded-3xl">
                    <div className="flex flex-col md:gap-3 justify-center items-center ">
                        <img className="w-[140px] h-16 " src={company1} alt="" />
                    </div>
                </div>
                <div className="p-10 rounded-3xl">
                    <div className="flex flex-col gap-3 justify-center items-center ">
                        <img className="  w-[140px] h-16" src={company2} alt="" />
                    </div>
                </div>
                <div className="p-10 rounded-3xl">
                    <div className="flex flex-col gap-3 justify-center items-center ">
                        <img className=" w-[140px] h-16" src={company3} alt="" />

                    </div>
                </div>
                <div className="p-10 rounded-3xl">

                    <div className="flex flex-col gap-3 justify-center items-center ">
                        <img className=" w-[140px] h-16" src={company4} alt="" />
                    </div>
                </div>
                <div className="p-10 rounded-3xl">

                    <div className="flex flex-col gap-3 justify-center items-center ">
                        <img className=" w-[166px] h-16" src={company5} alt="" />
                    </div>
                </div>
                <div className="p-10 rounded-3xl">

                    <div className="flex flex-col gap-3 justify-center items-center">
                        <img className=" w-[166px] h-16" src={company6} alt="" />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Trusted;