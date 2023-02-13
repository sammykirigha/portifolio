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
          Am a FullStack developer, devops Engineer, mentor & public speaker
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
    </div>
  );
};

export default About;
