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
  const skillList = contents.map((item) => item.skillList).toString();
  const styledSkillList = skillList.replaceAll(",", ", ");

  return (
    <div key={company} className="relative flex">
      <div className="flex-[1_1_0%] min-w-[250px]">
        <div className="sticky top-0 ">
          <div className="font-bold text-xl">{company}</div>
          <div className="text-slate-800">{period}</div>
        </div>
      </div>
      <div className="flex-[4_4_0%]">
        {contents.map((project) => (
          <div key={project.project} className="mb-12">
            <div className="mb-2">
              <span className="font-bold">프로젝트 : </span>
              <span className="text-slate-800">{project.project}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold">간단설명 : </span>
              <span className="text-slate-800">{project.description}</span>
            </div>
            <div className="flex mb-2">
              <span className="font-bold">기술스택 : </span>
              <span className="text-slate-800">{styledSkillList}</span>
            </div>
            <div>
              <span className="font-bold">업무내용 : </span>
              <div className="text-slate-800">
                {project.result.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
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
