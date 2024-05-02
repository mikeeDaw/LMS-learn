"use client";

import React from "react";
import studyAnimation from "../../../public/assets/studyAnim.json";
import Lottie from "lottie-react";

const StudyAnim = () => {
  return <Lottie animationData={studyAnimation} />;
};

export default StudyAnim;
