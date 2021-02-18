import { styled } from "frontity";
import React, { useEffect } from "react";
import { connect } from "frontity";
import Lottie from "lottie-react";
import animation from "./lottie.json";

const LottiePlayer = () => (
    <LottieDiv>
      <Lottie animationData={animation} />
    </LottieDiv>
);
 
export default connect(LottiePlayer);

const LottieDiv = styled.div`
  width: 700px;
  height: auto;
  
  @media (max-width: 750px) {
    width: 100%;
    min-height: 300px;
  }
`;