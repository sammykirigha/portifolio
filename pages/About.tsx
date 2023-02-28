import Image from "next/image";
import React from "react";
import profile from "../public/assets/profile.jpg";
import about from "../public/assets/about-one.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center my-16">
        <h1 className="text-dark text-[2.1rem] font-[700] opacity-80">
          About Samuel,{" "}
        </h1>
        <h1 className="text-dark text-[1.6rem] font-[700] opacity-60">
          Am a FullStack Developer, Devops Engineer, mentor & public speaker
        </h1>
        <p className="text-[1.2rem] leading-[1.7rem] tracking-wide font-[400] mt-2">
          I love writing clean, simple, and testable code
        </p>
      </div>
      <div className="mt-5 flex flex-col justify-center mb-10">
        <Image
          src={profile}
          alt="profile"
          width="250"
          height="250"
          className="rounded-full"
        />

        <button className="bg-dark mx-auto text-beige mt-7 w-fit px-3 py-2 rounded-lg ">
          Download My CV
        </button>
      </div>

      <Image
        src={about}
        alt="profile"
        width="500"
        className="rounded-lg mb-10"
      />

      <div className="flex flex-col bg-beige w-full mb-10 pb-10 items-center">
        <h1 className="text-[1.3rem] text-center text-dark mt-4 font-[700]">
          Hey Friends 👋, I'm Samuel. Nice to Meet You
        </h1>
        <div className="flex flex-col items-center justify-center max-w-[600px] mt-8">
          <p className="text-center text-[1.1rem] text-dark">
            I'm <strong className="text-light-red">Samuel Kirigha</strong>. I
            graduated with a bachelor's degree in Computer Science from Karatina
            University Of technology. I'm currently a Software Engineer working
            with ReactJs, NodeJs, GraphQl, Postgres, MongoDB and TypeScript.
          </p>
          <p className="text-lg my-6 text-center text-[1.1rem]">
            I'm also learning some DevOps tools on AWS and Azure.
          </p>
          <p className="text-lg text-center text-[1.1rem]">
            The main purpose of starting my own portfolio is to showcase my
            work, document what am learning through blogs and also to document
            the books am reading by writing book notes. I hope you get to check
            them out!
          </p>
        </div>
      </div>

      <div className="h-auto bg-white px-5 lg:px-20 2xl:px-60 pt-10 flex items-center justify-center">
        <div className=" bg-[#efe0ca] mb-8 flex flex-col items-center justify-center h-72 w-[750px] rounded-lg">
          <h1 className="text-[#001233] text-[2.5rem] font-[700] mt-8">
            We can Work Together
          </h1>
          <p className="text-[1.5rem] text-[#001233] font-[500] mt-10">
            Want to get your project done? Ready to deliver your expectation
          </p>
          <button className="mt-10 bg-[#efe0ca] border border-[#001233] text-[#001233] font-[600] hover:bg-[#001233] hover:text-[#efe0ca] py-2 px-5 rounded-full hover:tracking-widest text-lg hover:bg-opacity-90 transition-all duration-150 ease-linear  ">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
