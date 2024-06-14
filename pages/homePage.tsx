import React from "react";
import Image from "next/image";
import image from "../public/image.png";
import project from "../public/project.jpg";
import dashboard from "../public/assets/lottery-app.png";
import profile from "../public/assets/profile.jpg";
import logo from "../public/griffin-logo.png";
import { TbBrandReactNative } from "react-icons/tb";
import { MdComputer } from "react-icons/md";
import { FaLocationArrow, FaReact } from "react-icons/fa";
import { BiUpload } from "react-icons/bi";
import { langs } from "../utils/language";
import { FaRegLightbulb, FaDownload } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";
import { RiMapPinFill } from "react-icons/ri";
import { BsArrowUpRightCircleFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";


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
    <div className="bg-[#001233]/95">
      {/* introduction bg-[url('../public/assets/bg-22.avif')] bg-no-repeat bg-center bg-cover  */}
      <div className="relative px-5 lg:px-20 2xl:px-60 bg-red-500 bg-[url('../public/assets/bg-22.avif')] h-[700px] bg-no-repeat bg-center bg-cover  ">
        <div className=" w-full absolute top-[55%] -right-[0%]  ">
          <div className="flex flex-col">
            <div className=" w-full mx-auto  flex items-center justify-center">
              <div className="px-3 w-full flex flex-col items-center justify-center">
                <h2 className="text-white text-[105px] font-bold">
                  Samuel Kirigha.
                </h2>
                <p className="text-white text-center items-center justify-center w-full  font-bold text-4xl">
                  Software Engineer, And App Developer
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center my-10">
              <span>
                <FaArrowAltCircleDown className="text-6xl animate-bounce w-12 h-12 text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* section two competence */}
      <div className="bg-[#001233]/95 pt-10 pb-2  px-5 lg:px-20 2xl:px-60">
        <div className="pr-3 ">
          <div className="flex flex-col items-center justify-center pt-10">
            <h1 className="text-white uppercase text-[1.7rem] tracking-[0.17em] font-[800]">
              My Expertise
            </h1>
            <div className="flex mt-10 gap-4">
              <div className="border border-[#efe0ca] max-h-[250px] w-full max-w-md p-3 rounded-md">
                <div className=" flex gap-5 p-4">
                  <span>
                    <MdComputer className="text-6xl text-white/90 " />
                  </span>
                  <div className=" flex flex-col">
                    <span className=" text-white/90 leading-[20px] text-[25px] font-[900]">
                      Software
                    </span>
                    <span className=" text-white/90 text-[25px] font-[900]">
                      Development
                    </span>
                  </div>
                </div>
                <div className=" px-10 relative">
                  <div className="before:content-['<h3>'] text-[#efe0ca]/50"></div>
                  <p className="text-white/90 text-[18px] pl-7 font-serif">
                    Experienced in both functional and OOP: ASP.NET, C#,
                    JavaScript, TypeScript.
                  </p>
                  <div className="after:content-['<h3>'] text-[#efe0ca]/50"></div>
                  <div className=" absolute left-14 top-4 after:content-[''] bg-[#efe0ca]/50 my-2 h-[65%] w-[2px]"></div>
                </div>
              </div>
              <div className="border border-[#efe0ca] max-h-[250px] w-full max-w-md p-3 rounded-md">
                <div className=" flex gap-5 p-4">
                  <span>
                    <FaReact className="text-6xl text-white " />
                  </span>
                  <div className=" flex flex-col">
                    <span className=" text-white/90 leading-[20px] text-[25px] font-[900]">
                      FrontEnd
                    </span>
                    <span className=" text-white/90 text-[25px] font-[900]">
                      React, NextJs
                    </span>
                  </div>
                </div>
                <div className=" px-10 relative">
                  <div className="before:content-['<h3>'] text-[#efe0ca]/50"></div>
                  <p className="text-white/90 text-[18px] pl-7 font-serif">
                    Passionate about UI/UX. Over 2 years of development
                    experience in HTML, CSS, JS, React and NextJS frameworks
                  </p>
                  <div className="after:content-['<h3>'] text-[#efe0ca]/50"></div>
                  <div className=" absolute left-14 top-4 after:content-[''] bg-[#efe0ca]/50 my-2 h-[65%] w-[2px]"></div>
                </div>
              </div>
              <div className="border border-[#efe0ca] max-h-[250px] w-full max-w-md p-3 rounded-md">
                <div className=" flex gap-5 p-4">
                  <span>
                    <TbBrandReactNative className="text-6xl text-white " />
                  </span>
                  <div className=" flex flex-col">
                    <span className=" text-white/90 leading-[20px] text-[25px] font-[900]">
                      Mobile
                    </span>
                    <span className=" text-white/90 text-[25px] font-[900]">
                      Development
                    </span>
                  </div>
                </div>
                <div className=" px-10 relative">
                  <div className="before:content-['<h3>'] text-[#efe0ca]/50"></div>
                  <p className="text-white/90 text-[18px] pl-7 font-serif">
                    Skilled in developing hybrid mobile apps and cross-platform
                    solutions using the React Native framework.
                  </p>
                  <div className="after:content-['<h3>'] text-[#efe0ca]/50"></div>
                  <div className=" absolute left-14 top-4 after:content-[''] bg-[#efe0ca]/50 my-2 h-[65%] w-[2px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative w-[50vw] shadow-inner inset-2 opacity-10 border border-none mx-auto bg-[url('../public/code-22.jpg')] h-[250px] bg-no-repeat bg-cover bg-center ">
          <div className="absolute inset-0 fade-bg pointer-events-none"></div>
        </div>
      </div>

      {/* section three */}
      <div className="h-auto ">
        <div className=" px-5 lg:px-20 2xl:px-60">
          <div className="">
            <ul className=" flex items-center gap-5">
              <li className=" text-[#c6c5c6] text-[20px] font-[800]">
                Filter by
              </li>
              <li className=" flex gap-2 relative cursor-pointer group">
                <span className="text-[#c6c5c6] text-[18px] font-[700] group-hover:text-[#ff595a]">
                  All
                </span>
                <span className="text-[#c6c5c6] text-[18px] font-[700] group-hover:text-[#ff595a] absolute -top-2 left-6">
                  10
                </span>
              </li>
              <div className=" bg-[#c6c5c6] h-5 w-[2px] origin-bottom rotate-12 ml-[4px]"></div>
              <li className=" flex gap-2 relative cursor-pointer group">
                <span className="text-[#c6c5c6] text-[18px] font-[700] group-hover:text-[#ff595a]">
                  Data Visualization
                </span>
                <span className="text-[#c6c5c6] text-[18px] font-[700] group-hover:text-[#ff595a] absolute -top-2 -right-[7%] ">
                  1
                </span>
              </li>
              <div className=" bg-[#c6c5c6] h-5 w-[2px] origin-bottom rotate-12"></div>
              <li className=" flex gap-2 relative cursor-pointer group">
                <span className="text-[#c6c5c6] text-[18px] font-[700] group-hover:text-[#ff595a]">
                  Web Development
                </span>
                <span className="text-[#c6c5c6] text-[18px] font-[700] group-hover:text-[#ff595a] absolute -top-3 -right-[12%]">
                  09
                </span>
              </li>
            </ul>
          </div>

          <div className=" mt-7">
            <div className=" grid grid-cols-3 gap-16">
              <div className="group cursor-pointer rounded-lg">
                <div className=" rounded-t-lg relative overflow-hidden cursor-pointer ">
                  <Image
                    src={project}
                    alt=""
                    className=" rounded-t-lg boarder h-[300px] min-w-[350px] transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                  <p className=" text-[22px] leading-[19px] font-[700] py-3 z-50">
                    Flight Local Web App
                  </p>
                  <div className=" relative">
                    <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                      Web Development
                    </p>
                    <span className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer rounded-lg">
                <div className=" rounded-t-lg relative overflow-hidden cursor-pointer ">
                  <Image
                    src={project}
                    alt=""
                    className=" rounded-t-lg boarder h-[300px] min-w-[350px] transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                  <p className=" text-[22px] leading-[19px] font-[700] py-3 z-50">
                    Flight Local Web App
                  </p>
                  <div className=" relative">
                    <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                      Web Development
                    </p>
                    <span className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer rounded-lg">
                <div className=" rounded-t-lg relative overflow-hidden cursor-pointer ">
                  <Image
                    src={project}
                    alt=""
                    className=" rounded-t-lg boarder h-[300px] min-w-[350px] transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                  <p className=" text-[22px] leading-[19px] font-[700] py-3 z-50">
                    Flight Local Web App
                  </p>
                  <div className=" relative">
                    <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                      Web Development
                    </p>
                    <span className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-fit  group cursor-pointer rounded-lg">
                <div className=" rounded-t-lg relative overflow-hidden cursor-pointer ">
                  <Image
                    src={project}
                    alt=""
                    className=" rounded-t-lg boarder min-h-[300px] min-w-[350px] transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                  <p className=" text-[22px] leading-[19px] font-[700] py-3 z-50">
                    Flight Local Web App
                  </p>
                  <div className=" relative">
                    <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                      Web Development
                    </p>
                    <span className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-1 group cursor-pointer rounded-lg">
                <div className=" rounded-t-lg relative overflow-hidden cursor-pointer ">
                  <Image
                    src={project}
                    alt=""
                    className=" rounded-t-lg boarder  transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                  <p className=" text-[22px] leading-[19px] font-[700] py-3 z-50">
                    Flight Local Web App
                  </p>
                  <div className=" relative">
                    <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                      Web Development
                    </p>
                    <span className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <div className="-mt-32 group cursor-pointer rounded-lg">
                <div className=" rounded-t-lg relative overflow-hidden cursor-pointer ">
                  <Image
                    src={project}
                    alt=""
                    className=" rounded-t-lg boarder h-[300px] min-w-[350px] transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                  <p className=" text-[22px] leading-[19px] font-[700] py-3 z-50">
                    Flight Local Web App
                  </p>
                  <div className=" relative">
                    <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                      Web Development
                    </p>
                    <span className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer rounded-lg">
                <div className=" rounded-t-lg relative overflow-hidden cursor-pointer ">
                  <Image
                    src={project}
                    alt=""
                    className=" rounded-t-lg boarder h-[300px] min-w-[350px] transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                  <p className=" text-[22px] leading-[19px] font-[700] py-3 z-50">
                    Flight Local Web App
                  </p>
                  <div className=" relative">
                    <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                      Web Development
                    </p>
                    <span className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer rounded-lg">
                <div className=" rounded-t-lg relative overflow-hidden cursor-pointer ">
                  <Image
                    src={project}
                    alt=""
                    className=" rounded-t-lg boarder h-[300px] min-w-[350px] transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                  <p className=" text-[22px] leading-[19px] font-[700] py-3 z-50">
                    Flight Local Web App
                  </p>
                  <div className=" relative">
                    <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                      Web Development
                    </p>
                    <span className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section five */}
      <div className="h-auto mt-10  px-5 lg:px-20 2xl:px-60 pt-10">
        <div className="flex items-center justify=center flex-col">
          <h1 className="text-white text-[3rem] leading-[2.5rem] font-[700] ">Professional</h1>
          <h3 className="text-white text-[2.5rem] font-[700]">Experience </h3>
        </div>
      <div className=" container max-w-[1024px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=" border border-none">
            <AccordionTrigger className="">
              <div className=" text-white h-16 rounded-lg bg-[#430d79] w-full flex items-center justify-around ">
                <h3 className=" text-[20px]">Mid-Level Software Engineer @ Global Griffin Tech </h3>
                <h3>2023 - Present</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className=" mr-5 " >
              <div className=" bg-[#241d41] rounded-lg px-6 py-7">
                <div className=" flex gap-5 items-center">
                  <div className=" flex gap-3 items-center ">
                    <RiMapPinFill className=" text-white h-4 w-4" />
                    <p className="text-white">Nyeri, Kenya</p>
                  </div>
                  <div className=" flex gap-3 items-center">
                    <BsFillArrowUpRightCircleFill className=" text-white h-4 w-4" />
                    <p className="text-white">griffinglobaltech.com</p>
                  </div>
                </div>
                <div className=" flex gap-6">
                  <div className=" flex flex-col mt-5">
                     <p className=" text-white">Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.</p>
                     <div className=" flex gap-3 mt-5">
                      <span className=" text-white bg-[#2c3599] rounded-full px-4 py-1">Javascript</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">React</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">NextJs</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">.NET</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">Angular</span>
                     </div>
                  </div>
                  <div>
                    <Image src={logo} alt="" className=" h-16 w-36" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=" border border-none">
            <AccordionTrigger className="">
              <div className=" text-white h-16 rounded-lg bg-[#430d79] w-full flex items-center justify-around ">
                <h3 className=" text-[20px]">Mid-Level Software Engineer @ Global Griffin Tech </h3>
                <h3>2023 - Present</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className=" mr-5 " >
              <div className=" bg-[#241d41] rounded-lg px-6 py-7">
                <div className=" flex gap-5 items-center">
                  <div className=" flex gap-3 items-center ">
                    <RiMapPinFill className=" text-white h-4 w-4" />
                    <p className="text-white">Nyeri, Kenya</p>
                  </div>
                  <div className=" flex gap-3 items-center">
                    <BsFillArrowUpRightCircleFill className=" text-white h-4 w-4" />
                    <p className="text-white">griffinglobaltech.com</p>
                  </div>
                </div>
                <div className=" flex gap-6">
                  <div className=" flex flex-col mt-5">
                     <p className=" text-white">Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.</p>
                     <div className=" flex gap-3 mt-5">
                      <span className=" text-white bg-[#2c3599] rounded-full px-4 py-1">Javascript</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">React</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">NextJs</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">.NET</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">Angular</span>
                     </div>
                  </div>
                  <div>
                    <Image src={logo} alt="" className=" h-16 w-36" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=" border border-none" >
            <AccordionTrigger className="">
              <div className=" text-white h-16 rounded-lg bg-[#430d79] w-full flex items-center justify-around ">
                <h3 className=" text-[20px]">Mid-Level Software Engineer @ Global Griffin Tech </h3>
                <h3>2023 - Present</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className=" mr-5 " >
              <div className=" bg-[#241d41] rounded-lg px-6 py-7">
                <div className=" flex gap-5 items-center">
                  <div className=" flex gap-3 items-center ">
                    <RiMapPinFill className=" text-white h-4 w-4" />
                    <p className="text-white">Nyeri, Kenya</p>
                  </div>
                  <div className=" flex gap-3 items-center">
                    <BsFillArrowUpRightCircleFill className=" text-white h-4 w-4" />
                    <p className="text-white">griffinglobaltech.com</p>
                  </div>
                </div>
                <div className=" flex gap-6">
                  <div className=" flex flex-col mt-5">
                     <p className=" text-white">Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.</p>
                     <div className=" flex gap-3 mt-5">
                      <span className=" text-white bg-[#2c3599] rounded-full px-4 py-1">Javascript</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">React</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">NextJs</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">.NET</span>
                      <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">Angular</span>
                     </div>
                  </div>
                  <div>
                    <Image src={logo} alt="" className=" h-16 w-36" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
      </div>

      {/* section six */}
      <div className="h-auto bg-gradient-to-t from-gray-200 mt-10 px-5 lg:px-20 2xl:px-60 py-10 flex flex-col items-center justify-center">
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
