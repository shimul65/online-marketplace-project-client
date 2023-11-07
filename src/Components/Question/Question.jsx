import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const Icon = ({id, open}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#04a44f"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};


const Question = () => {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="my-20">

            <div className=" pr-20">
                <div className="text-left mb-16">
                    <h1 className="text-6xl font-bold">Questions & Answers</h1>
                </div>
                <Accordion className="mb-4" open={open === 1} icon={<Icon id={1} open={open} />} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(1)}>How does the free trial work?</AccordionHeader>
                    <AccordionBody>
                        Enjoy the benefits of our platform without any obligations. You won&#39;t be billed during the free trial period, and your trial will not automatically transition into a paid subscription.
                    </AccordionBody>
                </Accordion>
                <Accordion className="mb-4" open={open === 2} icon={<Icon id={2} open={open} />} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        How do you find different criteria in your process?
                    </AccordionHeader>
                    <AccordionBody>
                        In our process, we identify various criteria through a comprehensive analysis and evaluation. Our approach involves considering multiple factors, which are essential in making informed decisions and guiding our actions. This process includes careful examination of data, feedback, research, and a deep understanding of the context in which we operate.
                    </AccordionBody>
                </Accordion>
                <Accordion className="mb-4" open={open === 3} icon={<Icon id={3} open={open} />} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        What do you look for in a founding team?
                    </AccordionHeader>
                    <AccordionBody>
                        A well-rounded team with diverse skills, such as technical, marketing, financial, and industry-specific expertise, is crucial for covering all aspects of the business.A willingness to seek advice, learn from mistakes, and adapt is essential for growth.
                    </AccordionBody>
                </Accordion>
                <Accordion className="mb-4" open={open === 4} icon={<Icon id={4} open={open} />} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        Do you recommend Pay as you go or Pre pay?
                    </AccordionHeader>
                    <AccordionBody>
                        The choice between Pay as You Go and Prepay depends on your individual financial circumstances and usage patterns. It&#39;s essential to assess your budget and how you plan to use the service to determine which payment method aligns better with your needs.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                        What do I get for $0 with my plan?
                    </AccordionHeader>
                    <AccordionBody>
                        With your plan at $0, you get access to our basic features at no cost.
                    </AccordionBody>
                </Accordion>
            </div>

        </div>
    );
};

export default Question;