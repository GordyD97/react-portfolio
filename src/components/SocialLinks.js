import React from 'react';
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// // import { BsFillPersonLinesFill } from "react-icons/bs";
// import { MdOutlineContactPage } from 'react-icons/md';
// import { BsTwitter } from 'react-icons/bs';

export const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn 
                    <i class="fa-brands fa-linkedin" size={30}></i>
                {/* <FaLinkedin size={30} /> */}
                </>
            ),
            href: "https://www.linkedin.com/in/gordon-draine-iv-08a058142/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub 
                    <i class="fa-brands fa-github" size={30}></i>
                    {/* <FaGithub size={30} /> */}
                </>
            ),
            href: "https://github.com/GordyD97",
        },
        {
            id: 3,
            child: (
                <>
                Email 
                    <i class="fa-solid fa-envelope" size={30}></i>
                {/* <HiOutlineMail size={30} /> */}
                </>
            ),
            href: "mailto:gordon.draine97@yahoo.com"
        },
        {
            id: 4,
            child: (
                <>
                
                    Twitter 
                    <i class="fa-brands fa-twitter" size={30}></i>
                    {/* <BsTwitter size={30} /> */}
                </>
            ),
            // enter twitter link
            href: "https://twitter.com/Gordy_40",  
            download: true,
        },
        {
            id: 5,
            child: (
                <>
                Resume 
                    <i class="fa-solid fa-file-user" size={30}></i>
                {/* <MdOutlineContactPage size={30} /> */}
                </>
            ),
            href: "../Gordon_Draine_Resume_2.PDF",
            style: "rounded-br-md",
            download: true,
        },
    ];

  return (

      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>
              {links.map(({ id, child, href, style, download }) => (
                  <li
                      key={id}
                      className={
                          "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                          " " +
                          style
                      }
                  >
                      <a
                          href={href}
                          className="flex justify-between items-center w-full text-white"
                          download={download}
                          target="_blank"
                          rel="noreferrer"
                      >
                          {child}
                      </a>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default SocialLinks;
