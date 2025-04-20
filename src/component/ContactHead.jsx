import React from "react";

const ContactHead = () => {
  return (
    <>
      <div
        className="parallax p-10 flex text-white items-center justify-center"
        style={{
          backgroundImage:
            'url("https://www.cosmofirst.com/public/uploads/1656045416.contact--banner-cosmo.jpg")',
        }}
      >
        {/* Heading of the contact form */}
        <div className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-center tracking-wider drop-shadow-lg">
          CONTACT US
        </div>
      </div>

      <div className="my-10 px-6 sm:px-12 md:px-24 lg:px-32">
        <div className="text-center text-neutral-200 text-lg sm:text-xl leading-relaxed space-y-5">
          <p>
            Have a gift idea in mind? Want to personalize something special for a loved one?
          </p>
          <p>
            At <span className="text-amber-400 font-bold">Sparkify</span>, we bring your imagination to life with our wide range of
            customized gifts, t-shirts, and more — all from the heart of{" "}
            <span className="text-teal-300 font-medium">Hamirpur, Himachal Pradesh</span>.
          </p>
          <p>
            Drop us a message with your creative request — whether it’s a quirky design,
            a heartfelt message, or a bulk order for a special occasion, we’re here to help.
          </p>
          <p>
            We believe every gift should feel personal, and we’re excited to make yours truly one-of-a-kind.
          </p>
          <p className="text-pink-400 font-semibold italic">
            Let’s collaborate and create something awesome together!
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactHead;
