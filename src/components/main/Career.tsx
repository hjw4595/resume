export interface CareerContent {
  company: string;
  period: string;
  contents: {
    project: string;
    description: string;
    skillList: string[];
    result: string[];
  }[];
}

interface Props {
  list: CareerContent[];
}

const ContentItem = ({ company, period, contents }: CareerContent) => {
  return (
    <div key={company} className="relative flex">
      <div className="w-[160px]">
        <div className="sticky top-0 ">
          <div>{company}</div>
          <div>{period}</div>
        </div>
      </div>
      {contents.map((project) => (
        <div key={project.project} className="flex-1 h-[500px]">
          <div>{project.description}</div>
          <div>{project.project}</div>
          <div>
            {project.skillList.map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
          <div>
            {project.result.map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

function Career({ list }: Props) {
  return <div>{list.map((item) => ContentItem(item))}</div>;
}

export default Career;
