import About from "@/components/About";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEEE BIT",
  description: "IEEE student branch at Banglore Institute of Technology",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  // Define the information object for the About component
  const aboutInformation = [
    {
      heading: "EDA Center of Excellence",
      para: "The grand opening of our Center of Excellence on EDA Tools and the insightful workshop on CAD Infrastructure for VLSI Design, organized by IEEE BIT SB, were milestones in our tech journey. 🚀✨ A heartfelt thank you to everyone who joined us, including the dynamic speaker, Mr. Alok Das, whose expertise added immense value to the event! 🙌🔧 Stay tuned for more exciting tech ventures!",
      image: {
        src: "/images/events/eda.png",
        alt: "about image 1",
      },
    },
    {
      heading: "Among Us: Real Life Edition",
      para: "Are you ready to step into a real-life game of deception and deduction? Prepare yourself for an experience like no other as we bring the thrilling world of Among Us to life❗You'll find yourself questioning everyone around you, wondering who among your friends can be trusted and who might be the imposter in disguise.🚫👩‍🚀🔫🤫Are you up for the challenge?Register soon for an exciting and fun filled game‼️",
      image: {
        src: "/images/events/amongus.png",
        alt: "about image 1",
      },
    },
    {
      heading: "Manthan: Monopoly",
      para: "Wheeling, dealing, and buying up the town – Monopoly: Where real estate dreams come to life!💰👯‍♂Join us for a real-life version. Buy, sell and rent..Make money or lose money... 🪩Join us to find out.. 🏃🏃‍♀",
      image: {
        src: "/images/events/monopoly.png",
        alt: "about image 1",
      },
    },
    {
      heading: "Manthan: RC Racecars",
      para: "This MANTHAN, 🏁Get ready to roll up your sleeves and race into the amazing world of football with our next gen Remote Control Cars🚗🚗Join us for an exciting event - RC car Soccer.Control your cars efficiently and score goals.🎮🎮Answer soccer related questions for bonus points and knock it out of the park⚽🥅",
      image: {
        src: "/images/events/rccar.png",
        alt: "about image 1",
      },
    },
    {
      heading: "Sensor And Its Applications",
      para: "IEEE BIT Presents: Sensor and its Application Workshop! 🛠💫Dive into the world of sensors and unleash your creativity! Join us for a hands-on workshop where technology meets innovation. From sensor fabrication to IoT applications, this event is a gateway to cutting-edge projects.🥳 Our speaker for this event is Dr.Kendaganna Swamy S is a distinguished Assistant Professor in the Department of Electronic and Instrumentation Engineering at RV College of Engineering, Bengaluru, with a remarkable 12 years of teaching and 3 years of industrial experience.He holds undergraduate, postgraduate, and doctoral degrees in electronics, showcasing a profound academic journey.",
      image: {
        src: "/images/events/sensors.png",
        alt: "about image 1",
      },
    },
  ];

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 bg- text-body-color dark:text-white text-center mt-5">Our Grand Events</h1>

      {aboutInformation.map((aboutInfo, index) => (
        <About
          key={index}
          heading={aboutInfo.heading}
          para={aboutInfo.para}
          image={aboutInfo.image}
        />
      ))}
      <Faq />
      {/* <Clients /> */}
    </main>
  );
}
