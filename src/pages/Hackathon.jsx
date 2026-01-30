import Countdown from "../components/Hackthon Countdown/Countdown";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Banner from "../components/Banner";

export default function Hackathon() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fileType, setFileType] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [randomFileUrl, setRandomFileUrl] = useState("");
  const [fileDuration, setFileDuration] = useState(0);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);
  var interval = 0;

  const fetchRandomFile = async () => {
    try {
      const response = await axios.get(
        "https://flask-hello-world-lime-rho.vercel.app/api/random-file",
        {
          params: { folder: "Revathon" },
        },
      );

      console.log("Random file response:", response);
      const fileUrl = response.data.url;
      setRandomFileUrl(fileUrl); // Set the file URL before setting the file type

      const fileExtension = fileUrl.split(".").pop().toLowerCase();

      console.log("Duration", response.data);
      if (["mp4", "webm", "ogg"].includes(fileExtension)) {
        setFileType("video");
        console.log("Duration", response.data.duration);
        setFileDuration(response.data.duration * 1000);
      } else if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
        setFileType("image");
        setFileDuration(Math.floor(Math.random() * 7000) + 2000);
      }
    } catch (error) {
      console.error("Error fetching random file:", error);
    }
  };

  useEffect(() => {
    console.log("UseEffect 2");
    const loadImage = async () => {
      await fetchRandomFile();
    };
    setInterval(() => {
      console.log("Fetching random file...");
      console.log("Interval", interval);
      interval++;
      loadImage();
    }, fileDuration + 15000);
  }, []);

  useEffect(() => {
    console.log("UseEffect 3");
    if (!randomFileUrl) return; // Prevent execution if URL is empty

    setIsVisible(false);
    setImageLoaded(false);

    if (fileType === "image") {
      console.log("Image file detected");
      const img = new Image();
      img.src = randomFileUrl;
      setImageLoaded(true);
      img.onload = () => {
        console.log("Image loaded");
        setIsVisible(true);

        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, fileDuration);
      };
    } else if (fileType === "video") {
      console.log("Video file detected");
      setImageLoaded(true);
      setIsVisible(true);
      console.log(isVisible, fileDuration);

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, fileDuration);
    }
  }, [randomFileUrl]); // Run only when `randomFileUrl` changes

  return (
    <div className="relative flex flex-col items-center justify-between w-full h-screen overflow-hidden bg-black">
      <div className="z-10 flex items-center justify-center w-screen text-2xl text-white h-28 font-mech bg-primary">
        <Banner />
      </div>

      <div className="bg-[url('/assets/images/pattern.jpeg')] absolute w-full h-full z-0 opacity-30 bg-cover  top-0 left-0 "></div>

      <Countdown />
      <div className="z-10 flex items-center justify-center w-screen text-2xl text-white h-28 font-mech bg-primary">
        <Banner reverse={true} />
      </div>
      <div
        className="absolute top-0 right-0 z-40 w-screen h-screen bg-black"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s" }}>
        <div className="relative flex items-center justify-center w-full h-full">
          {imageLoaded && fileType === "image" && (
            <img
              src={randomFileUrl}
              alt="Random"
              className="transition-opacity duration-500 opacity-100"
            />
          )}
          {imageLoaded && fileType === "video" && (
            <video
              autoPlay
              ref={videoRef}
              src={randomFileUrl}
              className="z-40 transition-opacity duration-500 opacity-100"
            />
          )}
        </div>
      </div>
    </div>
  );
}
