import './Spin.css'
import { motion, useTime, useTransform } from "framer-motion";
import { BsEmojiSunglasses } from 'react-icons/bs';
const Spin = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 100], { clamp: false });

    return (
        <div className="example-container">
            <motion.div className='' style={{ rotate }} >
                <div className='flex justify-center items-center mt-5 text-5xl text-green-600'><BsEmojiSunglasses></BsEmojiSunglasses></div>
            </motion.div>
        </div>
    );
};

export default Spin;