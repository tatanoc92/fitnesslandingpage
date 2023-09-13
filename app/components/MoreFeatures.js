"use client";
import Card from "../components/Card.js";
import { motion } from "framer-motion";
import Logo from "../../public/Logo.png";
import {
  ShieldCheckIcon,
  MapIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

const Cards = [
  {
    title: "Simplified, Tailored Workout Plans",
    description:
      "Forget the overwhelming and contradictory fitness advice online. Our app creates a personalized, straightforward workout plan that's uniquely yours. No need to plan - just start.",
    image: Logo,
    icon: MapIcon,
  },
  {
    title: "Automated Progress Tracking​​",
    description:
      "We track your workout performance and progress automatically, so you can focus on the action, not the analysis. Watch yourself improve without getting lost in the numbers.",
    image: Logo,
    icon: PresentationChartLineIcon,
  },
  {
    title: "Preventive Rehab Exercises​​",
    description:
      "Reduce your risk of injuries with our preventive rehab exercises. We provide you with the right exercises based on your profile - no need to research or second guess.",
    image: Logo,
    icon: ShieldCheckIcon,
  },
];

export default function MoreFeatures() {
  return (
    <div className="grid grid-cols-3 mx-4 my-6 place-items-center gap-0">
      {Cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          icon={card.icon}
        >
          <card.icon className="h-12 w-12 text-white" />
        </Card>
      ))}
    </div>
  );
}
