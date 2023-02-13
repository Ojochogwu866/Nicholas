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
    window.location.href = `mailto:dicksonojochogwu@gmail.com?subject=${formData.name}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" text-sm absolute top-10 uppercase tracking-[15px] text-gray-500">
        SAY HI TO NICK
      </h3>
      <div className="flex flex-col space-y-10">
        <p className=" text-base font-normal">
          Got anyhting to say? Send me a message, I will get back to you.{" "}
        </p>
        <div className=" space-y-18 gap-6 flex justify-center items-center">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-sm">+234500903</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-sm">ioravergn@next.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Fullname"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email Address"
              type="email"
            />
          </div>
          <div className="">
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput w-full min-h-[100px]"
            />
            <button
              className="w-full bg-[#f7ab0a] mt-2 py-2 px-4 flex justify-center items-center rounded-md text-black  text-sm"
              type="submit"
            >
              Shoot <ArrowLongRightIcon className="h-7 animate-pulse" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
