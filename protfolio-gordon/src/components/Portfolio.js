import React from 'react';
import weatherapp from '../assets/weather_cap.PNG';
import weebhaven from '../assets/weebhaven.PNG';
import passwordgen from '../assets/pwgenerator.PNG';
import dayplanner from '../assets/plannerfix.PNG';
import resumebuilder from '../assets/resumebuilder.PNG';
import codequiz from '../assets/codequiz2.PNG';
// import Link from "portfolios";


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: weatherapp,
            link: "https://gordyd97.github.io/Weather-app/",
            repo: "https://github.com/GordyD97/Weather-app"
        },
        {
            id: 2,
            src: weebhaven,
            link: "https://gordyd97.github.io/ecommerece-sales-locator/",
            repo: "https://github.com/GordyD97/ecommerece-sales-locator"
        },
        {
            id: 3,
            src: passwordgen,
            link: "https://gordyd97.github.io/Password-generator/",
            repo: "https://github.com/GordyD97/Password-generator"
        },
        {
            id: 4,
            src: dayplanner,
            link: "https://gordyd97.github.io/Work-Day-Planner/",
            repo: "https://github.com/GordyD97/Work-Day-Planner"
        },
        {
            id: 5,
            src: resumebuilder,
            link: "https://infinite-river-22975.herokuapp.com/signup",
            repo: "https://github.com/stefcarter/resume-final"
        },
        {
            id: 6,
            src: codequiz,
            link: "https://gordyd97.github.io/Code-Quiz/",
            repo: "https://github.com/GordyD97/Code-Quiz"
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">View my projects !</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, link, repo }) => (
                        
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                                    Demo
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                                    Github
                                </button>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;