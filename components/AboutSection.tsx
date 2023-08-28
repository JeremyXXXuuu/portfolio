import React from "react"
import Image from "next/image"
import Link from "next/link"

const skills = [
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Nodejs" },
  { skill: "Python" },
  { skill: "Pandas" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Electron" },
  { skill: "Tailwind CSS" },
  { skill: "Redis" },
  { skill: "Git" },
  { skill: "Docker" },
  { skill: "Cloud Service" },
  { skill: "OAUTH2" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Huamao and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Paris, FR.
            </p>
            <br />
            <p>
              I hold a Master&rsquo;s degree in Computer Engineering from UNIVERSITÉ DE TECHNOLOGIE, 
              along with a Bachelor&rsquo;s degree in Computer Science from SHU, 
              and I have continued to work in the field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <br />
            <p> This is my blog: 
              <Link 
                href="https://jeremys-blog.vercel.app/blog"
                className="text-teal-500 font-semibold"
              >
                {" "}https://jeremys-blog.vercel.app/
              </Link>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/portfolio/computer_boy.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
