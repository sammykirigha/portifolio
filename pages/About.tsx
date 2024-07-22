import Image from "next/image";
import React from "react";
import profile from "../public/assets/profile.jpg";
import about from "../public/assets/about-one.jpg";

type Props = {};

const About = (props: Props) => {
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
    <div className="flex flex-col items-center justify-center bg-[#001233]/95">
      <div className="flex flex-col items-center justify-center my-16">
        <h1 className="text-white text-[2.1rem] font-[700] opacity-80">
          About Samuel,{" "}
        </h1>
        <h1 className="text-white text-[1.6rem] font-[700] s">
          Am a FullStack Developer, Devops Engineer, mentor & public speaker
        </h1>
        <p className="text-white text-[1.2rem] leading-[1.7rem] tracking-wide font-[400] mt-2">
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

        <button onClick={onDownloadCv} className="bg-dark mx-auto font-bold bg-[#bc60fb] text-white mt-7 w-fit px-3 py-2 rounded-lg ">
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
        <h1 className="text-[1.3rem] text-center text-white mt-4 font-[700]">
          Hey Friends 👋, I&apos;m Samuel. Nice to Meet You
        </h1>
        <div className="flex flex-col items-center justify-center max-w-[600px] mt-8">
          <p className="text-center text-[1.1rem] text-white">
            I graduated with a Bachelor&apos;s Degree in Computer Science from Karatina
            University Of technology in Kenya. I&apos;m currently a Software Engineer working
            with .NET, ReactJs, NodeJs, GraphQl, Postgres, MongoDB and TypeScript.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
