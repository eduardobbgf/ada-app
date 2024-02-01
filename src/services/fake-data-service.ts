import { Interview } from "@/src/entities/interview";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fakeInterviewData: Interview[] = [
  {
    id: "1",
    chat: {
      conversationHistory: [],
    },
    jobPosition: {
      description:
        "Passionate about crafting elegant user interfaces? Join us as a Front-end Developer! As a key member of our development team, you will collaborate with designers to implement visually stunning and responsive web applications. Proficiency in HTML, CSS, and JavaScript is essential, and experience with React or Angular is a plus. Bring your creativity and technical expertise to deliver seamless user experiences.",
      experience: 2,
      id: "1",
      stacks: ["JavaScript", "React"],
      title: "Front-end Developer",
    },
  },
  {
    id: "2",
    chat: {
      conversationHistory: [],
    },
    jobPosition: {
      description:
        "Excited about server-side development? Join us as a Back-end Developer! As a vital part of our tech team, you will be responsible for building robust server-side applications using technologies like Node.js and Express. Experience with databases, API design, and cloud services is desirable. If you are passionate about creating scalable and efficient backend systems, we want to hear from you!",
      experience: 3,
      id: "2",
      stacks: [
        "Node.js",
        "Express",
        "AWS",
        "SQL",
        "Firebase",
        "Kubernets",
        "RDS",
        "EC2",
      ],
      title: "Back-end Developer",
    },
  },
  {
    id: "3",
    chat: {
      conversationHistory: [],
    },
    jobPosition: {
      description:
        "Love working on both client and server-side? Join us as a Full-stack Developer! In this role, you will have the opportunity to contribute to both frontend and backend development, creating end-to-end solutions. Proficiency in JavaScript, along with frameworks like React and Node.js, is required. If you are a versatile developer eager to tackle diverse challenges, apply now!",
      experience: 1,
      id: "3",
      stacks: ["JavaScript", "React", "Node.js"],
      title: "Full-stack Developer",
    },
  },
  {
    id: "4",
    chat: {
      conversationHistory: [],
    },
    jobPosition: {
      description:
        "Passionate about building modern user interfaces with Angular? Join us as a Front-end Developer! In this role, you will be responsible for creating dynamic and responsive web applications using Angular. Strong proficiency in TypeScript and a keen eye for design details are essential. If you are excited about pushing the boundaries of web development with Angular, we want to hear from you!",
      experience: 2,
      id: "4",
      stacks: ["Angular", "TypeScript"],
      title: "Front-end Developer",
    },
  },
];
