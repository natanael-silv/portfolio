"use client";

import Image from "next/image";
//import { useTheme } from "next-themes";
import { Fade, Bounce } from "react-awesome-reveal";
import NextLogo from "/public/svgs/next.svg";
import NodeLogo from "/public/svgs/node.svg";
import ReactLogo from "/public/svgs/react.svg";
import SassLogo from "/public/svgs/sass.svg";
import StoryLogo from "/public/svgs/story.svg";
import TailwindLogo from "/public/svgs/tailwind.svg";
import TypescriptSvg from "/public/svgs/ts.svg";
import JavaScriptSvg from "/public/svgs/javascript.svg";
import DownloadSvg from "public/svgs/DownloadSimple.svg";
import ProjectsCard from "./components/ProjectsCard";

export default async function Home() {
  return (
    <>
      <main className=" md:text-xl">
        <Fade direction="left" triggerOnce >
          <section className="w-full mb-28 flex flex-col min-[875px]:flex-row items-center">
            <div className="mb-4 p-5 rounded-full bg-[#ffff] dark:bg-[#ffff] md:mr-6 transition duration-500 ease-in-out">
              <Image
                src="/images/profile_img.png"
                width={300}
                height={300}
                alt="A profile picture of me"
                className="md:max-w-[100vw] rounded-full"
                sizes="(min-width: 758px) 480px"
              />
            </div>
            <div className="mb-8 max-w-[340px] ">
              <h1 className="text-[#3c3c43] dark:text-white inline font-semibold transition ">
                I am Natanael,
                {"  "}
              </h1>
              a front-end developer with a passion for various technologies. I
              create modern and high-quality user interfaces, emphasizing
              performance, animations, responsiveness, and SEO (Search Engine
              Optimization).
              <div className="flex flex-col  md:flex-row items-center mt-6  font-semibold">
                <a
                  href="/downloads/resume.pdf"
                  download
                  className="flex md:mr-4 justify-center btn mb-4 md:mb-0 px-3 py-2 items-center rounded-full hover:cursor-pointer text-[#252525] dark:text-white bg-transparent outline outline-1 dark:outline-0  dark:bg-[#252525]"
                >
                  Download CV{" "}
                  <DownloadSvg className="mx-1 fill-[#3c3c43] dark:fill-white h-[20px] w-[20px]" />
                </a>
                <a
                  href="mailto:natanael.silva.souza62@gmail.com"
                  className="dark:bg-white btn bg-[#252525] text-[#fefefe] dark:text-[#191919] py-2 px-3 bg:text-[#3c3c43] rounded-full"
                >
                  Hire me
                </a>
              </div>
            </div>
          </section>
        </Fade>
        <Fade direction="down" triggerOnce>
          <section className="w-full mb-28">
            <h2 className="font-bold text-[#3c3c43] dark:text-white bg:text-white mb-8">
              Projects
            </h2>
            <div className="grid md:grid-cols-3 justify-center gap-4">
              <ProjectsCard
                title="To do List"
                description="Add your thoughts and never forget again"
                src="/"
              />
              <ProjectsCard
                title="To do List"
                description="Add your thoughts and never forget again"
                src="/"
              />
              <ProjectsCard
                title="To do List"
                description="Add your thoughts and never forget again"
                src="/"
              />
            </div>
          </section>
        </Fade>

        <section className="w-full mb-28">
          <h2 className="font-bold text-[#3c3c43] dark:text-white bg:text-white mb-8">
            {" "}
            Skills
          </h2>
          <div className="grid items-center  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <Fade cascade triggerOnce duration={500}>
              <div
                className="svg-bg"
                title="Javascript"
                tabIndex={0}
                role="image"
              >
                <JavaScriptSvg className="fill-[#3c3c43] dark:fill-white " />
              </div>
              <div className="svg-bg" title="Nextjs" tabIndex={0} role="image">
                <NextLogo className="fill-[#3c3c43] dark:fill-white" />
              </div>
              <div className="svg-bg" title="Nodejs" tabIndex={0} role="image">
                <NodeLogo className="fill-[#3c3c43] dark:fill-white" />
              </div>
              <div className="svg-bg" title="React" tabIndex={0} role="image">
                <ReactLogo className="fill-[#3c3c43] dark:fill-white" />
              </div>
              <div className="svg-bg" title="Sasscss" tabIndex={0} role="image">
                <SassLogo className="fill-[#3c3c43] dark:fill-white" />
              </div>
              <div
                className="svg-bg"
                title="storybook"
                tabIndex={0}
                role="image"
              >
                <StoryLogo className="fill-[#3c3c43] dark:fill-white" />
              </div>
              <div
                className="svg-bg"
                title="tailwind"
                tabIndex={0}
                role="image"
              >
                <TailwindLogo className="fill-[#3c3c43] dark:fill-white" />
              </div>
              <div
                className="svg-bg"
                title="typescript"
                tabIndex={0}
                role="image"
              >
                <TypescriptSvg className="fill-[#3c3c43] dark:fill-white" />
              </div>
            </Fade>
          </div>
        </section>
      </main>
    </>
  );
}
