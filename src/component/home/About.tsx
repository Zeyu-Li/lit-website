import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";

import { Typing } from "./Typing";

export const About: React.FC = React.memo(() => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const header = useRef<HTMLHeadingElement>(null);
    const [active, setActive] = useState(false);
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

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || active) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio <= 0.5) return;
                observer.disconnect();
                showAnimation();
            },
            { threshold: 0.5 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, [active]);

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
