import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/griffin-logo.png";
import upwork from "../public/upwork.png";
import { TbBrandReactNative } from "react-icons/tb";
import { MdComputer } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";
import { RiMapPinFill } from "react-icons/ri";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Project, projects } from "../utils/language";
import Link from "next/link";

type Props = {};

const HomePage = (props: Props) => {

  const [filterString, setFilterString] = useState<string>("")
  const [projectsArray, setProjectsArray] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjectsArray(projects)
    setFilteredProjects(projects);
  }, [])


  useEffect(() => {
    const filterProjects = () => {
      if (filterString === "all" || filterString === "") {
        setFilteredProjects(projects);
      }
      if (filterString === "Data Visualization") {
        let dataProj = projectsArray.filter((item: Project) => item?.category === "Data Visualization");
        setFilteredProjects(dataProj);
      }
      if (filterString === "Web Development") {
        let webProj = projectsArray.filter((item: Project) => item?.category === "Web Development");
        setFilteredProjects(webProj);
      }
    }

    filterProjects()
  }, [filterString, filteredProjects, projectsArray])

  return (
    <div className="bg-[#001233]/95">
      {/* introduction bg-[url('../public/assets/bg-22.avif')] bg-no-repeat bg-center bg-cover  */}
      <div className="relative px-5 lg:px-20 2xl:px-60  bg-[url('../public/assets/bg-22.avif')] h-[300px] md:h-[450px] lg:h-[500px] bg-no-repeat bg-center bg-cover">
        <div className=" w-full absolute top-[55%] -right-[0%]  ">
          <div className="flex flex-col">
            <div className=" w-full mx-auto  flex items-center justify-center">
              <div className="px-3 mt-5 lg:mt-0 w-full bg flex flex-col items-center justify-center">
                <h2 className="text-white text-[35px] md:text-[55px] lg:text-[105px] font-bold">
                  Samuel Kirigha
                </h2>
                <p className="text-white text-center items-center justify-center w-full  font-bold text-[15px] md:text-3xl lg:text-4xl">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
              <div className="border border-[#efe0ca] max-h-auto w-full max-w-md p-3 rounded-md">
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
                    JavaScript, TypeScript, ReactJs, NextJs.
                  </p>
                  <div className="after:content-['<h3>'] text-[#efe0ca]/50"></div>
                  <div className=" absolute left-14 top-4 after:content-[''] bg-[#efe0ca]/50 my-2 h-[65%] w-[2px]"></div>
                </div>
              </div>
              <div className="border border-[#efe0ca] max-h-auto w-full max-w-md p-3 rounded-md">
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
              <div className="border border-[#efe0ca] max-h-auto w-full max-w-md p-3 rounded-md">
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
              <li className=" text-[#c6c5c6] text-[12px] md:text-[20px] font-[800] whitespace-nowrap ">
                Filter by
              </li>
              <li className=" flex gap-2 relative cursor-pointer group">
                <span onClick={() => setFilterString("all")}
                  className={`${filterString === "all" || filterString === "" ? 'text-[#bc60fb]' : "text-[#c6c5c6]"}  text-[12px] md:text-[18px] font-[700] group-hover:!text-[#bc60fb]`}>
                  All
                </span>
                <span className={`${filterString === "all" || filterString === "" ? 'text-[#bc60fb]' : "text-[#c6c5c6]"} hidden md:block text-[12px] md:text-[18px] font-[700] group-hover:!text-[#bc60fb] absolute -top-2 left-6`}>
                  10
                </span>
              </li>
              <div className=" bg-[#c6c5c6] h-5 w-[2px] origin-bottom rotate-12 ml-[4px]"></div>
              <li className=" flex gap-2 relative cursor-pointer group">
                <span onClick={() => setFilterString("Data Visualization")}
                  className={`${filterString === "Data Visualization" ? "text-[#bc60fb]" : "text-[#c6c5c6]"}  text-[12px] md:text-[18px] font-[700] group-hover:!text-[#bc60fb]`}>
                  Data Visualization
                </span>
                <span className={`${filterString === "Data Visualization" ? "text-[#bc60fb]" : "text-[#c6c5c6]"} hidden md:block  text-[12px] md:text-[18px] font-[700] group-hover:!text-[#bc60fb] absolute -top-2 -right-[7%]`}>
                  1
                </span>
              </li>
              <div className=" bg-[#c6c5c6] h-5 w-[2px] origin-bottom rotate-12"></div>
              <li className=" flex gap-2 relative cursor-pointer group">
                <span onClick={() => {
                  setFilterString("Web Development");
                  console.log("logging web development")
                }} className={`${filterString === "Web Development" ? 'text-[#bc60fb]' : 'text-[#c6c5c6]'}  text-[12px] md:text-[18px] font-[700] group-hover:!text-[#bc60fb]`}>
                  Web Development
                </span>
                <span className={`${filterString === "Web Development" ? 'text-[#bc60fb]' : 'text-[#c6c5c6]'} hidden md:block text-[12px] md:text-[18px] font-[700] group-hover:!text-[#bc60fb] absolute -top-3 -right-[12%]`}>
                  09
                </span>
              </li>
            </ul>
          </div>

          <div className=" mt-7">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
              {filteredProjects.map((item) => {
                return (
                  <div key={item?.id} className={`group cursor-pointer rounded-lg ${item?.style?.col} ${item?.id === 5 ? `${item?.style?.row} md:col-span-2` : ""} ${item?.id === 6 ? `mt-0 sm:-mt-16 md:mt-0 ${filterString === "Data Visualization" ? "lg:mt-0" : "lg:-mt-48"} ` : ""}`} >
                    <div className={`rounded-t-lg relative  ${item?.id === 5 ? `h-[500px]  p-10` : "h-[300px]"} overflow-hidden cursor-pointer`}>
                      <Image
                        src={item?.image}
                        alt=""
                        fill={true}
                        width={0}
                        height={0}
                        sizes="100vw"
                        objectPosition="center"
                        objectFit="cover"
                        className={`object-cover rounded-t-lg boarder transform transition duration-700 ease-in-out group-hover:scale-110`}
                      />
                    </div>
                    <div className="text-white rounded-lg py-6 bg-[#001233]/95 flex flex-col items-center justify-center w-full">
                      <p className=" text-[22px] leading-[19px] font-[700] py-3">
                        {item?.name + item?.id}
                      </p>
                      <div className=" relative">
                        <p className="leading-[19px] font-[700] group-hover:-translate-y-12 group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:opacity-0">
                          {item?.category}
                        </p>
                        <Link href={item?.link} className=" absolute top-0 leading-[19px] font-[700] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 ">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>

      {/* section five */}
      <div className="h-auto mt-10  px-5 lg:px-20 2xl:px-60 pt-10">
        <div className="flex items-center justify=center flex-col">
          <h1 className="text-white text-[3rem] leading-[2.5rem] font-[700] ">
            Professional
          </h1>
          <h3 className="text-white text-[2.5rem] font-[700]">Experience </h3>
        </div>
        <div className=" container max-w-[1024px]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className=" border border-none">
              <AccordionTrigger className=" ">
                <div className=" text-white h-16 rounded-lg bg-[#430d79] w-full flex flex-col md:flex-row items-center justify-around ">
                  <h3 className=" text-[14px] md:text-[20px]">
                    Mid Software Engineer @ Global Griffin Tech{" "}
                  </h3>
                  <h3 className=" text-[14px] md:text-[20px]">
                    2023 - Present
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" mr-1 ">
                <div className=" bg-[#241d41] rounded-lg px-6 py-7">
                  <div className=" flex flex-col sm:flex-row md:flex-row gap-5 items-start md:items-center">
                    <div className=" flex gap-3 items-center ">
                      <RiMapPinFill className=" text-white h-4 w-4" />
                      <p className="text-white">Nyeri, Kenya</p>
                    </div>
                    <div className=" flex gap-3 items-center">
                      <BsFillArrowUpRightCircleFill className=" text-white h-4 w-4" />
                      <p className="text-white">griffinglobaltech.com</p>
                    </div>
                  </div>
                  <div className=" flex flex-col md:row gap-6">
                    <div className=" flex flex-col mt-5">
                      <p className=" text-white text-wraps">
                        As a full stack developer with over two years of experience, I have worked extensively with .NET,
                        JavaScript, React, Angular, Azure, and Next.js. I developed and maintained robust web applications, integrating front-end frameworks like React and Angular with .NET backends. Utilizing Azure for cloud services, I ensured scalable and secure deployments.
                        My projects often involved building responsive interfaces, optimizing performance, and implementing RESTful APIs.
                        This experience has honed my problem-solving skills and enabled me to deliver comprehensive solutions tailored to client needs.
                      </p>
                      <div className=" flex flex-wrap gap-3 mt-5">
                        <span className=" text-white bg-[#2c3599] rounded-full px-4 py-1">
                          Javascript
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          React
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          NextJs
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          .NET
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          Angular
                        </span>
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
                <div className=" text-white h-16 rounded-lg bg-[#430d79] w-full flex flex-col md:flex-row items-center justify-around ">
                  <h3 className=" text-[14px] md:text-[20px]">
                    Intern Software Engineer @ The Jitu.com{" "}
                  </h3>
                  <h3 className=" text-[14px] md:text-[20px]">
                    2023 - Present
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" mr-1 ">
                <div className=" bg-[#241d41] rounded-lg px-6 py-7">
                  <div className=" flex flex-col sm:flex-row md:flex-row gap-5 items-start md:items-center">
                    <div className=" flex gap-3 items-center ">
                      <RiMapPinFill className=" text-white h-4 w-4" />
                      <p className="text-white">Nyeri, Kenya</p>
                    </div>
                    <div className=" flex gap-3 items-center">
                      <BsFillArrowUpRightCircleFill className=" text-white h-4 w-4" />
                      <p className="text-white">griffinglobaltech.com</p>
                    </div>
                  </div>
                  <div className=" flex flex-col md:row gap-6">
                    <div className=" flex flex-col mt-5">
                      <p className=" text-white text-wraps">
                        During my software developer internship, I worked on a dynamic team where I contributed to the development of web applications using JavaScript and React.
                        I collaborated on code reviews, debugging, and implementing new features, gaining hands-on experience with version control systems like Git.
                        I also participated in daily stand-ups and sprint planning sessions, enhancing my understanding of agile methodologies.
                        This role allowed me to develop strong problem-solving skills and improve my ability to work effectively in a collaborative environment.
                      </p>
                      <div className=" flex flex-wrap gap-3 mt-5">
                        <span className=" text-white bg-[#2c3599] rounded-full px-4 py-1">
                          Javascript
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          React
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          NextJs
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          .NET
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          Angular
                        </span>
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
                <div className=" text-white h-16 rounded-lg bg-[#430d79] w-full flex flex-col md:flex-row items-center justify-around ">
                  <h3 className=" text-[14px] md:text-[20px]">
                    Fullstack Developer Upwork Frelancer{" "}
                  </h3>
                  <h3 className=" text-[14px] md:text-[20px]">
                    2023 - Present
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" mr-1 ">
                <div className=" bg-[#241d41] rounded-lg px-6 py-7">
                  <div className=" flex flex-col sm:flex-row md:flex-row gap-5 items-start md:items-center">
                    <div className=" flex gap-3 items-center ">
                      <RiMapPinFill className=" text-white h-4 w-4" />
                      <p className="text-white">Nyeri, Kenya</p>
                    </div>
                    <div className=" flex gap-3 items-center">
                      <BsFillArrowUpRightCircleFill className=" text-white h-4 w-4" />
                      <p className="text-white">griffinglobaltech.com</p>
                    </div>
                  </div>
                  <div className=" flex flex-col md:row gap-6">
                    <div className=" flex flex-col mt-5">
                      <p className=" text-white text-wraps">
                        As a software developer on Upwork for less than a year, I worked with clients to build and enhance web applications using .NET and JavaScript technologies. I focused on developing user interfaces, optimizing performance, and debugging complex issues.
                        This experience helped me improve my technical skills, adapt to various project requirements, and deliver high-quality solutions efficiently while maintaining strong client communication.
                      </p>
                      <div className=" flex flex-wrap gap-3 mt-5">
                        <span className=" text-white bg-[#2c3599] rounded-full px-4 py-1">
                          Javascript
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          React
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          NextJs
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          .NET
                        </span>
                        <span className=" text-white rounded-full bg-[#2c3599]  px-4 py-1">
                          Angular
                        </span>
                      </div>
                    </div>
                    <div>
                      <Image src={upwork} alt="" className=" h-16 w-36" />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* section six */}
      <div className="flex flex-col-reverse md:flex-row xl:px-10 bg-[#001233]/95 mt-10 pb-10 items-start h-full justify-center">
        <div className="  min-w-[40%] mt-10 px-5">
          <div className="">
            <h2 className=" text-center md:text-start text-[20px] md:text-[43px] leading-[48px] font-bold text-white">
              Available for freelance opportunities
            </h2>
            <div className=" mt-10 flex flex-col gap-3 max-w-[80%]">
              <p className=" text-white text-center md:text-start text-[16px] md:text-[20px] tracking-wider font-serif">
                Have an exciting project you need help with?
              </p>
              <p className=" text-white text-center md:text-start text-[16px] md:text-[20px]  tracking-wider font-serif">
                Send me an email or contact me via instant message!
              </p>
            </div>
          </div>
          <div className="pb-0 sm:pb-0 text-white my-16 flex flex-col items-center md:items-start">
            <h1 className="text-beige text-[1.2rem] md:text-[1.4rem] font-[600] border-b-[3px] w-fit border-b-[#bc60fb]">
              Positions of Interest
            </h1>
            <div className="flex sm:flex-col md:flex-row gap-7 pl-0  mt-2">
              <div className="flex flex-col gap-2">
                <span className="font-serif text-beige w-fit py-1 text-[0.9rem] md:text-[1.1rem] leading-[1.8rem] xl:text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                  ReactJs Developer
                </span>
                <span className="text-beige font-serif w-fit py-1 text-[0.9rem] md:text-[1.1rem] leading-[1.8rem] xl:text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                  C# .NET Developer
                </span>
                <span className="text-beige font-serif w-fit py-1 text-[0.9rem] md:text-[1.1rem] leading-[1.8rem] xl:text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                  Devops Engineer
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-beige font-serif w-fit py-1 text-[0.9rem] md:text-[1.1rem]  leading-[1.8rem] xl:text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                  Nodejs Developer
                </span>
                <span className="text-beige font-serif w-fit py-1 text-[0.9rem] md:text-[1.1rem]  leading-[1.8rem] xl:text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                  FullStack Developer
                </span>
                <span className="text-beige font-serif w-fit py-1 text-[0.9rem] md:text-[1.1rem]  leading-[1.8rem] xl:text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                  NextJs Developer
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-5 flex flex-col items-center md:items-start">
            <h2 onClick={() => {
              var email = "dkirigha18@gmail.com";
              location.href = "mailto:" + email;
            }} className=" text-white text-[16px] md:text-[20px] cursor-pointer font-serif border-b-[3px] w-fit border-b-[#bc60fb]  ">
              dkirigha18@gmail.com
            </h2>
            <ul className=" flex flex-col mt-5 ">
              <Link href={"https://www.linkedin.com/in/samuel-kirigha-2b25531a6/"} className=" text-white text-[0.9rem] md:text-[1.1rem]  leading-[1.8rem] xl:text-[1.1rem] font-serif cursor-pointer font-serif">
                LinkedIn
              </Link>
              <Link href={"https://github.com/sammykirigha"} className=" text-white text-[0.9rem] md:text-[1.1rem]  leading-[1.8rem] xl:text-[1.1rem] font-serif cursor-pointer font-serif">
                Github
              </Link>
              <Link href={"https://x.com/d_crigla"} className=" text-white text-[0.9rem] md:text-[1.1rem]  leading-[1.8rem] xl:text-[1.1rem] font-serif cursor-pointer font-serif">
                Twitter
              </Link>
            </ul>
          </div>
        </div>

        <div className=" w-full flex flex-col md:flex-row  h-full">
          <div className=" bg-[#bc60fb] w-full md:w-[50%]">
            <div className=" p-6 flex items-center justify-between">
              <FaQuoteRight className=" h-16 w-16 text-white/40" />
              <span className=" h-20 w-20 rounded-full flex items-center justify-center text-[18px] text-white font-[700] bg-[#430d79]">
                AE
              </span>
            </div>
            <div className=" p-5">
              <p className=" text-white text-[15px] md:text-[19px] font-serif  ">
                I am pleased to recommend Samuel Kirigha for any opportunity that aligns with his skills and experience.
                Samuel has worked as a software Engineer at Griffins Global Tech, where he has demonstrated exceptional abilities such as in Azure infrastructure setup and proficiency in C#,
                Javascript, React, and Angular technologies. Samuel is eager to learn new technologies and consistently seeks out ways to enhance his skills.
                He is also adept at helping onboarding new developers, ensuring they quickly integrate and become productive team members.
                His satisfactory problem-solving skills enable him to effectively tackle challenges and contributed
                to the team&apos;s success.
              </p>
              <div className=" text-white mt-5">
                <p>Aaron Ertler</p>
                <p>CTO at Griffin Global Solutions</p>
              </div>
            </div>
          </div>
          <div className=" bg-[#923fe6] w-full md:w-[50%]">
            {/* <div className=" bg-[#0067dc]">
              <div className=" p-6 flex items-center justify-between">
                <FaQuoteRight className=" h-16 w-16 text-white/40" />
                <span className=" h-20 w-20 rounded-full flex items-center justify-center text-[18px] text-white font-[700] bg-[#430d79]">
                  AE
                </span>
              </div>
              <div className=" px-4">
                <p className=" text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                  dolor pariatur distinctio totam, et dicta nostrum dolorem
                  eaque laborum. Accusantium architecto, dolorem vitae accusamus
                  ex temporibus molestias commodi molestiae hic?
                </p>
                <div className=" text-white py-5 ">
                  <p>- Aaron Etler</p>
                  <p>CTO at Griffin Global Solutions</p>
                </div>
              </div>
            </div> */}
            <div className=" bg-[#923fe6]">
              <div className=" p-6 flex items-center justify-between">
                <FaQuoteRight className=" h-16 w-16 text-white/40" />
                <span className=" h-20 w-20 rounded-full flex items-center justify-center text-[18px] text-white font-[700] bg-[#430d79]">
                  PK
                </span>
              </div>
              <div className=" px-4">
                <p className=" text-white text-[15px] md:text-[19px] font-serif ">
                  Samuel performance on the project was outstanding, demonstrating a deep understanding of .NET architecture and
                  exceptional technical expertise. His clear communication, proactive attitude, and
                  excellent collaboration skills ensured a smooth workflow and timely progress updates.
                  While his performance exceeded our expectations, continuing to stay updated with the latest trends in the .NET
                  ecosystem and exploring advanced topics like microservices and cloud integration with Azure could further enhance
                  his already impressive skill set.
                </p>
                <div className=" text-white my-5">
                  <p>Philip Kalela</p>
                  <p>Upwork Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
