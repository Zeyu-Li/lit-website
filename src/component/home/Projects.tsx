import React from "react";
import { Parallax } from "react-parallax";
import { VscGithub } from "react-icons/vsc";
import { MdWeb } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";

interface Props {
    title: string;
    description: any;
    github?: string;
    githubTitle?: string;
    demo?: string;
    demoTitle?: string;
    image?: string;
    imageAlt?: string;
    imageStrength?: number;
    isGame?: boolean;
}

const Project: React.FC<Props> = ({
    title,
    github,
    githubTitle,
    demo,
    demoTitle,
    image,
    imageAlt,
    description,
    imageStrength = 300,
    isGame = false,
}) => {
    return (
        <div className="singleProject">
            <h4>{title}</h4>
            {image ? (
                <Parallax bgImage={image} bgImageAlt={imageAlt} strength={imageStrength} style={{ width: "70vw" }}>
                    <div style={{ height: "44vw" }}></div>
                </Parallax>
            ) : null}
            {description ?? null}
            {github ? (
                <>
                    <a href={github} title={githubTitle} rel="noreferrer" target="_blank">
                        <span className="contactIcons">
                            <VscGithub size={32} color="2EA2F8" />
                        </span>
                        Source code
                    </a>
                    <br />
                </>
            ) : null}

            {demo ? (
                <a href={demo} title={demoTitle} rel="noreferrer" target="_blank">
                    <span className="contactIcons">
                        {isGame ? <FaGamepad size={32} color="2EA2F8" /> : <MdWeb size={32} color="2EA2F8" />}
                    </span>
                    Demo
                </a>
            ) : null}
        </div>
    );
};

export const Projects: React.FC = React.memo(() => {
    const repoCount = 150;

    return (
        <>
            <div id="projects" className="projects">
                <h2>Projects</h2>
                <Project
                    title="Chatter"
                    description={
                        <p>
                            A realtime chat website
                            <br />
                            {">"} Using React, Firebase, JavaScript
                        </p>
                    }
                    image="chatter.png"
                    imageAlt="chatter screenshot"
                    github="https://github.com/Zeyu-Li/chatter"
                    githubTitle="Chatter repo link (GitHub)"
                    demo="https://chatter-zeyu-li.vercel.app/"
                    demoTitle="Chatter Project Demo"
                />
                <Project
                    title="Lua Runner"
                    description={
                        <p>
                            A NPM Typescript module that runs Lua with over <b>2,000 downloads</b>
                            <br />
                            {">"} Using TypeScript, Webassembly
                        </p>
                    }
                    github="https://github.com/Zeyu-Li/lua-runner"
                    githubTitle="Lua Runner source code"
                    demo="https://www.npmjs.com/package/lua-runner"
                    demoTitle="Lua Runner NPM page"
                />
                <Project
                    title="Django Ecommerce"
                    description={
                        <p>
                            An ecommerce website build on Django and Bootstrap with login and shopping cart (connected
                            to Stripe)
                            <br />
                            {">"} Using Python (Django), Stripe, JavaScript, CSS, HTML, Bootstrap
                        </p>
                    }
                    image="django.png"
                    imageAlt="django website screenshots"
                    github="https://github.com/Zeyu-Li/django_ecommerce_app"
                    githubTitle="Django source code on GitHub"
                />
                <Project
                    title="Attacked from Above"
                    description={
                        <p>
                            An atmospheric isometric game with aliens. Play demo now online at the link below.
                            <br />
                            {">"} Using C#, Blender, Adobe Illustrator, Unity
                        </p>
                    }
                    image="game.png"
                    imageAlt="game screenshot"
                    imageStrength={150}
                    github="https://github.com/Zeyu-Li/innovator-jam-2021"
                    githubTitle="Game source code"
                    demo="https://andrewli.itch.io/attacked-from-above"
                    demoTitle="Game demo"
                    isGame
                />
                <br />
                <div className="endOfProjects">
                    <p>
                        Over {repoCount} projects/repos on{" "}
                        <a href="https://github.com/Zeyu-Li" rel="noreferrer" target="_blank">
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
});
