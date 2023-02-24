import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  message: string;
};
type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ioravernicholas@gmail.com?subject=Hello Nickolas?subject=${formData.name}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" text-sm absolute top-8 uppercase tracking-[15px] z-50 text-gray-500">
        SAY HI TO NICK
      </h3>
      <div className="flex flex-col max-w-[600px] min-w-[300px]  space-y-10">
        <p className=" text-[13px] md:text-base font-normal">
          Got anything to say? Send me a message, I will get back to you.{" "}
        </p>
        <div className=" space-y-18 gap-6 flex justify-center items-center">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-sm">+2347018910980</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-sm">ioravergn@ioraver.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  max-w-[700px] space-y-3"
        >
          <div className="md:flex md:flex-row  flex-col md:space-x-2">
            <input
              {...register("name")}
              className="contactInput text-xs md:text-sm w-full"
              placeholder="Fullname"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput text-xs md:text-sm w-full mt-2 md:mt-0"
              placeholder="Email Address"
              type="email"
            />
          </div>
          <div className="">
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput text-xs md:text-sm w-full min-h-[100px]"
            />
            <button
              className="w-full bg-[#f7ab0a] mt-2 py-2 px-4 flex justify-center items-center rounded-md text-black  text-xs"
              type="submit"
            >
              Shoot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
