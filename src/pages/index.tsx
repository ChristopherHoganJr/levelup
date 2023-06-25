import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <section>
        <div className="mx-auto max-w-7xl">
          <h1>Hi, I&apos;m Chris.</h1>
          <p>
            Welcome to my portfolio website! With extensive experience in
            software engineering and computer hardware, I am well-equipped to
            help you with a wide range of projects and challenges. Whether
            you're looking for help with a software development project, or want
            to upgrade your computer hardware, I have the skills and expertise
            to help you achieve your goals. My focus on quality, reliability,
            and customer satisfaction sets me apart, and I am committed to
            delivering exceptional results that exceed your expectations. Thank
            you for visiting my portfolio website, and I look forward to working
            with you!
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl">
          <h2>Crafting Digital Experiences</h2>
          <p>
            As a full stack developer with expertise in Java, JavaScript,
            TypeScript, and Python, I pride myself on my ability to create
            clean, efficient code and solve complex problems with innovative
            solutions. My experience has taught me to approach development from
            both a technical and user-centered perspective, ensuring that the
            final product is both functional and intuitive. I am passionate
            about staying up to date with the latest technologies and techniques
            and constantly challenge myself by practicing coding challenges in
            my free time. Whether it's front-end design or back-end development,
            I am confident in my ability to deliver high-quality, scalable
            solutions that meet the needs of clients and users alike.
          </p>
          <h3>Some Stacks I Use:</h3>
          <ul>
            <li>
              Java with Spring Boot - enterprise-level applications that require
              high performance and reliability.
            </li>
            <li>
              Python with Flask - lightweight web framework that allows
              developers to build web applications quickly and easily.
            </li>
            <li>
              MERN - full-stack JavaScript framework that includes MongoDB,
              Express.js, React, and Node.js.
            </li>
            <li>
              Next.js - React-based open-source framework that allows developers
              to build server-side rendered React applications with ease
            </li>
            <li>
              T3 - full-stack TypeScript framework that includes Next.js, tRPC,
              Prisma, and NextAuth.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl">
          <h2>Data Center Expertise</h2>
          <p>
            Over the past three years, I have had the privilege of working in a
            dynamic and challenging data center environment. During this time, I
            have gained extensive experience building, configuring, testing, and
            replacing computer parts. Whether it's installing new servers,
            upgrading existing ones, or troubleshooting hardware issues, I have
            developed a deep understanding of the intricacies of computer
            hardware and the importance of maintaining a reliable and efficient
            data center infrastructure.
          </p>
          <p>
            As a key member of the data center team, I have been responsible for
            ensuring that all hardware is up-to-date, properly configured, and
            running smoothly. This has involved working closely with other team
            members to identify and address hardware issues, as well as
            collaborating with vendors and suppliers to ensure that we have
            access to the latest and most reliable hardware components. Through
            my work in the data center, I have gained a reputation for being
            detail-oriented, thorough, and highly skilled in all aspects of
            hardware management.
          </p>
          <p>
            Looking back on my time in the data center, I am proud of the many
            accomplishments I have achieved. From building out new server racks
            to replacing failed components in existing systems, I have played a
            key role in ensuring that the data center runs smoothly and
            efficiently. Through my work in this challenging environment, I have
            developed a deep appreciation for the importance of teamwork,
            attention to detail, and a commitment to excellence. Whether I am
            working on a complex hardware installation or troubleshooting a
            difficult issue, I am always striving to deliver the best possible
            results for my team and our clients.
          </p>
        </div>
      </section>
    </main>
  );
}
