import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiSteamworks,
  SiSwift,
  SiTeamcity,
  SiTensorflow,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobeillustrator, SiAdobephotoshop],
      },
      {
        title: "Mobile App Development",
        icons: [SiReact, SiFlutter, SiSwift],
      },
      {
        title: "Artificial Intelligence",
        icons: [FaPython, SiTensorflow, SiPytorch, SiKeras],
      },
      {
        title: "Data Analysis",
        icons: [FaPython, SiPandas, SiNumpy],
      },
      {
        title: "Database Management",
        icons: [SiMysql, SiPostgresql, SiMongodb, SiFirebase],
      },
     ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Intra College Hackathon",
        stage: "2022 - 2023",
      },
      {
        title: "Intra College Best Project",
        stage: "2022 - 2023",
      },
      {
        title: "National Level Hackathon",
        stage: "2024 - 2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Facilitator - Gyalpozhing College of Information Technology",
        stage: "2021 - 2022",
      },
      {
        title: "Project Lead - Finance App @ Gyalpozhing College of Information Technology",
        stage: "2022 - 2023",
      },
      {
        title: "Assistant Director of Industry Projects - GCIT Start-Up/Devforge",
        stage: "2022 - 2023",
      },
      {
        title: "Director of Industry Projects - GCIT Start-Up/ GCIT Devforge",
        stage: "2023 - 2024",
      },
      {
        title: "Team Lead - DigiOps",
        stage: "2023 - Present",
      },
      {
        title: "Team Lead - Druk Beyonders",
        stage: "2023 - Present",
      },
      {
        title: "Technical Associate - Lakhor",
        stage: "2024 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Middle School - Gedu Higher Secondary School",
        stage: "2016",
      },
      {
        title: "Higher Secondary School - Ugyen Academy, Gedu Higher Secondary School",
        stage: "2018-2019",
      },
      {
        title: "Bachelors of Science in Information Technology - Gyalpozhing College of Information Technology",
        stage: "2020-2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="relative z-10 max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <p>
              My journey began as a dedicated student, which evolved into a student technopreneur role over the past 4 years. Starting with freelance development, I have since been able to merge my academic pursuits with practical experience by collaborating on innovative digital products and consulting for startups.
            </p>
          </motion.div>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
