import React, { useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useIntersection } from "react-use";
import { gsap } from "gsap";

import { Typing } from "./Typing";

export const About: React.FC = React.memo(() => {
    const sectionRef = useRef(null);
    const header = useRef(null);
    const [active, setActive] = useState(false);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    });
    const showAnimation = () => {
        setActive(true);
        // animation (fade in)
        gsap.fromTo(
            header.current,
            {
                duration: 1,
                autoAlpha: 0,
                rotationX: 80,
                transformOrigin: "50% 50% -40px",
                ease: "power3.easeOut",
            },
            {
                autoAlpha: 1,
                rotationX: 0,
                ease: "power3.easeOut",
            }
        );
    };

    if (intersection && intersection.intersectionRatio > 0.5 && !active) showAnimation();

    return (
        <div id="about" className="block white">
            <div className="about" ref={sectionRef}>
                <h2 className="header1" ref={header}>
                    About Me
                </h2>
                <h3 className="singleText type">I can code {active ? <Typing /> : ""}</h3>
                <p>
                    Working at Zero RampUp as a <b>project manager</b>. Formerly {" "}
                    software intern at Intuit and <b>research assistant</b> at the University of Alberta.
                    <wbr /> If you want to add me on your team or just want to chat, click on{" "}
                    <HashLink to="/#contact">Contact</HashLink>
                </p>
            </div>
        </div>
    );
});
