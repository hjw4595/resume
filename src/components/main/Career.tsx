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
      <div>
        {contents.map((project) => (
          <div key={project.project} className="flex-1 mb-12">
            <div>
              <span>프로젝트 : </span>
              {project.project}
            </div>
            <div>
              <span>간단설명 : </span>
              {project.description}
            </div>
            <div className="flex">
              <span>기술스택 : </span>
              {project.skillList.toString()}
            </div>
            <div>
              {project.result.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Career({ list }: Props) {
  return <div>{list.map((item) => ContentItem(item))}</div>;
}

export default Career;
