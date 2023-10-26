"use client";
import React, { useState, useEffect } from "react";

const AchievementsSection = () => {
  const [count1, setCount1] = useState(Math.floor(Math.random() * 100));
  const [count2, setCount2] = useState(Math.floor(Math.random() * 100));
  const [count3, setCount3] = useState(Math.floor(Math.random() * 100));
  const [count4, setCount4] = useState(Math.floor(Math.random() * 100));

  useEffect(() => {
    const randomToFixNumber1 = setTimeout(() => {
      setCount1(0);
    }, 1);

    const counterInterval1 = setInterval(() => {
      setCount1((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 100) {
          clearInterval(counterInterval1);
        }
        return newCount;
      });
    }, 1);

    const randomToFixNumber2 = setTimeout(() => {
      setCount2(0);
    }, 1);

    const counterInterval2 = setInterval(() => {
      setCount2((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 150) {
          clearInterval(counterInterval2);
        }
        return newCount;
      });
    }, 1);

    const randomToFixNumber3 = setTimeout(() => {
      setCount3(0);
    }, 1);

    const counterInterval3 = setInterval(() => {
      setCount3((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 4) {
          clearInterval(counterInterval3);
        }
        return newCount;
      });
    }, 100);

    const randomToFixNumber4 = setTimeout(() => {
      setCount4(0);
    }, 100);

    const counterInterval4 = setInterval(() => {
      setCount4((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 2) {
          clearInterval(counterInterval4);
        }
        return newCount;
      });
    }, 1);

    return () => {
      clearInterval(counterInterval1);
      clearTimeout(randomToFixNumber1);
      clearInterval(counterInterval2);
      clearTimeout(randomToFixNumber2);
      clearInterval(counterInterval3);
      clearTimeout(randomToFixNumber3);
      clearInterval(counterInterval4);
      clearTimeout(randomToFixNumber4);
    };
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="md:border-[#33353F] border sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <h2 className="text-white text-4xl font-bold flex flex-row">
            {count1.toLocaleString()}+
          </h2>
          <p className="text-[#ADB7BE] text-base">Projects</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <h2 className="text-white text-4xl font-bold flex flex-row">
            {count2.toLocaleString()}+
          </h2>
          <p className="text-[#ADB7BE] text-base">Users</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <h2 className="text-white text-4xl font-bold flex flex-row">
            {count3.toLocaleString()}+
          </h2>
          <p className="text-[#ADB7BE] text-base">Awards</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <h2 className="text-white text-4xl font-bold flex flex-row">
            {count4.toLocaleString()}+
          </h2>
          <p className="text-[#ADB7BE] text-base">Years</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
