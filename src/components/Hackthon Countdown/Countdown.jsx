import React, { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown() {
  const [digit1, setDigit1] = useState(0);
  const [digit2, setDigit2] = useState(0);
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-02-01T11:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div
      id="countdown"
      className="h-[60vh] font-primary gap-6  w-screen max-[500px]:h-[30vh] max-[500px]:justify-between max-[500px]:p-4 max-[430px]:items-center bg-transparent flex max-[430px]:flex-wrap justify-center  font-audiowide items-center relative text-white z-30 select-none">

      
      <div className="hours z-10 flex max-[500px]:flex-col max-[500px]:items-center">
        <div className="number flex text-[8vw] max-[500px]:text-[15vw] max-[400px]:text-[17vw] text-primary">
          {Array.from((timeLeft.hours || "00").toString().padStart(2, "0")).map(
            (digit, index) => (
              <div key={index} className={`digit   digit-${index}`}>
                {digit}
              </div>
            )
          )}
        </div>
        <div className="flex items-center ">
          <div className="text relative -left-10 min-[500px]:-rotate-90 text-2xl max-[400px]:text-xl max-[500px]:text-lg text-secondary">
            hours
          </div>
        </div>
      </div>
      <div className="minutes z-10 flex max-[500px]:flex-col max-[500px]:items-center">
        <div className="number flex text-[8vw] max-[500px]:text-[15vw] max-[400px]:text-[17vw] text-primary">
          {Array.from(
            (timeLeft.minutes || "00").toString().padStart(2, "0")
          ).map((digit, index) => (
            <div key={index} className={`digit digit-${index}`}>
              {digit}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div className="text -left-8 relative min-[500px]:-rotate-90 text-2xl max-[400px]:text-xl max-[500px]:text-lg text-secondary">
            mins
          </div>
        </div>
      </div>
      <div className="seconds z-10 flex max-[500px]:flex-col max-[500px]:items-center">
        <div className="number flex text-[8vw] max-[500px]:text-[15vw] max-[400px]:text-[17vw] text-primary">
          {Array.from(
            (timeLeft.seconds || "00").toString().padStart(2, "0")
          ).map((digit, index) => (
            <div key={`${digit}-${index}`} className="digit">
              {digit}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div className="text relative -left-6 min-[500px]:-rotate-90 text-xl max-[400px]:text-xl max-[500px]:text-lg text-secondary">
            sec
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
