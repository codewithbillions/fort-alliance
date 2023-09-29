import {useState, useEffect} from "react";

import {
   Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from "react-icons/md";
import data from './../utils/accordion'
import { pic1, pic2, pic3 } from "../assets";

const images = [pic1, pic2, pic3 ];


const Value = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, []);

     return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src={images[currentIndex]} alt="image"/>
                    </div>
                </div>
            <div className="flexColStart v-right">
                <span className="orangeText">Our Value</span>
                <span className="secondaryText">At Fort Alliance, we don't just construct buildings; we craft dreams, turning your visions into tangible, breathtaking realities.
                <br/>  As a trusted name in the industry, we take pride in our commitment to excellence, innovation, and unparalleled craftsmanship.</span>
                <Accordion className="accordion" allowMultipleExpand={false} preExpanded={[0]}>
                    {
                        data.map((item, i) =>{
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="accordionButton flexCenter">
                                            <AccordionItemState>
                                            {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flexcenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/></div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>

                                </AccordionItem>
                            );
                        })
                    }
                
                </Accordion>
            </div>
            </div>

        </section>
    )
}

export default Value;