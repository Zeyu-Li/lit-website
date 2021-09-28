import React from 'react'


export const Skills: React.FC = React.memo(() => {

    return (
        <>
            <div className="skills white">
                <h2>Skills</h2>
                <h3>🌺 Frontend</h3>
                <p>JavaScript/<wbr />Typescript, HTML, CSS, WebAssembly</p>
                <h3>💼 Backend</h3>
                <p>Python, JavaScript, SQL, AWS, Firebase, GCP</p>
                <h3>✨ Other Languages</h3>
                <p>C++, C#, Java, Lua, LaTeX, Markdown, ShellScript</p>
                <h3>📚 Libraries/<wbr />Frameworks</h3>
                <p>React/React Native, Django, Flask, Express.js, Nest.js, Electron.js</p>
                <h3>🎮 Game</h3>
                <p>Unity, Unreal</p>
                <h3>🌟 Other</h3>
                <p>Figma, Git/<wbr/>GitHub, Blender, Adobe Illustrator</p>
                <h3>📖 Learning</h3>
                <p id="lastItem">TensorFlow, Haskell</p>
            </div>
        </>
    )
})
