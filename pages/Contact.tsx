import { log } from "console";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log("data", data);
  };
  return (
    <div className="flex items-center justify-center">
      <div className=" flex flex-col  justify-center items-center mt-16">
        <h1 className="text-[2.5rem] font-[700] text-dark opacity-80 uppercase tracking-[0.1em] leading-[3rem]">
          I Love to hear from you, <br></br> Get in touch 👋{" "}
        </h1>
        <p className="text-[1.2rem] text-center mt-7 ">
          Feel free to contact me with questions about any of my project or
          services. <br></br> I'll get back to you within 24 hours! <br></br>
          <strong className="text-light-red">
            {" "}
            +254707256013 dkirigha18@gmail.com
          </strong>
        </p>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col px-3 my-4 mt-12 mb-10"
          >
            <div className="flex flex-row justify-between gap-4">
              <div className="flex flex-col">
                <label className="text-[1.2rem] font-[400] text-dark">
                  Your Name
                </label>
                <input
                  {...register("name")}
                  className="h-[50px] mt-1 form-input border border-light-red focus:border-0 focus:ring focus:ring-1 focus:ring-light-red w-[400px] "
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[1.2rem] font-[400] text-dark">
                  Your email
                </label>
                <input
                  {...register("email")}
                  className="h-[50px] mt-1 form-input border border-light-red focus:border-0 focus:ring focus:ring-1 focus:ring-light-red w-[400px] "
                />
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-[1.2rem] font-[400] text-dark">
                Subject
              </label>
              <input
                {...register("subject")}
                className="h-[50px] mt-1 form-input border border-light-red focus:border-0 focus:ring focus:ring-1 focus:ring-light-red w-full "
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-[1.2rem] font-[400] text-dark">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                className="border border-light-red focus:border-0 focus:ring focus:ring-1 focus:ring-light-red"
              />
            </div>
            <button className="block bg-light-red text-white w-fit mx-auto mt-6 px-12 cursor-pointer py-2 rounded-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
