import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const InfoBox = ({ text, link, btnText }) => (
  <div
    className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl bg-secondary rounded-md pt-4 pb-12 px-8 shadow-lg"
    key="info-box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link
      to={link}
      className="py-3 px-6 rounded-lg text-primary bg-white text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3"
    >
      {btnText}
      <FaArrowRightLong />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center bg-secondary shadow-lg py-4 px-8 text-white mx-5 rounded-md"
      key="info-box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.125 }}
    >
      Hello, I'm <span className="font-semibold">Franklin</span> 👋
      <br />
      Aspiring web developer.
    </h1>
  ),
  2: (
    <InfoBox
      text="Currently a nurse working in mental health. Working hard on gaining developer skills."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Completed some cool projects, check them out."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a dev? Let's work together."
      link="/contact"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="info-box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {renderContent[currentStage] || null}
      </motion.div>
    </AnimatePresence>
  );
  // return renderContent[currentStage] || null;
};

export default HomeInfo;
