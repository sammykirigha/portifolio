import React from "react";
import Image from "next/image";
import image from "../public/image.png";
import dashboard from "../public/assets/lottery-app.png";
import profile from "../public/assets/profile.jpg";
import logo from "../public/logo.png";
import { MdLocationOn, MdCallMade } from "react-icons/md";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { langs } from "../utils/language";
import { FaRegLightbulb } from "react-icons/fa";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="">
      {/* introduction */}
      <div className=" grid grid-cols-1 md:grid-cols-2  w-full px-5 lg:px-20 2xl:px-60 py-[30px] bg-[#efe0ca]">
        <div className="w-[100%] pt-5">
          <div className="flex items-center mb-5 text-white">
            <span>
              <MdLocationOn className="text-4xl text-[#001233] " />
            </span>
            <span className="font-[700] text-[#001233] text-4xl">
              Nyeri, Kenya
            </span>
          </div>
          <div className="px-3">
            <h2 className="text-[#001233]  font-bold text-3xl sm:text-4xl mb-3">
              Samuel Kirigha.
            </h2>
            <span className="text-[#001233]  font-bold text-xl sm:text-2xl">
              Junior Software Developer
            </span>
            <p className="text-[#001233] font-[500]  text-[1.2rem] mt-6 leading-[1.7rem] pr-0 md:pr-5">
              I became a software developer because I knew that development was
              a road to the future that I wanted to be a part of. I'm given
              challenges every day that I thrive on understanding and solving,
              and I've tackled projects for e-commerce, booking systems, etc.
              I'm a perceptive, dedicated dreamer, and I enjoy using JavaScript
              for its ease of use and verstatility. I love listening to music,
              watching movies, and playing videogames, and watching soccer a big
              fun of manchester united.
            </p>
            <div className="flex gap-4 mt-10">
              <button className="bg-[#001233] text-[#efe0ca] py-[0.3rem] px-[0.5rem] h-10 w-36 flex flex-row items-center  rounded-lg hover:bg-[#efe0ca] hover:text-[#001233] hover:border border-[#001233] text-xl font-semibold">
                <BsLinkedin className=" h-6 w-8 mr-2" />
                <span>LinkedIn</span>
              </button>

              <button className="bg-[#001233] text-[#efe0ca] py-[0.6rem] px-[0.5rem] h-10 w-36 flex flex-row items-center  rounded-lg hover:bg-[#efe0ca] hover:text-[#001233] hover:border border-[#001233] text-xl font-semibold">
                <BsGithub className=" h-6 w-8 mr-2" />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
        <div className="h-80 md:h-auto lg:h-80 mt-10 md:mt-36 lg:mb-16 sm:flex sm:justify-center  ">
          <Image
            src={image}
            alt="alt"
            className="h-[100%] md:w-[100%] lg:w-[80%]  fill-indigo-700 rounded-lg bg-indigo-600 shadow-2xl"
          />
        </div>
      </div>

      {/* section two competence */}
      <div className="bg-white pt-16 grid grid-cols-1 sm:grid-cols-2 lg:flex-row pb-10 items-center w-full px-5 lg:px-20 2xl:px-60">
        <div className="pr-3 ">
          <h2 className="text-[2.1rem] text-[#001233] leading-[2.3rem] font-[500] mb-10">
            Competence and know how
          </h2>
          <div className="flex flex-col gap-y-4">
            <span className="text-slate-600 text-[1.2rem] sm:text-[1.1rem] font-[400]">
              <strong className="text-[#001233] ">+3yrs</strong> I design
              beautiful user interfaces by myself using specific tactics
              explained from a developers point-of-view.
            </span>
            <span className="text-slate-600 text-[1.2rem] sm:text-[1.1rem] font-[400]">
              {" "}
              <strong className="text-[#001233]">+3yrs</strong> Design and build
              web applications using ReactJs, Typescript, NodeJs (MERN), etc.
            </span>
            <span className="text-slate-600 text-[1.2rem] sm:text-[1.1rem] font-[400]">
              <strong className="text-[#001233]">+2yrs</strong> professional
              experience working with React, GraphQl, NodeJs, Typescript, and
              MSSQL, and Postgres.
            </span>
          </div>
          <p className="text-slate-600 text-[1.2rem] font-[400] mt-5 sm:text-[1.1rem]">
            Currently am working on the project using React, C#, and Rainfocus
            platform to events, meeting, and confrences virtual platforms.
          </p>
          <button className="mt-3 bg-[#001233] text-[#efe0ca] h-10 rounded-full px-4 font-[600] mb-5 hover:bg-[#efe0ca]  hover:text-[#001233] hover:font-[700]  ">
            View Current
          </button>
        </div>

        <div className="bg-white py-2  rounded-lg shadow shadow-2x mb-10">
          <div className="bg-[#efe0ca] border border-[#001233] border-[1px] mx-5 rounded-lg flex flex-row h-[4rem] px-5 items-center justify-between cursor-pointer">
            <BsWhatsapp className="text-[#001233] text-3xl mt-1" />
            <span className="text-[#001233] text-xl sm:text-2xl md:text-3xl font-[600]">
              0707256013
            </span>
            <MdCallMade className="text-[#001233] text-3xl" />
          </div>
          <p className="mx-5 mt-5 text-[1.2rem] sm:text-[1.1rem] text-[#001233]">
            Let us connect through WhatsApp and make arrangement for farther
            communication about any role or project you have.
          </p>
          <div className="mx-5 px-3 mt-24 bg-white border border-gray-100 shadow-inner ">
            <h2 className="text-[1.5rem] leading-3 font-[700] mt-5">
              Schedule a meeting
            </h2>
            <p className="my-2 text-[#001233] pt-2 text-[1.2rem] sm:text-[1.1rem]">
              Choose the ideal moment and meet with the team to put your ideas
              in action
            </p>
            <button className="mt-10 bg-[#001233] text-[#efe0ca] h-auto rounded-full  px-4 py-2 font-[600] mb-5 hover:bg-[#efe0ca]  hover:text-[#001233] hover:font-[700]   ">
              CLICK TO COORDINATE A MEETING
            </button>
          </div>
        </div>
      </div>

      {/* section three */}
      <div className="h-auto bg-bg-image">
        <div className=" bg-[#001233]/95 py-10  px-5 lg:px-20 2xl:px-60">
          <div className="flex flex-col items-center justify-center pt-10">
            <h1 className="text-[#efe0ca] uppercase text-[1.7rem] tracking-[0.17em] font-[700]">
              Tools
            </h1>
            <h3 className="pt-5 text-[#efe0ca] text-[1.4rem] tracking-[0.15em] text-center leading-[2.3rem]">
              Programming Languages and tools
            </h3>
          </div>
          <div className="mt-10 lg:mt-16 ">
            <ul className="flex flex-wrap  max-w-7xl mx-auto my-10 gap-10 items-center justify-center">
              {langs?.map((lang) => (
                <li
                  key={lang.id}
                  className=" flex flex-col w-[120px] transition-all duration-150 items-center rounded-lg px-2 hover:bg-[#efe0ca] group cursor-pointer"
                >
                  <Image
                    src={lang.icon}
                    width="100"
                    height="100"
                    alt="aws logo"
                    className="h-[70px] w-auto mt-2 opacity-60 group-hover:opacity-60 rounded-lg"
                  />
                  <span className="py-3 text-[#efe0ca] text-[1.1rem] group-hover:text-[#001233] font-[500]">
                    {lang.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* section four */}
      <div className="h-auto bg-gray-200 px-5 lg:px-20 2xl:px-60 py-10">
        <div className="flex items-center justify-center">
          <h2 className="text-[#001233] text-[1.7rem] font-[700]">
            The Services I Offer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-row xl:grid-cols-3 gap-3 ">
          <div className="mt-10 bg-white pb-10 rounded-lg group hover:bg-[#efe0ca]">
            <FaRegLightbulb className="h-12 w-[100px] mt-5 !text-[#001233] top-0" />
            <div className="px-8 mt-6">
              <p className="text-[#001233] text-[1.3rem] font-[600] group-hover:text-text-[#001233]">
                Web Development
              </p>
              <p className="text-text-[#001233] mt-3 group-hover:text-text-[#001233]">
                Converting your ideas into a website. Design Web application
                that are responsive to different devices and scalable.
              </p>
            </div>
            <div className="w-full mt-10 px-8">
              <button className="font-[500] rounded-lg bg-[#ff595a] w-[100%] text-white h-[40px] group-hover:bg-[#ff595a] group-hover:text-[#001233]">
                Find out
              </button>
            </div>
          </div>
          <div className="mt-10 bg-white pb-10 rounded-lg group hover:bg-[#e71356]">
            <Image src={logo} alt="" className="h-20 w-24 p-1" />
            <div className="px-8 mt-6">
              <p className="text-black text-[1.3rem] font-[600] group-hover:text-white">
                Mobile Application Development
              </p>
              <p className="text-slate-80 group-hover:text-white">
                Design mobile application specifically for use on mobile devices
                such as smartphones, tables, etc
              </p>
            </div>
            <div className="w-full mt-10 px-8">
              <button className="font-[500] rounded-lg bg-[#e71356] w-[100%] text-white h-[40px] group-hover:bg-white group-hover:text-[#e71356]">
                Find out
              </button>
            </div>
          </div>
          <div className="mt-10 bg-white pb-10 rounded-lg group hover:bg-[#e71356]">
            <Image src={logo} alt="" className="h-20 w-24 p-1" />
            <div className="px-8 mt-6">
              <p className="text-black text-[1.3rem] font-[600] group-hover:text-white">
                Mobile Application Development
              </p>
              <p className="text-slate-80 group-hover:text-white">
                Design mobile application specifically for use on moboli devices
                such as smartphones, tables, etc
              </p>
            </div>
            <div className="w-full mt-10 px-8">
              <button className="font-[500] rounded-lg bg-[#e71356] w-[100%] text-white h-[40px] group-hover:bg-white group-hover:text-[#e71356]">
                Find out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section five */}
      <div className="h-auto bg-white mt-10 px-5 lg:px-20 2xl:px-60 pt-10">
        <div className="flex items-center justify=center flex-col">
          <h3 className="text-slate-700 text-[2rem] ">Featured projects</h3>
          <h1 className="text-slate-900 font-[600] text-[2.2rem]">
            What I Have Worked On
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-row xl:grid-cols-3 gap-3 ">
          <div className="relative min-h-[225px] group bg-opacity-40 hover:bg-opacity-100 justify-center rounded-xl duration-150 ease-linear p-4 flex flex-col items-center">
            <Image
              src={dashboard}
              alt=""
              className=" rounded-lg boarder h-auto md:52 w-full"
            />
            <h4 className="mt-4 self-start">
              A dashboard for both admin and the normal user.
            </h4>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-sm flex items-center gap-1.5 bg-opacity-20 px-2 underline py-1 mt-2 text-accent self-start rounded-lg"
            >
              see the app
            </a>
          </div>

          <div className="relative min-h-[225px] group bg-opacity-40 hover:bg-opacity-100 justify-center rounded-xl duration-150 ease-linear p-4 flex flex-col items-center">
            <Image
              src={dashboard}
              alt=""
              className=" rounded-lg boarder h-auto md:52 w-full"
            />
            <h4 className="mt-4 self-start">
              A dashboard for both admin and the normal user.
            </h4>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-sm flex items-center gap-1.5 bg-opacity-20 px-2 underline py-1 mt-2 text-accent self-start rounded-lg"
            >
              see the app
            </a>
          </div>

          <div className="relative min-h-[225px] group bg-opacity-40 hover:bg-opacity-100 justify-center rounded-xl duration-150 ease-linear p-4 flex flex-col items-center">
            <Image
              src={dashboard}
              alt=""
              className=" rounded-lg boarder h-auto md:52 w-full"
            />
            <h4 className="mt-4 self-start">
              A dashboard for both admin and the normal user.
            </h4>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-sm flex items-center gap-1.5 bg-opacity-20 px-2 underline py-1 mt-2 text-accent self-start rounded-lg"
            >
              see the app
            </a>
          </div>

          <div className="relative min-h-[225px] group bg-opacity-40 hover:bg-opacity-100 justify-center rounded-xl duration-150 ease-linear p-4 flex flex-col items-center">
            <Image
              src={dashboard}
              alt=""
              className=" rounded-lg boarder h-auto md:52 w-full"
            />
            <h4 className="mt-4 self-start">
              A dashboard for both admin and the normal user.
            </h4>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-sm flex items-center gap-1.5 bg-opacity-20 px-2 underline py-1 mt-2 text-accent self-start rounded-lg"
            >
              see the app
            </a>
          </div>
        </div>
      </div>

      {/* section six */}
      <div className="h-auto bg-gray-200 mt-10 px-5 lg:px-20 2xl:px-60 py-10 flex flex-col items-center justify-center">
        <h1 className="text-slate-900 text-[2.7rem] font-[700]">About Me</h1>
        <div className="mt-5">
          <Image
            src={profile}
            alt="profile"
            width="250"
            height="250"
            className="rounded-full"
          />
        </div>
        <div className="mt-5 flex flex-col items-center">
          <p className="flex text-center">
            Skills/Interests: JavaScript, React, TypeScript, Next, Express,
            Node, Redux CSS, HTML, Git, GitLab, SQL, PostgreSQL, MongoDB, Ms
            SQL, Docker among others
          </p>
          <div>
            <button>Contact Me Via Email</button>
            <button>Download My CV</button>
          </div>
        </div>
      </div>

      {/* section seven */}
      <div className="h-auto bg-white mt-10 px-5 lg:px-20 2xl:px-60 pt-10 flex items-center justify-center">
        <div className="bg-[#e71356] flex flex-col items-center justify-center h-72 w-[750px] rounded-lg">
          <h1 className="text-white text-[2.5rem] font-[700] mt-8">
            We can Work Together
          </h1>
          <p className="text-[1.5rem] mt-10">
            Want to get your project done?. Ready to deliver your expectation
          </p>
          <button className="mt-10 bg-gray-200 py-2 px-5 rounded-full hover:tracking-widest text-lg hover:bg-opacity-90 transition-all duration-150 ease-linear text-[#e71356] ">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
