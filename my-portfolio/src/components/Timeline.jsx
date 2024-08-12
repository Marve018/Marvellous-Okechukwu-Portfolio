import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LaptopIcon, School2Icon, Star } from "lucide-react";

function Timeline() {
  return (
    <>
      <VerticalTimeline lineColor="white">
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(222, 193, 39, 100%)",
          }}
          date={<span style={{ color: "white" }}>Oct 2023 - present</span>}
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<Star />}
        >
          <h3 className="vertical-timeline-element-title">
            Filed/Research Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            Global BioTech Potato Partnership
          </h4>
          <p>
          Under the PI. my duties include 
        - Conduct field research and data collection for biotech potato projects.
        - Collaborate with cross-functional teams to analyze research findings and develop solutions.
        - Prepare reports and presentations on research outcomes.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          date={<span style={{ color: "white" }}>2023 - 2024</span>}
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<LaptopIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Software Engineering Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            ALX Africa
          </h4>
          <p>
            Horned my skills with the use of programming languages and
            frameworks such as C, Javascript, Python, React JS, Node JS, MySQL,
            Test Driven Development, Web infrastructure design. And also other
            tools such as Git and GitHub, Bash scripting, Data Structure and
            Algorithms and dubugging.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(222, 193, 39, 100%)",
          }}
          date={<span style={{ color: "white" }}>Feb 2024 - July 2024</span>}
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<Star />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            Nobel Navigators 
          </h4>
          <p>
            Gained knowledge on internet troubleshooting, pitch and presentation,
            web design and leadership. I also hand the respocibility of facilitating my fellow
            interns on Internet troubleshooting. I also facilitated new interns on leadership.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(222, 193, 39, 100%)",
          }}
          date={<span style={{ color: "white" }}>Jan 2024 - Mar 2024</span>}
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<Star />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern Consultant
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            National Root Crops Research Institute (NRCRI) Umudike, Nigeria 
          </h4>
          <p>
            Assisted in wordpress website maintenance.
            Assisted in staff training on website managemennt.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(222, 193, 39, 100%)",
          }}
          date={<span style={{ color: "white" }}>Feb 2022 - Aug 2022</span>}
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<Star />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            National Root Crops Research Institute (NRCRI) Umudike, Nigeria · Internship 
          </h4>
          <p>
            Assisted in the design and maintenance of agricultural machinery.
            Supported the implementation of engineering solutions to improve farm productivity.
            Conducted experiments and collected data for research projects.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          date="2017 - 2022"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<School2Icon />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Eng in Agricultural and Bioresources Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            Michael Okpara University of Agriculture Umudike, Abia state Nigeria
          </h4>
          <p>
            Graduated with B.Eng in Agricultural and Bioresources Engineering
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Timeline;
