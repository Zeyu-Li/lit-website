import React from 'react'


export const Skills: React.FC = React.memo(() => {

    return (
        <>
            <div className="skills white">
                <h2>Skills</h2>
                <h3>🌺 Frontend</h3>
                <p>JavaScript/<wbr />Typescript, HTML, CSS/<wbr />SCSS</p>
                <h3>💼 Backend</h3>
                <p>Python, Node.js, SQL, AWS, Firebase, GCP</p>
                <h3>✨ Other Languages</h3>
                <p>C++, C#, Java, Lua, LaTeX, Markdown, ShellScript</p>
                <h3>📚 Libraries/<wbr />Frameworks</h3>
                <p>React/<wbr/>React Native, Django, Flask, Express.js, Nest.js, Next.js, Electron.js</p>
                <h3>🎮 Game</h3>
                <p>Unity, Unreal, Godot</p>
                <h3>🌟 Other</h3>
                <p>Docker, Figma, Git/<wbr/>GitHub, Blender, Adobe Illustrator</p>
                <h3>📖 Learning</h3>
                <p id="lastItem">Golang, TensorFlow, Haskell, WordPress</p>
            </div>
        </>
    )
})
