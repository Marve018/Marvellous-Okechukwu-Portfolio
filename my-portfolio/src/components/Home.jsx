import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "./ScrollContext";
import hero_img from "../assets/hero_img.svg";
import github_icon from "../assets/github_icon.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import X_icon from "../assets/X_icon.svg";
import whatapp_icon from "../assets/whatapp_icon.svg";
import AOS from "aos"; // For animation
import "aos/dist/aos.css";
/* import ParticleEffect from "./ParticleEffect";*/
import { ButtonComponent } from "./Reuseables";
import { Download } from "lucide-react";
import TypewriterComponent from "./TypingEffect";

const Home = ({ sectionId }) => {
    const githubUrl = "https://github.com/Marve018";
    const linkedinUrl = "https://www.linkedin.com/in/marvellous-b8a1711b1/";
    const XUrl = "https://x.com/MarvellousOke10";

    const { setActiveSection } = useContext(ScrollContext);
    const sectionRef = useRef(null);

    // To get currecnt section for the reat particles
    const [currentSection, setCurrentSection] = useState("home");
  
    useEffect(() => {
      // Get current section for the react partcles
      const handleScroll = () => {
        // Determine the current section based on scroll position
        // For simplicity, let's assume 'home' section is at the top
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop < 100) {
          setCurrentSection("home");
        } else {
          setCurrentSection(""); // If not in the 'home' section
        }
      };

      // Animate on scroll
      AOS.init({ duration: 2000 }); // Initialize AOS
      AOS.refresh();
      AOS.refreshHard();
      AOS.refreshHard();
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      // Event listener for scrolling
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [setActiveSection, sectionId]);
  
    // Open Resume URL
    const openResumeUrl = () => {
      const resumeUrl = "https://drive.google.com/file/d/1tGu__A5QQSGSJXf0rpV3XvNVZvdpQR5e/view?usp=drive_link";
      window.open(resumeUrl, "_blank");
    };
  
    return (
      <div
        className=" px-10 max-md:px-5 pt-14 max-md:pt-5 max-sm:pt-3 flex max-lg:gap-20 max-lg:flex-col-reverse items-center w-full "
        id={sectionId}
        ref={sectionRef}
      >
        <div className=" w-[45%] max-lg:w-full flex justify-center">
          <img src={hero_img} className=" ml-0" alt="Marvellous Okechukwu picture"/* style={{ clipPath: 'circle(30%)', height: '500px'}}*//>
        </div>
        <div className=" w-[45%] max-lg:w-full flex flex-col gap-3">
          <div className=" font-extrabold text-5xl max-lg:text-4xl max-sm:text-3xl">
            <p data-aos="fade-right">Hi, my name is </p>
            <p>Marvellous Okechukwu</p>
          </div>
          <div className=" text-gold font-extrabold text-4xl max-lg:text-3xl max-sm:text-2xl">
            <TypewriterComponent />
          </div>
        <div className=" text-base font-medium">
          Skilled and proficient in Python, Node.js, React.js, Flask, Express.js
          JavaScript, C, RESTFUL APIs, MySQL, PostgreSQL, MongoDB and
          DevOps, consistently creating impactful, scalable, and secure solutions.
        </div>
        <div className=" flex gap-3 flex-wrap">
          <div className="flex gap-3 items-center">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <img className=" w-9" src={github_icon} alt="Github icon" />
            </a>

            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <img className=" w-9" src={linkedin_icon} alt="LinkedIn icon" />
            </a>

            <a href={XUrl} target="_blank" rel="noopener noreferrer">
              <img className=" w-9" src={X_icon} alt="X icon" />
            </a>

            </div>
          <ButtonComponent
            onClick={openResumeUrl}
            text="View Resume"
            image={<Download />}
          />
        </div>
      </div>
      {/*<ParticleEffect className="" /> */}
      {/* {currentSection === 'home' && <ParticleEffect className="" />} */}
    </div>
  );
};

export default Home;

