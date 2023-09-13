"use client";
import Image from "next/image";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Header from "./components/Header";
import PartnerSlider from "./components/PartnerSlider";
import Card from "./components/Header";
import MoreFeatures from "./components/MoreFeatures";
import Footer from "./components/Footer";
import Features from "./components/Features";
import SmoothScroll from "./components/SmoothScroll";

const counterData = [
  {
    start: 0,
    end: 50,
    duration: 5,
    label: "Expert coaches & physiotherapists",
  },
  { start: 0, end: 5000, duration: 5, label: "satisfied clients" },
  { start: 0, end: 20, duration: 5, label: "trusted clinics & gyms" },
];

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 bg-white z-10">
        <Header />
      </div>
      <SmoothScroll>
        <main id="first-page" className="h-screen">
          <div>
            {/* First page */}
            <div className="flex justify-center items-center h-100vh">
              <div className="grid grid-cols-2 px-16 pt-16 pb-8">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="h1 pb-8">
                    Achieving health & fitness goals, made
                    <span className="text-primary"> simple.</span>
                  </h1>
                  <h2 className="pb-4">
                    We have taken the guesswork out of achieving your health and
                    fitness goals. With NgineFitness, get personalized workouts
                    and rehabilitation plans, expert advice, and the support you
                    need to succeed. Let us power your fitness journey, while
                    you focus on smashing your goals!
                  </h2>
                  <div className="py-8 flex gap-4">
                    {counterData.map((counter, index) => (
                      <Counter
                        key={index}
                        start={counter.start}
                        end={counter.end}
                        duration={counter.duration}
                        label={counter.label}
                      />
                    ))}
                  </div>
                  <div className="flex gap-6 justify-center">
                    <Button color={"primary"} text={"Become a beta-tester"} />
                    <Button color={""} text={"Learn more"} />
                  </div>
                  <div className="text-center mt-8 w-full">
                    <h3 className="h3">Sign up to our newsletter!</h3>
                    <input type="text" className="input" placeholder="email" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  {/* avatar image */}
                  <Image
                    className="ml-0"
                    src={"/Logo.png"}
                    alt="company logo"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
            {/* Slider for sponsors  */}
            <div className="flex justify-center items-center">
              <PartnerSlider />
            </div>
            {/* Features */}
            <div id="features" className="py-8">
              <Features />
              <Button color={"primary"} text={"Become a beta-tester"} />
            </div>
            {/* Second page */}
            <div id="second-page" className="grid grid-cols-2 px-16 pt-16 pb-8">
              <div className="flex justify-center items-center">
                {/* avatar image */}
                <Image
                  className="ml-0"
                  src={"/Logo.png"}
                  alt="company logo"
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-center items-center m-8">
                <h2 className="h2 pb-4">
                  About
                  <span className="text-primary"> NgineFitness.</span>
                </h2>
                <h2 className="pb-8">
                  We are NgineFitness, an innovative team of fitness
                  enthusiasts, AI experts, and tech innovators. Our vision: to
                  revolutionize personal fitness by democratizing access to
                  top-tier fitness resources, professional coaching, and a
                  supportive community.
                </h2>
                <ul className="pb-8">
                  <li className="pb-4">
                    <span className="mr-2">➡️</span>
                    Our vision: to revolutionize personal fitness by
                    democratizing access to top-tier fitness resources,
                    professional coaching, and a supportive community.
                  </li>
                  <li className="pb-4">
                    <span className="mr-2">➡️</span>
                    Our mission: to simplify fitness, making it accessible and
                    personalized through AI-driven recommendations, data-based
                    progress tracking, and a user-friendly interface.
                  </li>
                  <li className="pb-4">
                    <span className="mr-2">➡️</span>
                    Our promise: to deliver an intuitive, fast, and
                    scientifically-backed fitness app that serves as your
                    personal coach and caters to your unique fitness goals,
                    supporting your journey towards a stronger, healthier you.
                  </li>
                </ul>
                <div className="flex gap-6 justify-center">
                  <Button color={"primary"} text={"Become a beta-tester"} />
                </div>
              </div>
            </div>
            {/* More features */}
            <div id="moreFeatures" className="py-16">
              <MoreFeatures />
              <Button color={"primary"} text={"Become a beta-tester"} />
            </div>
            <div className="flex justify-center items-center pt-16">
              <h1 className=" h1">What our partners have to say!</h1>
            </div>
            <div className="flex justify-center items-center">
              <PartnerSlider />
            </div>
          </div>
          <div className="pt-32">
            <Footer />
          </div>
        </main>
      </SmoothScroll>
    </div>
  );
}
