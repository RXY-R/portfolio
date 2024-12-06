"use client";

//#region Components imports
import Education from "./components/education/education";
import Skill from "./components/skill/skill";
//#endregion

//#region React hooks imports
import { useState, useEffect, useRef } from "react";
//#endregion

//#region Other imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#endregion

//#region Theme Icons
const LightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="fill-white cursor-pointer"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
    <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
    <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
    <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
    <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
    <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
    <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
    <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
  </svg>
);

const DarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="fill-yellow-200 cursor-pointer"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
  </svg>
);
//#endregion

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  //#region Theme
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    theme === "light"
      ? (setTheme("dark"),
        document.documentElement.setAttribute("data-theme", "dark"))
      : (setTheme("light"),
        document.documentElement.removeAttribute("data-theme"));
  };
  //#endregion

  //#region Animations
  const contentRef = useRef(null);
  const scrambleTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { filter: "blur(10px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 0.8, ease: "power2.in" }
    );

    const headings = document.querySelectorAll("section h1");
    const paragraphs = document.querySelectorAll("section p");

    [...headings, ...paragraphs].forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "bottom bottom-=50",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  //#endregion

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div ref={contentRef} className="main_container">
        <section className="intro_container">
          <div className="intro">
            <h1>Hi, I'm Orthee 👋</h1>
            <p>
              <strong>Software</strong> & <strong>Web Developer.</strong> I love
              building things and helping people. Very active on Facebook and
              Discord.
            </p>
          </div>

          <div className="pfp">
            <img src="https://files.catbox.moe/e4ashy.jpg" />
          </div>
        </section>

        <section className="about_container h1_font">
          <h1>About</h1>
          <p>
            I'm a Software and Web Developer with a passion for creating digital
            solutions. With 3 years of C# under my belt and 2 years diving into
            JavaScript and Node.Js, I've recently added HTML, CSS, React, and
            Next.js to my toolkit. I love turning ideas into reality and am
            always eager to take on new challenges.
          </p>
        </section>

        <section className="flex flex-col gap-6 h1_font">
          <h1>Education</h1>
          <Education
            img="https://files.catbox.moe/g1zy39.jpg"
            name="Alfred International School"
            more_info="Elementary School"
            date="June 2008 - July 2019"
          />
          <Education
            img="https://files.catbox.moe/9yubdd.png"
            name="Dhaka College"
            more_info="Educational institution of Bangladesh"
            date="Sep 2019 - April 2021"
          />
          <Education
            img="https://files.catbox.moe/59r79w.png"
            name="University of Liberal Arts"
            more_info="Computer science and engineering"
            date="Sep 2021 - Present"
          />
        </section>

        <section className="w-full flex flex-col gap-1 h-32 h1_font">
          <h1>Skills</h1>
          <div className="flex flex-wrap gap-1 w-full">
            <Skill skill="React" />
            <Skill skill="Next.Js" />
            <Skill skill="JavaScript" />
            <Skill skill="Node.Js" />
            <Skill skill="Electron" />
            <Skill skill="Express" />
            <Skill skill="Python" />
            <Skill skill="Go" />
            <Skill skill="Java" />
            <Skill skill="C#" />
            <Skill skill="C++" />
          </div>
        </section>

        <section className="w-full flex flex-col gap-5 items-center justify-center">
          <div className="h-7 px-3 rounded-[8px] bg-[var(--skills-box-color)] text-white font-semibold">
            <h1>My Projects</h1>
          </div>

          <div className="w-full text-center text-[var(--second-text-color)] text-lg">
            <p>
              I've worked on a variety of projects, from simple websites to
              complex web applications. Here are a two of my favorites.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          <div className="project_card">
            <a target="_blank" href="https://github.com/RXY-R">
              <video
                src="https://files.catbox.moe/o6fyv8.mp4"
                autoPlay={true}
                loop
                muted
                playsInline
              />
            </a>
            <div className="project_card_details">
              <div className="mx-1">
                <h1 className="font-semibold my-1">
                  A Video Streaming Platform
                </h1>
                <p className="text-[var(--third-text-color)]">
                  Mar 2024 - Sep 2024
                </p>
                <p className="text-[var(--second-text-color)] text-sm my-1">
                  I developed this anime streaming platform with React.js and
                  Electron. It features real-time video upscaling using custom
                  FFmpeg shaders.
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-auto mx-1 my-2">
                <div className="project_card_badge">
                  <h1>React</h1>
                </div>
                <div className="project_card_badge">
                  <h1>Electron</h1>
                </div>
                <div className="project_card_badge">
                  <h1>Tailwind CSS</h1>
                </div>
                <div className="project_card_badge">
                  <h1>JavaScript</h1>
                </div>
                <div className="project_card_badge">
                  <h1>Node.Js</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="project_card">
            <a target="_blank" href="https://github.com/RXY-R">
              <video
                src="https://files.catbox.moe/2yrbjw.mp4"
                autoPlay={true}
                loop
                muted
                playsInline
              />
            </a>
            <div className="project_card_details">
              <div className="mx-1">
                <h1 className="font-semibold my-1">
                  My Previous Portfolio
                </h1>
                <p className="text-[var(--third-text-color)]">
                  Oct 2024 - Oct 2024
                </p>
                <p className="text-[var(--second-text-color)] text-sm">
                  I created this portfolio for my sister using Next.js, with
                  MySQL as the database. Data is served to the webpage through a
                  Node.js Express API.
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-[auto] mx-1 my-2">
                <div className="project_card_badge">
                  <h1>Next.Js</h1>
                </div>
                <div className="project_card_badge">
                  <h1>Tailwind CSS</h1>
                </div>
                <div className="project_card_badge">
                  <h1>JavaScript</h1>
                </div>
                <div className="project_card_badge">
                  <h1>Node.Js</h1>
                </div>
                <div className="project_card_badge">
                  <h1>Express</h1>
                </div>
                <div className="project_card_badge">
                  <h1>MySQL</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />

        <section className="w-full flex flex-col gap-5 items-center justify-center">
          <div className="h-7 px-3 rounded-[8px] bg-[var(--skills-box-color)] text-white font-semibold">
            <h1>Contact</h1>
          </div>

          <div className="w-full flex flex-col gap-5 text-center text-[var(--primary-text-color)] text-xl font-bold">
            <p className="text-[var(--second-text-color)] text-lg font-normal">
              Ready to make it Official?
            </p>

            <a href="mailto:angshusadiq@gmail.com">Get in touch</a>
          </div>

          <div className="flex gap-4">
            <a target="_blank" href="https://github.com/RXY-R">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[var(--text-color)] cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
              </svg>
            </a>

            <a target="_blank" href="https://www.instagram.com/__.uzo.__/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[var(--text-color)] cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
              </svg>
            </a>

            <a target="_blank" href="https://www.facebook.com/ttttttagasiehvege">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[var(--text-color)] cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
              </svg>
            </a>
          </div>
        </section>

        <br />
      </div>

      <footer className="w-full min-h-9 mb-2 fixed bottom-0 left-0 flex items-center justify-center">
        <nav className="flex gap-1 items-center select-none rounded-[12px] md:shadow-md max-h-9 bg-[#222222]">
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
              </svg>
            </div>
          </a>

          <div className="w-[2px] h-9 bg-[#636363]"></div>

          <a onClick={() => window.scrollTo({ top: 388, behavior: "smooth" })}>
            <div className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="fill-white cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12l3 3l3 -3l-3 -3z" />
                <path d="M15 12l3 3l3 -3l-3 -3z" />
                <path d="M9 6l3 3l3 -3l-3 -3z" />
                <path d="M9 18l3 3l3 -3l-3 -3z" />
              </svg>
            </div>
          </a>

          <a onClick={() => window.scrollTo({ top: 650, behavior: "smooth" })}>
            <div className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-white cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1 -3 3h-5v2h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2h2v-2h-5a3 3 0 0 1 -3 -3v-9a1 1 0 1 1 0 -2zm-4.293 4.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414" />
              </svg>
            </div>
          </a>

          <div className="w-[2px] h-9 bg-[#636363]"></div>

          <a onClick={toggleTheme}>
            <div className="p-3">
              {theme === "light" ? <LightIcon /> : <DarkIcon />}
            </div>
          </a>
        </nav>
      </footer>
    </div>
  );
}
