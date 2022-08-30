import React from 'react';
import weatherapp from '../assets/weather_cap.PNG';
import weebhaven from '../assets/weebhaven.PNG';
import passwordgen from '../assets/pwgenerator.PNG';
import dayplanner from '../assets/plannerfix.PNG';
import resumebuilder from '../assets/resumebuilder.PNG';
import codequiz from '../assets/codequiz2.PNG';


const Portfolio = () => {
    // insert input handlers for code and demo buttons including links. 

    const handleClick = (event, key) => {
        console.log(event.target);
        console.log('key index: ', key);
    };

    const portfolios = [
        {
            id: 1,
            src: weatherapp,
            link: "https://gordyd97.github.io/Weather-app/"
        },
        {
            id: 2,
            src: weebhaven,
            link: "/"
        },
        {
            id: 3,
            src: passwordgen,
            link: "/"
        },
        {
            id: 4,
            src: dayplanner,
            link: "/"
        },
        {
            id: 5,
            src: resumebuilder,
            link: "/"
        },
        {
            id: 6,
            src: codequiz,
            link: "/"
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
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
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