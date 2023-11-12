import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const useAOSInit = () => {
    useEffect(() => {
        AOS.init({ easing:"linear", duration:"1200"});

    // Optionally, you can configure additional AOS settings here, such as duration, easing, etc.
    // For example:
    // AOS.init({ duration: 1000, easing: 'ease-in-out' });

    return () => {
        // Clean up AOS when the component unmounts
        AOS.refresh();
    };
}, []); //
};

export default useAOSInit;