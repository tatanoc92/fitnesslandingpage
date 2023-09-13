"use client";
import CountUp from "react-countup";

export default function Counter({ start, end, duration, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <CountUp
        className="font-bold"
        start={start}
        end={end}
        duration={duration}
      />
      <p className="uppercase tracking-wider text-xs">{label}</p>
    </div>
  );
}
