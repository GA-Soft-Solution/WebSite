import React, { useState, useEffect, useRef } from "react";
import countersData from "../data/counters-data";

interface CounterProps {
  end: number;
  duration: number;
  suffix: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate count when visible
  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) requestAnimationFrame(animateCount);
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center justify-center text-center w-full h-auto"
    >
      {/* Number */}
      <div
        className="
          font-bold text-blue-600 mb-2
          [font-size:clamp(3.2rem,6vw,4rem)]
          sm:[font-size:clamp(2.3rem,2vw,3rem)]
          md:[font-size:clamp(2.5rem,3vw,3.5rem)]
          lg:[font-size:clamp(2.5rem,6vw,4rem)]
        "
      >
        {count}
        {suffix}
      </div>

      {/* Label */}
      <div
        className="
          font-semibold text-blue-600
          [font-size:clamp(1.2rem,2vw,1.25rem)]
          sm:[font-size:clamp(1.3rem,1.5vw,1.3rem)]
          md:[font-size:clamp(1.1rem,1vw,1.25rem)]
          lg:[font-size:clamp(1.3rem,0.8vw,2.25rem)]
        "
      >
        {label}
      </div>
    </div>
  );
};

interface CounterData {
  id: string | number;
  end: number;
  duration: number;
  suffix: string;
  label: string;
}

const CounterSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 pb-10 sm:pb-14 md:pb-18 lg:pb-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {countersData.map((counter: CounterData) => (
            <Counter
              key={counter.id}
              end={counter.end}
              duration={counter.duration}
              suffix={counter.suffix}
              label={counter.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
