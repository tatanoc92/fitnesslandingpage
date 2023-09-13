"use client";
import Card from "../components/Card.js";
import { motion } from "framer-motion";
import Logo from "../../public/Logo.png";

const Cards = [
  {
    title: "Access to Expert Coaches and AI-Powered Advice",
    description:
      "Experience the future of fitness with expert coaches and AI advice at your fingertips. Personalized workout guidance, injury rehabilitation support, and instant health answers - all in one app.",
    image: Logo,
  },
  {
    title: "Engaging Fitness Community & Sharing​​",
    description:
      "Join a supportive fitness community that celebrates shared progress and success. Connect with like-minded individuals, trainers, and physiotherapists, turning your fitness journey into a collaborative experience.",
    image: Logo,
  },
  {
    title: "Personalized Fitness Tracking & Optimization​​",
    description:
      "No more one-size-fits-all plans. With NgineFitness, enjoy tailored workouts based on your goals and progress, coupled with insightful tracking tools for continual performance optimization.",
    image: Logo,
  },
];

export default function Features() {
  return (
    <div className="grid grid-cols-3 mx-8 my-12 place-items-center">
      {Cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}
