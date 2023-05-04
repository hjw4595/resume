import { ReactNode } from "react";

export interface IntroContentTypes {
  name: string;
  contects: {
    phone: string;
    github: string;
    email: string;
  };
  shortIntro: ReactNode;
}

interface Props {
  intro: IntroContentTypes;
}

const titleRow = (title: string, content: string) => (
  <div className="flex">
    <div className="font-bold w-48">{title}</div>
    <div>{content}</div>
  </div>
);

function Intro({ intro }: Props) {
  const { name, contects, shortIntro } = intro;
  return (
    <div>
      <div>{name}</div>
      <div>
        {titleRow("Phone", contects.phone)}
        {titleRow("Email", contects.email)}
        {titleRow("Github", contects.github)}
      </div>
      <div>{shortIntro}</div>
    </div>
  );
}

export default Intro;
