import { useEffect } from "react";
import { useState } from "react";
import { BiVerticalTop } from 'react-icons/bi';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add scroll event listener to show/hide the button
        const handleScroll = () => {
            if (window.scrollY > 25) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const easeInOutQuart = t => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    const easeInOutQuart = t => t < 0.5 ? 8 * t ** 4 : 1 - 2 ** (-8 * t);

    const scrollToTop = () => {

        const duration = 1000;
        const start = window.scrollY;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        const animateScroll = () => {
            const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutQuart(progress);

            const newY = start - start * easedProgress;

            if (window.scrollY !== 0 && progress < 1) {
                window.scrollTo(0, newY);
                requestAnimationFrame(animateScroll);
            }
        }

        animateScroll();
    };

    return (
        <div className="fixed right-0 bottom-3 z-10 rounded-full hover:bg-[#F8FDE4] px-2 pt-4">
            {isVisible && (
                <button
                    className=" rounded-full text-[#04a44f] hover:scale-1105 hover:rotate-[360deg] ease-in-out duration-500 text-4xl flex hover:bg-[#F8FDE4]" id="scrollToTopBtn"
                    style={{ padding: '0px' }}
                    onClick={scrollToTop}>
                    <BiVerticalTop></BiVerticalTop>
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;