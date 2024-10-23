import React from 'react';

const About = () => {
    return (
        <div id="about" className="flex flex-col lg:flex-row items-center justify-between text-xl text-white p-10">
            <div className="lg:w-1/2 w-full lg:text-justify">
                <h2 className="font-black not-italic mb-4 text-4xl text-center">About Me</h2>
                <p className="my-4 text-center">This is the About section where you can learn more about me!</p>
                <p className="mb-4 text-center">Hi, I'm Warda Waseem, Future Cloud Applied Gen-AI Engineer. </p>
                <p className="my-4">
                    I’m learning new skills in full-stack development through the Governor Sindh IT Initiative, focusing on TypeScript and other web technologies. I already know HTML, CSS, Tailwind CSS, TypeScript, and JavaScript, and now I’m exploring Next.js and cloud technologies to get better at what I do. I’m excited to show my journey and share the projects I’ve worked on.
                </p>
                <p>
                    I was born and raised in Karachi, Pakistan, where I also went to school. I love watching movies and dramas in my free time and enjoy playing badminton. Right now, I’m studying Masters in Biomedical Engineering at NED University. As a student, I’m still gaining experience, but I’m learning every day and making memories along the way. I’m passionate about learning new technologies and always eager to improve my skills. I also enjoy helping others and treating people with respect. So far, I’ve learned how to use important tools like AutoCAD, MATLAB, Microsoft Office, and other software such as PROTEUS, Arduino, R-Studio, and MINITAB.
                </p>
                <p className="mt-4 text-center">That’s a little bit about me!</p>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center lg:justify-center">
                <img  
                    className="border-4 border-white lg:w-3/4 w-full"
                    src='./images/profile.jpg' 
                    alt="Warda Waseem"
                    
                />
            </div>
        </div>
    );
}

export default About;
