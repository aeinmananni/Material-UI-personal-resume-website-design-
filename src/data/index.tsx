import { ResumeType, TabsType, TimeLineType } from "../models";

export const tabs: TabsType[] = [
  { title: "Resume", link: "resume" },
  { title: "SkilsAndServices", link: "skills" },
  { title: "Portfolio", link: "portfolio" },
  { title: "Contact", link: "contact" },
];

export const timeLineItems: TimeLineType[] = [
  { title: "Name", value: "fullName" },
  { title: "Birth", value: "BirthdayValue" },
  { title: "Job", value: "FreeLancer" },
  { title: "Email", value: "mananniaein1234@gmail.com" },
  { title: "phone", value: "phoneNumber" },
];

export const resumeItems: ResumeType[] = [
  {
    icons: <i></i>,
    title: "fullStackDeveloper",
    description: "descriptionFullStack",
    date: "dateFullStak",
  },
  {
    icons: <i></i>,
    title: "Fullstack-developer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus saepe natus hic esse et accusantium delectus. Accusantium nemo consequuntur unde provident deserunt vero ut ab dolorum, repellendus ipsa id!`,
    date: "2020",
  },
  {
    icons: <i></i>,
    title: "Fullstack-developer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus saepe natus hic esse et accusantium delectus. Accusantium nemo consequuntur unde provident deserunt vero ut ab dolorum, repellendus ipsa id!`,
    date: "2020",
  },
  {
    icons: <i></i>,
    title: "Fullstack-developer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus saepe natus hic esse et accusantium delectus. Accusantium nemo consequuntur unde provident deserunt vero ut ab dolorum, repellendus ipsa id!`,
    date: "2020",
  },
];
