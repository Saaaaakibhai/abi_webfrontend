// eslint-disable-next-line no-unused-vars
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import anima from "../../../assets/growth.json"; 
import anima2 from "../../../assets/growth02.json";
import anima3 from "../../../assets/growth03.json";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#f2f9f4] w-full py-16 px-8">
        <h2 className="text-4xl font-semibold text-center text-[#22cc5d] ">
          About Us
        </h2>

        {/* Card 1 - Image on Right */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-black-200 mb-4">
              About Amanat Business Invest (ABI)
            </h3>
            <p className="text-black-200">
              ABI was founded on the core concept of
              <span className="font-bold text-[#22cc5d]"> Trust</span>,
              <span className="font-bold text-[#22cc5d]"> Transparency</span>{" "}
              and
              <span className="font-bold text-[#22cc5d]"> Integrity</span>. We
              understand that in today{"'"}s fast-paced financial world, people
              are seeking investment opportunities that are not only profitable
              but also aligned with their personal values and beliefs. With that
              in mind, we have designed and investment model that guarantees
              monthly returns through
              <span className="font-bold text-[#22cc5d]">
                {" "}
                Shariah-Complient{" "}
              </span>
              business ventures, giving you peace of mind that your money is
              being handled in a way that aligns with
              <span className="font-bold text-[#22cc5d]">
                {" "}
                Islamic-Principles.
              </span>
              What makes ABI unique is our commitment to making investments
              <span className="font-bold text-[#22cc5d]">
                {" "}
                accessible to everyone
              </span>
              . Whether you are a first-time investor taking your first steps in
              the financial world or someone looking to diversify your
              portfolio, ABI offers an inclusive platform designed to support
              your growth. We recognize the potential for even small investments
              to yield significant returns over time, and we take pride in
              helping individuals and families create a stable and prosperous
              financial future.
            </p>
          </div>
          <Player
                      autoplay
                      loop
                      src= {anima3} // Adjust the path as needed
                      style={{ height: "500px", width: "500px" }}
          />
        </div>

        {/* Card 2 - Image on Left */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-black-200 mb-4">
              Our Mission
            </h3>
            <p className="text-black-200">
              We believe that everyone deserves a chance to grow their wealth,
              regardless of their financial background. That{"'"}s why we offer
              accessible investment options, starting from as little as{" "}
              <span className="font-bold text-[#22cc5d]"> 500 BDT</span>,
              ensuring that anyone can participate and benefit from our
              services. Our goal is not just to deliver consistent financial
              returns, but to do so while upholding the highest standards of
              <span className="font-bold text-[#22cc5d]"> Integrity</span>,{" "}
              <span className="font-bold text-[#22cc5d]"> Transparency</span>,
              and <span className="font-bold text-[#22cc5d]"> Fairness</span>.
              At ABI, we are deeply committed to operating within the framework
              of{" "}
              <span className="font-bold text-[#22cc5d]"> Islamic finance</span>
              , ensuring that every investment is halal, ethical, and
              contributes positively to the community. We believe in building
              long-term partnerships with our investors, rooted in{" "}
              <span className="font-bold text-[#22cc5d]"> Trust </span>
              and{" "}
              <span className="font-bold text-[#22cc5d]"> Mutual growth</span>.
              As we grow together, we aim to foster a culture of responsibility
              and shared success, where every small investment has the potential
              to make a meaningful impact. Join us at ABI, and experience a new
              way to invest—one that not only offers the potential for financial
              prosperity but also aligns with your values. Together, we can
              create a future of{" "}
              <span className="font-bold text-[#22cc5d]">
                {" "}
                sustainable growth
              </span>
              ,{" "}
              <span className="font-bold text-[#22cc5d]">
                {" "}
                ethical investment
              </span>
              , and{" "}
              <span className="font-bold text-[#22cc5d]"> shared sucess</span>.
            </p>
          </div>
          <Player
                      autoplay
                      loop
                      src= {anima} // Adjust the path as needed
                      style={{ height: "500px", width: "500px" }}
          />
        </div>

        {/* Card 3 - Image on Right */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-black-200 mb-4">
              How Do You Make Money At Amanat Business Invest (ABI)
            </h3>
            <p className="text-black-200">
              We generate profit through a diversified range of ethical,
              <span className="font-bold text-[#22cc5d]">
                {"  "}
                Shariah-compliant{" "}
              </span>
              investment activities. These include: Partnership in Business
              Ventures: We collaborate with small and medium enterprises (SMEs),
              offering capital for growth and development. In return, we share
              in the profits generated by these businesses. Halal Trade and
              Commerce: We engage in halal trading activities, such as buying
              and selling goods, where all transactions follow Islamic
              guidelines, ensuring fair and ethical trade. Real Estate
              Development: We invest in real estate projects that are compliant
              with Islamic principles, focusing on sectors like housing and
              commercial properties that provide a stable return over time.
              Equity Participation: ABI also partakes in Shariah-compliant
              equity markets, where we invest in businesses that meet the
              ethical standards of Islamic finance. This includes companies in
              industries such as healthcare, education, and technology. By
              ensuring all investments are halal, we generate revenue in a
              manner that benefits both our investors and the broader community
              while staying true to Islamic financial principles. Let me know if
              you need any further adjustments!
            </p>
          </div>
          <Player
                      autoplay
                      loop
                      src= {anima2} // Adjust the path as needed
                      style={{ height: "500px", width: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
