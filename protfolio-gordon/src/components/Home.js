import React from 'react';
import HeroImage from '../assets/picofmeatseniorshowcase.jpg';
import { Link } from 'react-scroll';
import { BiUpArrowAlt } from 'react-icons/bi';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack developer.
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                      Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer.

                      Look out! We've got to find out which cell this princess of yours is in. Here it is...cell twenty-one-eight-seven. You go get her. I'll hold them here. Everything is under control. Situation normal.

                      The Force will be with you...always! Boy you said it, Chewie. Where did you dig up that old fossil? Ben is a great man. Yeah, great at getting us into trouble. I didn't hear you give any ideas. Well, anything would be better than just hanging around waiting for him to pick us up. Who do you think.  What is it? I'm afraid I'm not quite sure, sir.

                      Red Six. Can you see Red Five? There's a heavy fire zone on this side. Red Five, where are you? I can't shake him! I'm on him, Luke! Hold on! Blast it! Wedge where are you? Thanks, Wedge. Good shooting, Wedge! Red Leader. This is Gold Leader. We're starting out attack run. I copy, Gold Leader.

                      Well, not at making them interesting, anyways. Well, my little friend, you've got something jammed in here real good. Were you on a cruiser or.  Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question. What is that? Help me, Obi-Wan Kenobi.


                </p>
                <div>
                    <Link to="portfolio" smooth duratiion={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <BiUpArrowAlt size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
               <div>
                <img src={HeroImage} alt='GordonD' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
                </div> 

        </div>
    </div>
  );
};

export default Home