import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import trainer from "../assets/rabbani.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="trainer"
      className="w-full h-screen bg-[#0c0c0c] flex items-center justify-center p-4  text-gray-300"
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="max-w-[1000px] w-full flex flex-col gap-8">
          <div className=" pb-8 pl-4 text-center " data-aos="fade-up">
            <p className="text-4xl font-bold  inline border-b-4 border-orange-600">
              About Trainer
            </p>
          </div>
        </div>
        <div
          className="w-full flex flex-col md:flex-row items-center gap-8 justify-center px-4"
          data-aos="fade-up"
        >
          <img
            src={trainer}
            alt="/"
            className="w-[250px] h-[250px] object-cover md:w-[300px] rounded-lg"
          />

          <div>
            <p className="md:w-[400px] text-xl md:text-xl">
              Hi, I am <span className="text-orange-600 font-bold">Ghouse Rabbani</span>. I'm a National level althelete with gold medal. 
              I have studies Bachelor of arts(B.A) and Bachelor of Physical education(B.Ped). I have 15 years
              of experience as trainer and have trained more than 4500 clients till today. My expertise is fat loss and weight loss.
            </p>
          </div>
        </div>
        <p className="fixed bottom-2 right-1">
          <Link to="home" smooth={true}>
            <BsFillArrowUpCircleFill className="mr-3 cursor-pointer text-orange-600" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
