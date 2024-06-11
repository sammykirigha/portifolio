import React from "react";
import Image from "next/image";
import image from "../public/image.png";
import dashboard from "../public/assets/lottery-app.png";
import profile from "../public/assets/profile.jpg";
import logo from "../public/logo.png";
import comp from "../public/assets/computer2.jpg";
import comp2 from "../public/assets/computer-image-2.jpg";
import { MdLocationOn, MdCallMade } from "react-icons/md";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { BiUpload } from "react-icons/bi";
import { langs } from "../utils/language";
import { FaRegLightbulb, FaDownload } from "react-icons/fa";

type Props = {};

const HomePage = (props: Props) => {
  const onDownloadCv = () => {
    fetch("/myResume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "myResume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="">
      {/* introduction */}
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  w-full px-5 lg:px-20 2xl:px-60 py-[30px] bg-[#efe0ca]">
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
              Mid-Level Software Engineer
            </span>
            <p className="text-[#001233] font-[500]  text-[1.2rem] mt-6 leading-[1.7rem] pr-0 md:pr-5">
              I became a software engineer because I knew that development was a
              road to the future that I wanted to be a part of. I am given
              challenges every day that I thrive on understanding and solving,
              and I have tackled projects for e-commerce, booking systems, etc.
              I am a perceptive, dedicated dreamer, and I enjoy using JavaScript
              for its ease of use and verstatility. I love listening to music,
              watching movies, and playing videogames, and watching soccer a big
              fun of manchester united.
            </p>
            <div className="flex gap-4 mt-10">
              <button className="bg-[#001233] text-[#efe0ca] py-[0.3rem] px-[0.5rem] h-10 w-36 flex flex-row items-center  rounded-lg hover:bg-[#efe0ca] hover:text-[#001233] hover:border border-[#001233] text-xl font-semibold">
                <BsLinkedin className=" h-6 w-8 mr-2" />
                <a
                  href="https://www.linkedin.com/in/samuel-kirigha-2b25531a6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </button>

              <button className="bg-[#001233] text-[#efe0ca] py-[0.6rem] px-[0.5rem] h-10 w-36 flex flex-row items-center  rounded-lg hover:bg-[#efe0ca] hover:text-[#001233] hover:border border-[#001233] text-xl font-semibold">
                <BsGithub className=" h-6 w-8 mr-2" />
                <a
                  href="https://github.com/sammykirigha"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="h-80 md:h-auto mt-10 lg:mt-36 lg:mb-16 sm:flex sm:justify-center  ">
          <Image
            src={image}
            alt="alt"
            className="h-[100%] md:w-[100%] lg:w-[80%]  fill-indigo-700 rounded-lg bg-indigo-600 shadow-2xl"
          />
        </div>
      </div>

      {/* section two competence */}
      <div className="bg-[#001233]/95 py-10  px-5 lg:px-20 2xl:px-60">
        <div className="pr-3 ">
          <div className="flex flex-col items-center justify-center pt-10">
            <h1 className="text-[#efe0ca] uppercase text-[1.7rem] tracking-[0.17em] font-[700]">
              My Expertise
            </h1>
            <div className="flex mt-5 gap-4">
              <div className="border border-[#efe0ca] h- max-h-[250px] w-full max-w-md p-3 rounded-md">
                <div className=" flex gap-5 p-4">
                  <Image
                    src={comp}
                    width="100"
                    height="100"
                    alt="aws comp"
                    className="h-[70px] w-auto opacity-60 group-hover:opacity-60 rounded-lg"
                  />
                  <div className=" flex flex-col">
                    <span className=" text-[#efe0ca] leading-[20px] text-[25px] font-[900]">
                      Software
                    </span>
                    <span className=" text-[#efe0ca] text-[25px] font-[900]">
                      Development
                    </span>
                  </div>
                </div>
                <div className=" px-10 relative">
                  <div className="before:content-['<h3>'] text-[#efe0ca]/75"></div>
                  <p className="text-[#efe0ca] text-[18px] pl-7">
                    Experienced in both functional and OOP: ASP.NET, C#
                    JavaScript, TypeScript.
                  </p>
                  <div className="after:content-['<h3>'] text-[#efe0ca]/75"></div>
                  <div className=" absolute left-14 top-4 after:content-[''] bg-[#efe0ca]/95 my-2 h-[65%] w-[1.5px]"></div>

                </div>
              </div>
              <div className="border border-[#efe0ca] h-52 h-54 w-60"></div>
              <div className="border border-[#efe0ca] h-52 h-54 w-60"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-1 w-1 bg-[#efe0ca]"></div>

      {/* section three */}
      <div className="h-auto bg-bg-image">
        <div className="py-10  px-5 lg:px-20 2xl:px-60">
          <div className="flex flex-col items-center justify-center pt-10">
            <h1 className="text-[#001233]/95 uppercase text-[1.7rem] tracking-[0.17em] font-[700]">
              Tools
            </h1>
            <h3 className="pt-5 text-[#001233]/95text-[1.4rem] tracking-[0.15em] text-center leading-[2.3rem]">
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
                  <span className="py-3 text-[#001233]/95 text-[1.1rem] group-hover:text-[#001233] font-[500]">
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
          <div className="mt-10 bg-white pb-10 rounded-lg group hover:bg-[#efe0ca]">
            <FaRegLightbulb className="h-12 w-[100px] mt-5 !text-[#001233] top-0" />
            <div className="px-8 mt-6">
              <p className="text-[#001233] text-[1.3rem] font-[600] group-hover:text-text-[#001233]">
                Mobile Application Development
              </p>
              <p className="text-text-[#001233] mt-3 group-hover:text-text-[#001233]">
                Design mobile application specifically for use on mobile devices
                such as smartphones, tables, etc
              </p>
            </div>
            <div className="w-full mt-10 px-8">
              <button className="font-[500] rounded-lg bg-[#ff595a] w-[100%] text-white h-[40px] group-hover:bg-[#ff595a] group-hover:text-[#001233]">
                Find out
              </button>
            </div>
          </div>
          <div className="mt-10 bg-white pb-10 rounded-lg group hover:bg-[#efe0ca]">
            <FaRegLightbulb className="h-12 w-[100px] mt-5 !text-[#001233] top-0" />
            <div className="px-8 mt-6">
              <p className="text-[#001233] text-[1.3rem] font-[600] group-hover:text-text-[#001233]">
                Mobile Application Development
              </p>
              <p className="text-text-[#001233] mt-3 group-hover:text-text-[#001233]">
                Design mobile application specifically for use on mobile devices
                such as smartphones, tables, etc
              </p>
            </div>
            <div className="w-full mt-10 px-8">
              <button className="font-[500] rounded-lg bg-[#ff595a] w-[100%] text-white h-[40px] group-hover:bg-[#ff595a] group-hover:text-[#001233]">
                Find out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section five */}
      <div className="h-auto bg-white mt-10 px-5 lg:px-20 2xl:px-60 pt-10">
        <div className="flex items-center justify=center flex-col">
          <h3 className="text-[#001233] text-[2rem] ">Featured projects</h3>
          <h1 className="text-[#001233] font-[600] text-[2.2rem]">
            What I Have Worked On
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:flex-row xl:grid-cols-3 gap-3 ">
          <div className="relative min-h-[225px] group bg-opacity-40 hover:bg-opacity-100 justify-center rounded-xl duration-150 ease-linear p-4 flex flex-col items-center">
            <Image
              src={dashboard}
              alt=""
              className=" rounded-lg boarder h-auto md:52 w-full"
            />
            <h4 className="mt-4 self-start text-[#001233]">
              A dashboard for both admin and the normal user.
            </h4>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
              className="bg-[#001233]/70 px-2 py-[3.5px] text-[#efe0ca] text-sm flex items-center gap-1.5 px-2 underline mt-2 text-accent self-start rounded-lg"
            >
              <BiUpload className=" h-4 w-4" /> see the app
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
              style={{
                textDecoration: "none",
              }}
              className="bg-[#001233]/70 px-2 py-[3.5px] text-[#efe0ca] text-sm flex items-center gap-1.5 px-2 underline mt-2 text-accent self-start rounded-lg"
            >
              <BiUpload className=" h-4 w-4" /> see the app
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
              style={{
                textDecoration: "none",
              }}
              className="bg-[#001233]/70 px-2 py-[3.5px] text-[#efe0ca] text-sm flex items-center gap-1.5 px-2 underline mt-2 text-accent self-start rounded-lg"
            >
              <BiUpload className=" h-4 w-4" /> see the app
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
              style={{
                textDecoration: "none",
              }}
              className="bg-[#001233]/70 px-2 py-[3.5px] text-[#efe0ca] text-sm flex items-center gap-1.5 px-2 underline mt-2 text-accent self-start rounded-lg"
            >
              <BiUpload className=" h-4 w-4" /> see the app
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center block">
          <button className="bg-[#ff595a] rounded-full w-fitContent px-3 py-2 text-lg font-[600] hover:bg-[#001233] hover:text-[#efe0ca] ">
            View All Projects
          </button>
        </div>
      </div>

      {/* section six */}
      <div className="h-auto bg-gray-200 mt-10 px-5 lg:px-20 2xl:px-60 py-10 flex flex-col items-center justify-center">
        <h1 className="text-[#001233] text-[2.7rem] font-[700]">About Me</h1>
        <div className="mt-5">
          <Image
            src={profile}
            alt="profile"
            width="250"
            height="250"
            className="rounded-full"
          />
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="flex flex-col  text-center text-center w-[100%] justify-center">
            <span className="whitespace-nowrap font-[700] text-1.3rem] mb-3">
              Key Skills:
            </span>
            <div className="flex flex-col items-center gap-6">
              <div className=" flex flex-col lg:flex-row gap-5 items-center">
                <div className="flex">
                  <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                    Nodejs
                  </div>
                  <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                    React
                  </div>
                  <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                    TypeScript
                  </div>
                  <div className="lg:hidden w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                    AWS
                  </div>
                </div>

                <div className="flex items-center mx-auto">
                  <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                    Next
                  </div>
                  <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                    Express
                  </div>
                  <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                    Tailwind
                  </div>
                  <div className="lg:hidden w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                    PostgreSQL
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                  Docker
                </div>
                <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                  HTML5
                </div>
                <div className=" w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                  CSS3
                </div>
                <div className="hidden lg:block w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                  AWS
                </div>
                <div className="hidden lg:block w-fit text-[0.9rem] ml-2 h-fit text-[#efe0ca] px-3 py-[3px] rounded-full bg-[#001233] ">
                  PostgreSQL
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row gap-4">
            <button
              onClick={(e) =>
                (window.location.href = "mailto:dkirigha18@gmail.com")
              }
              className="bg-[#ff595a] w-fit rounded-full px-3 font-[700] py-2 text-[#001233] text-[#001233]"
            >
              Contact Me Via Email
            </button>
            <button
              onClick={onDownloadCv}
              className="bg-[#ff595a] flex gap-2 justify-center items-center w-fit rounded-full px-3 font-[700] py-2 text-[#001233] text-[#001233]"
            >
              <FaDownload /> Download My CV
            </button>
          </div>
        </div>
      </div>

      {/* section seven */}
      <div className="h-auto bg-white mt-10 px-5 lg:px-20 2xl:px-60 pt-10 flex items-center justify-center">
        <div className=" bg-[#efe0ca] mb-8 flex flex-col items-center justify-center h-full w-[750px] rounded-lg">
          <h1 className="text-[#001233] text-[1.7rem] md:text-[2.5rem] text-center font-[700] mt-8">
            We can Work Together
          </h1>
          <p className="text-[1.2rem] md:text-[1.5rem] text-center text-[#001233] font-[500] mt-10">
            Want to get your project done? Ready to deliver your expectation
          </p>
          <button className="my-8 bg-[#efe0ca] border border-[#001233] text-[#001233] font-[600] hover:bg-[#001233] hover:text-[#efe0ca] py-2 px-5 rounded-full hover:tracking-widest text-lg hover:bg-opacity-90 transition-all duration-150 ease-linear  ">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
