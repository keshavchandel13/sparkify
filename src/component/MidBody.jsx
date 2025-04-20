import React from "react";
import ScrollFloat from "./animation/scrollFloat";
const MidBody = () => {
  return (
    <div className="pt-8  text-white">
      <div className="text-center text-xs  md:text-4xl">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          PERSONALIZED GIFTS THAT SPARK JOY - ONLY AT SPARKIFY
        </ScrollFloat>
      </div>
      <div className="flex flex-col items-center md:flex-row p-4 md:p-16 justify-center italic text-sm sm:text-base md:text-base space-y-4 md:space-y-0 md:space-x-8">
        <div className="p-4 max-w-lg">
          At <strong>Sparkify</strong>, we turn ordinary items into
          extraordinary gifts.
          <br />
          Whether it's a custom-printed T-shirt, a photo mug, or a quirky
          keychain,&nbsp; we bring your ideas to life with premium printing and
          a creative touch.
          <br />
          Perfect for birthdays, anniversaries, or just because - our products
          are
          <br />
          made to spread smiles. Choose Sparkify to celebrate your moments in
          style!
        </div>
        <div
          className="w-40 h-60 bg-cover ml-0 md:ml-8"
          style={{ backgroundImage: "url('/bawaOnTop.png')" }}
        ></div>
      </div>
    </div>
  );
};

export default MidBody;
