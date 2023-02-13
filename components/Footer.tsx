import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="max-h-[400px]">
      <div className="flex items-start justify-between bg-dark px-16 pt-5 gap-[150px]">
        <div className="pb-6">
          <h1 className="text-beige text-[1.4rem] font-[600]">
            Positions of Interest
          </h1>
          <div className="bg-beige h-[2px] mt-2 w-[100px]"></div>
          <div className="flex gap-3 flex-row pl-3 mt-5">
            <div className="flex flex-col gap-4">
              <span className="text-beige w-fit px-3 py-1 text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                React Developer
              </span>
              <span className="text-beige w-fit px-3 py-1 text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                C#.NET Developer
              </span>
              <span className="text-beige w-fit px-3 py-1 text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                Devops Engineer
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-beige w-fit px-3 py-1 text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                Nodejs Developer
              </span>
              <span className="text-beige w-fit px-3 py-1 text-[1.1rem] cursor-pointer bg-light-blue opacity-99 rounded-full flex text-center items-center justify-center">
                FullStack Developer
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-beige text-[1.4rem] font-[600]">Range Salary</h1>
          <div className="bg-beige h-[2px] mt-2 w-[100px]"></div>
          <div className="pt-3">
            <h1 className="text-beige text-[1.1rem] font-[600]">
              Annual Salary:
            </h1>
            <p className="text-beige opacity-80 text-[0.9rem] font-[600]">
              Accepting Custom
            </p>
            <h1 className="text-beige text-[1.1rem] font-[600] mt-3">
              Hourly pay:
            </h1>
            <p className="text-beige opacity-80 text-[0.9rem] font-[600]">
              Accepting Custom
            </p>
          </div>
        </div>
        <div className="bg-gray-100 h-fit flex flex-col max-w-[400px] rounded-lg">
          <p className="px-5 pt-5 text-[1rem] leading-[20px] text-dark">
            NOTE: In case you have an idea for a project but you estimate that
            your budget may be very small, do not refrain from contacting me and
            presenting your project to me. I'm working to provide flexible
            payment methods that allow us to carry out great projects, without
            cost being a barrier.
          </p>
          <button className="mx-auto my-5 border border-light-red px-7 rounded-full py-1 text-[1rem] font-[600]">
            Lets have a call
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between h-[80px] bg-beige px-16 py-5">
        <p className="text-[1rem] ">
          This website has been designed and developed by me from scratch{" "}
          <br></br>
          Copyright @ Samuel Kirigha 2023
        </p>
        <button className="mr-10 text-dark text-[1rem] bg-light-red w-fit px-2 py-1 rounded-full font-[700]">
          Contact me via email
        </button>
      </div>
    </div>
  );
};

export default Footer;
