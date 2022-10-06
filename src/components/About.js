import React from 'react'

const About = () => {
  return (
      <div
          name="about"
          className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
              <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                      About
                  </p>
              </div>

              <p className="text-xl mt-20">
                  I come from a background of problem-solving and testing. The previous jobs that I have acquired before have given me the skill set and mindset to succeed in a problem-heavy environment.
                   From mechanical problem solving to IT help desk support, my skill set has a wide range. 
              </p>

              <br />

              <p className="text-xl">
                  Hello, I'm a full-stack developer who has graduated from the University of Pennsylvania LPS coding Bootcamp with a strive for learning more.
                   Web development is an excellent career field for me helping me strive to be a better problem solver. I strive for great design and fantastic functions of websites. 

              </p>
          </div>
      </div>
  )
}

export default About;