import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { toast } from "../components/ui/use-toast";

const Message = z.object({
  name: z.string().max(100),
  email: z.string().email(),
  subject: z.string().max(200),
  message: z.string().max(500),
});

export type IFormInput = z.infer<typeof Message>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    //confirm email and message field are not empty
    if (!data.email || !data.message) {
      toast({
        description: "Email and message are required fields"
      });
      return;
    }
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          subject: data.subject,
          message: data.message,
        }),
      });
      console.log("response", response);

      // handle success
      if (response.ok) {
        toast({description: "Your message has been sent."})
      } else {
         toast({description: "There was a problem sending email. Pls try again!"});
      }
    } catch (error) {
       toast({description: "There was a problem sending email. Pls try again!"});
    } finally {
      // setIsSending(false);
    }
  };
  return (
    <div className="flex items-center justify-center px-5 lg:px-20 2xl:px-60 bg-[#001233]/95 ">
      <div className=" flex flex-col  justify-center items-center mt-16">
        <h1 className="text-[2rem] lg:text-[2.5rem] tracking-[0.03em] lg:tracking-[0.1em] text-center font-[700] text-white uppercase  leading-[3rem]">
          I Love to hear from you, <br></br> Get in touch 👋{" "}
        </h1>
        <p className="text-[1.2rem] text-center mt-7 text-white ">
          Feel free to contact me with questions about any of my project or
          services. <br></br> I&apos;ll get back to you within 24 hours! <br></br>
          <strong className="text-[#bc60fb]">
            {" "}
            +254707256013 dkirigha18@gmail.com
          </strong>
        </p>
        <div className="w-[100%] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col px-3 my-4 mt-12 mb-10"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="flex flex-col">
                <label className="text-[1.2rem] font-[400] text-[#bc60fb]">
                  Your Name
                </label>
                <input
                  {...register("name", {
                    required: "Please enter your name.",
                  })}
                  className="h-[50px] px-2 rounded-lg mt-1 form-input border border-light-red focus:border-0 focus:ring focus:ring-1 focus:ring-light-red w-full lg:w-[400px] "
                />
                <p className=" text-red-500 py-1">
                  {errors.name && <p>{errors.name.message}</p>}
                </p>
              </div>
              <div className="flex flex-col">
                <label className="text-[1.2rem] font-[400] text-[#bc60fb]">
                  Your email
                </label>
                <input
                  {...register("email", {
                    required: "Please enter your email.",
                  })}
                  className="h-[50px] px-2 rounded-lg mt-1 form-input border border-light-red focus:border-0 focus:ring focus:ring-1 focus:ring-light-red w-full lg:w-[400px] "
                />
                <p className=" text-red-500 py-1">
                  {errors.email && <p>{errors.email.message}</p>}
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-[1.2rem] font-[400] text-[#bc60fb]">
                Subject
              </label>
              <input
                {...register("subject", {
                  required: "Please enter the subject.",
                })}
                className="h-[50px] px-2 rounded-lg mt-1 form-input border border-light-red focus:border-0 focus:ring focus:ring-1 focus:ring-light-red w-full "
              />
              <p className=" text-red-500 py-1">
                {errors.subject && <p>{errors.subject.message}</p>}
              </p>
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-[1.2rem] font-[400] text-[#bc60fb]">
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Please enter the message.",
                })}
                rows={5}
                className="border px-2 rounded-lg border-light-red focus:border-0 focus:ring focus:ring-1 focus:ring-light-red"
              />
              <p className=" text-red-500 py-1">
                {errors.message && <p>{errors.message.message}</p>}
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting && !isValid}
              className="block bg-light-red bg-[#bc60fb] font-bold text-white w-fit mx-auto mt-6 px-12 cursor-pointer py-2 rounded-lg">
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
